import { NextResponse } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  company: z.string(),
  role: z.string(),
  companySize: z.string(),
  useCase: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = requestSchema.parse(body);

    console.log('Received form submission:', data);

    // 1. Add contact to Loops
    try {
      const contactResponse = await fetch('https://app.loops.so/api/v1/contacts/create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          source: 'autoehr-landing',
          userGroup: 'autoflow',
          companyName: data.company,
          customAttributes: {
            role: data.role,
            companySize: data.companySize,
            useCase: data.useCase,
            requestedDemo: true,
            signupDate: new Date().toISOString(),
          },
        }),
      });

      const contactResult = await contactResponse.text();
      console.log('Loops contact creation response:', contactResponse.status, contactResult);

      if (!contactResponse.ok) {
        console.error('Failed to create Loops contact:', contactResult);
      }
    } catch (error) {
      console.error('Error adding to Loops:', error);
    }

    // 2. Send simple transactional emails to team
    const teamEmails = ['louis@mediar.ai', 'matt@mediar.ai'];

    for (const teamEmail of teamEmails) {
      try {
        console.log(`Sending notification to ${teamEmail}...`);

        const emailPayload = {
          transactionalId: process.env.LOOPS_TRANSACTIONAL_ID,
          email: teamEmail,
          dataVariables: {
            firstName: 'Team',
            leadName: `${data.firstName} ${data.lastName}`,
            leadEmail: data.email,
            leadCompany: data.company,
            leadRole: data.role,
            leadCompanySize: data.companySize,
            leadUseCase: data.useCase,
          },
        };

        console.log('Email payload being sent:', JSON.stringify(emailPayload, null, 2));

        const emailResponse = await fetch('https://app.loops.so/api/v1/transactional', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailPayload),
        });

        const emailResult = await emailResponse.text();
        console.log(`Email response for ${teamEmail}:`, emailResponse.status, emailResult);

        if (!emailResponse.ok) {
          console.error(`Failed to send email to ${teamEmail}:`, emailResult);

          // Try alternative: send a simple email through Loops events
          const eventResponse = await fetch('https://app.loops.so/api/v1/events/send', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: teamEmail,
              eventName: 'demo_request',
              eventProperties: {
                leadName: `${data.firstName} ${data.lastName}`,
                leadEmail: data.email,
                leadCompany: data.company,
                leadRole: data.role,
                leadCompanySize: data.companySize,
                leadUseCase: data.useCase,
              },
            }),
          });

          const eventResult = await eventResponse.text();
          console.log(`Event response for ${teamEmail}:`, eventResponse.status, eventResult);
        }
      } catch (error) {
        console.error(`Error sending email to ${teamEmail}:`, error);
      }
    }

    // 3. Send webhook notification as backup
    try {
      const webhookData = {
        text: `🏥 New AutoEHR Demo Request!`,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*New Demo Request from ${data.firstName} ${data.lastName}*`
            }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Email:* ${data.email}` },
              { type: 'mrkdwn', text: `*Company:* ${data.company}` },
              { type: 'mrkdwn', text: `*Role:* ${data.role}` },
              { type: 'mrkdwn', text: `*Size:* ${data.companySize}` }
            ]
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*Use Case:*\n${data.useCase}`
            }
          }
        ]
      };

      // You can add a Slack webhook URL here if you want Slack notifications
      // await fetch('YOUR_SLACK_WEBHOOK_URL', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(webhookData),
      // });

      console.log('Demo request data:', webhookData);
    } catch (error) {
      console.error('Webhook error:', error);
    }

    // 4. Send confirmation to the user
    try {
      const userEmailResponse = await fetch('https://app.loops.so/api/v1/transactional', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transactionalId: process.env.LOOPS_TRANSACTIONAL_ID,
          email: data.email,
          dataVariables: {
            firstName: data.firstName,
          },
        }),
      });

      const userEmailResult = await userEmailResponse.text();
      console.log('User confirmation email response:', userEmailResponse.status, userEmailResult);
    } catch (error) {
      console.error('Error sending confirmation to user:', error);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you within 24 hours to schedule your demo.',
    });

  } catch (error) {
    console.error('Schedule call error:', error);
    return NextResponse.json(
      { error: 'Failed to process request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}