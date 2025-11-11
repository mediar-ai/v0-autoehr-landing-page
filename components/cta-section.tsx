"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScheduleCallButton from "@/components/schedule-call/ScheduleCallButton"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-12 bg-gradient-to-br from-accent/10 via-accent/5 to-background border-accent/20 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-30" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Badge variant="secondary" className="mb-4">
                  <span className="text-accent mr-2">📅</span>
                  Get Started
                </Badge>
              </motion.div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Ready to <span className="text-accent">automate your intake?</span>
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Transform your patient intake with HIPAA-first automation. Get started with a free
                consultation and see how we can help in 2 weeks.
              </motion.p>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <ScheduleCallButton
                  buttonText="Get a walkthrough"
                  className="px-8 py-6 text-lg h-auto"
                />
              </motion.div>
              <motion.div
                className="mt-8 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                No PHI collected on this form • HIPAA compliant
              </motion.div>

              <motion.div
                className="mt-12 text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                © 2025 autoEHR. All rights reserved.
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
