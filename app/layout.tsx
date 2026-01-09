import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "autoEHR - HIPAA-First Website Intake to EHR Automation",
  description: "Turn website forms into clean, structured EHR data. HIPAA-compliant patient intake automation. Less typing. Fewer errors. Faster care.",
  keywords: "EHR automation, website intake to EHR, HIPAA automation, patient intake automation, healthcare workflow automation, medical data entry, EHR integration, healthcare AI",
  authors: [{ name: 'Mediar.ai' }],
  openGraph: {
    title: "autoEHR - HIPAA-First Website Intake to EHR",
    description: "Automate patient forms, eligibility, and routing into your EHR—without manual data entry. HIPAA-compliant.",
    siteName: "autoEHR",
    type: "website",
    url: "https://autoehr.com",
    images: [
      {
        url: '/og-autoehr.png',
        width: 1200,
        height: 630,
        alt: 'autoEHR - HIPAA-First Website Intake to EHR'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "autoEHR - HIPAA-First Website Intake to EHR",
    description: "Turn website forms into clean, structured EHR data. Less typing. Fewer errors. Faster care.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
