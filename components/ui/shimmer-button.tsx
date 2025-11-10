"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  borderRadius = "0.75rem",
  shimmerDuration = "3s",
  background = "rgba(0, 0, 0, 1)",
  ...props
}: ShimmerButtonProps) {
  return (
    <motion.button
      className={cn(
        "relative overflow-hidden px-8 py-6 text-lg font-medium",
        "bg-gradient-to-r from-accent via-accent/80 to-accent",
        "text-accent-foreground rounded-lg",
        "shadow-lg hover:shadow-xl transition-shadow",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 -top-[100%] left-0 w-full h-[300%]"
        style={{
          background: `linear-gradient(to bottom, transparent, ${shimmerColor}40, transparent)`,
        }}
        animate={{
          top: ["100%", "-100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.button>
  )
}
