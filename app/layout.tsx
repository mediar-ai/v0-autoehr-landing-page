import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "autoEHR - HIPAA-first website intake to EHR",
  description: "Turn website forms into clean, structured EHR data. Less typing. Fewer errors. Faster care.",
  keywords: "EHR automation, website intake to EHR, HIPAA automation, patient intake automation, healthcare workflow automation",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "autoEHR - HIPAA-first website intake to EHR",
    description: "Automate patient forms, eligibility, and routing into your EHR—without manual data entry.",
    type: "website",
    url: "https://autoehr.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "autoEHR - HIPAA-first website intake to EHR",
    description: "Turn website forms into clean, structured EHR data. Less typing. Fewer errors. Faster care.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
