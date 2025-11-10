"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ScheduleCallButton from "@/components/schedule-call/ScheduleCallButton"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <motion.span
                className="text-accent mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ●
              </motion.span>
              HIPAA-Compliant Patient Intake
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            HIPAA‑first{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent animate-gradient">
                website intake to EHR
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/80 to-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Turn website forms into clean, structured EHR data. Less typing. Fewer errors. Faster care.
          </motion.p>

          <motion.div
            className="flex justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ScheduleCallButton
              buttonText="Get a walkthrough"
              className="px-8 py-6 text-lg h-auto"
              size="lg"
            />
          </motion.div>

          <motion.div
            className="relative mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-muted-foreground">Patient Intake Flow</span>
                <Badge variant="secondary" className="text-xs">Live</Badge>
              </div>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <span>Website</span>
                </div>
                <div className="w-12 h-0.5 bg-accent/40"></div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <span>Intake Engine</span>
                </div>
                <div className="w-12 h-0.5 bg-accent/40"></div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                    <span className="text-2xl">📋</span>
                  </div>
                  <span>EHR</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
