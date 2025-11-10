export async function sendNotificationEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  companySize: string;
  useCase: string;
}) {
  // Simple email notification using Loops API directly
  const notificationHtml = `
    <h2>New AutoSAP.ai Demo Request</h2>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Company:</strong> ${data.company}</p>
    <p><strong>Role:</strong> ${data.role}</p>
    <p><strong>Company Size:</strong> ${data.companySize}</p>
    <p><strong>Use Case:</strong><br>${data.useCase}</p>
    <hr>
    <p>Please reach out to schedule a demo within 24 hours.</p>
  `;

  const teamEmails = ['louis@mediar.ai', 'matt@mediar.ai'];

  // Send to each team member
  for (const teamEmail of teamEmails) {
    try {
      const response = await fetch('https://app.loops.so/api/v1/transactional', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transactionalId: process.env.LOOPS_TRANSACTIONAL_ID,
          email: teamEmail,
          dataVariables: {
            subject: `New Demo Request: ${data.firstName} ${data.lastName} from ${data.company}`,
            content: notificationHtml,
            leadName: `${data.firstName} ${data.lastName}`,
            leadEmail: data.email,
            leadCompany: data.company,
            leadRole: data.role,
            leadCompanySize: data.companySize,
            leadUseCase: data.useCase,
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Failed to send email to ${teamEmail}:`, errorText);
      }
    } catch (error) {
      console.error(`Error sending to ${teamEmail}:`, error);
    }
  }

  // Also send confirmation to the user
  try {
    await fetch('https://app.loops.so/api/v1/transactional', {
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
          subject: 'Your AutoSAP.ai Demo Request Has Been Received',
          content: `Hi ${data.firstName},<br><br>Thank you for your interest in AutoSAP.ai! We've received your demo request and will reach out within 24 hours to schedule a personalized demonstration.<br><br>Best regards,<br>The AutoSAP.ai Team`,
        },
      }),
    });
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}