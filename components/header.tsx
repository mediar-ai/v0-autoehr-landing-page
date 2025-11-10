"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Header() {
  return (
    <motion.header
      className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            auto<span className="text-accent">EHR</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm hover:text-accent transition-colors">
              Features
            </Link>
            <Link href="#security" className="text-sm hover:text-accent transition-colors">
              Security
            </Link>
            <Link href="#pricing" className="text-sm hover:text-accent transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm hover:text-accent transition-colors">
              FAQ
            </Link>
          </nav>

          <Button asChild>
            <Link href="#contact">Get a walkthrough</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
