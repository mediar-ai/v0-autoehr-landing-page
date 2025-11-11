"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <span className="text-accent mr-2">💰</span>
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Pay for{" "}
              <span className="text-accent">successful executions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent, usage-based pricing aligned to outcomes. No charge for failed runs.
            </p>
          </div>

          <Card className="p-8 bg-card/50 border-border/40 backdrop-blur-sm text-center">
            <div className="mb-6">
              <div className="text-5xl font-bold mb-2">Usage-based</div>
              <div className="text-muted-foreground">Only pay for what you use</div>
            </div>
            <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Per successful intake submission</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Volume discounts available</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Minimum per-workflow pricing</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>No charge for failed runs</span>
              </li>
            </ul>
            <Button asChild size="lg">
              <a href="#contact">Talk pricing</a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
