"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function WorkflowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const steps = [
    {
      number: "1",
      title: "Configure intake and mapping",
      description: "Set up your forms, field mappings, and validation rules",
    },
    {
      number: "2",
      title: "Validate and test on staging",
      description: "Run test submissions and verify data appears correctly",
    },
    {
      number: "3",
      title: "Go live with monitoring",
      description: "Deploy to production with real-time alerts and audit logs",
    },
  ]

  return (
    <section id="workflow" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4">
              <span className="text-accent mr-2">🚀</span>
              How it works
            </Badge>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Production-ready in{" "}
            <span className="text-accent">3 simple steps</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-card/50 border-border/40 backdrop-blur-sm h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[120px] font-bold text-accent/5 leading-none">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
