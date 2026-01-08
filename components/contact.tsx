"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle, MapPin, Mail, Phone } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-primary mb-4">05. Contact</p>
        <h2 className="text-4xl font-bold text-foreground mb-6">Votre projet web à Caen</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Vous avez un projet de <strong>site internet</strong> ou d&apos;<strong>application web</strong> ? Basé à
          Caen, je suis disponible pour discuter de vos besoins et vous proposer un <strong>devis gratuit</strong>.
          N&apos;hésitez pas à me contacter !
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Caen, Normandie</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:contact@lucasmary.fr" className="hover:text-primary transition-colors">
              contact@lucasmary.fr
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+33600000000" className="hover:text-primary transition-colors">
              06 00 00 00 00
            </a>
          </div>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center gap-4 p-8 bg-card rounded-lg">
            <CheckCircle className="h-12 w-12 text-primary" />
            <p className="text-lg text-foreground">Merci pour votre message ! Je vous répondrai sous 24h.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
                Type de projet
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
              >
                <option value="">Sélectionnez un type de projet</option>
                <option value="site-vitrine">Site vitrine</option>
                <option value="e-commerce">Site e-commerce</option>
                <option value="application-web">Application web sur mesure</option>
                <option value="refonte">Refonte de site existant</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                Décrivez votre projet
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Parlez-moi de votre projet, vos objectifs, votre budget estimé..."
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 font-medium"
            >
              {isLoading ? (
                "Envoi en cours..."
              ) : (
                <>
                  Demander un devis gratuit <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
