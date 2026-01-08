import type React from "react"
import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Votre Nom | Développeur Full-Stack",
  description: "Portfolio de développeur full-stack spécialisé dans la création d'applications web modernes.",
  keywords: ["développeur", "full-stack", "react", "next.js", "portfolio"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
