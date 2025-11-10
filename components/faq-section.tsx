"use client"

import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const faqs = [
    {
      question: "How do you handle PHI?",
      answer: "All PHI is encrypted in transit and at rest. We are HIPAA compliant and SOC 2 Type II certified. BAAs are available on request.",
    },
    {
      question: "Which EHRs do you support?",
      answer: "We support major EHR systems including Epic, Cerner, Athenahealth, eClinicalWorks, and more. We can also work with custom or legacy systems through our API integration layer.",
    },
    {
      question: "Can you handle custom workflows?",
      answer: "Yes! We specialize in custom workflows. Our team will work with you to configure intake forms, field mappings, and automation rules specific to your practice needs.",
    },
    {
      question: "What's the timeline to first workflow?",
      answer: "Most customers go live with their first workflow within 2-3 weeks. This includes initial setup, mapping configuration, testing, and training.",
    },
    {
      question: "Do you support on-premise deployments?",
      answer: "Yes, we offer on-premise deployment options for organizations with specific security or compliance requirements. Contact us to discuss your needs.",
    },
    {
      question: "What kind of SLAs do you provide?",
      answer: "We offer 99.9% uptime SLA with 24/7 monitoring and support. Enterprise customers can upgrade to dedicated support with faster response times.",
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">
                <span className="text-accent mr-2">❓</span>
                FAQ
              </Badge>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Frequently asked{" "}
              <span className="text-accent">questions</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
