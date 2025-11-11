"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SecuritySection() {
  const securityFeatures = [
    "HIPAA compliance built-in",
    "Encryption in transit and at rest",
    "Role-based access controls",
    "Complete audit trails",
    "BAAs available on request",
    "SOC 2 Type II certified",
  ]

  return (
    <section id="security" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <span className="text-accent mr-2">🔐</span>
              Security & Compliance
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Built for{" "}
              <span className="text-accent">healthcare security</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade security and compliance from day one.
            </p>
          </div>

          <Card className="p-8 bg-card/50 border-border/40 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <span className="text-accent text-sm">✓</span>
                  </div>
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
