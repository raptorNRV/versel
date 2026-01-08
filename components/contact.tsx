"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

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
        <p className="font-mono text-primary mb-4">05. Et maintenant ?</p>
        <h2 className="text-4xl font-bold text-foreground mb-6">Travaillons ensemble</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question, un projet en tête,
          ou simplement envie de dire bonjour, n&apos;hésitez pas à me contacter !
        </p>

        {isSubmitted ? (
          <div className="flex flex-col items-center gap-4 p-8 bg-card rounded-lg">
            <CheckCircle className="h-12 w-12 text-primary" />
            <p className="text-lg text-foreground">Merci pour votre message ! Je vous répondrai rapidement.</p>
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
                Sujet
              </label>
              <input
                id="subject"
                name="subject"
                required
                placeholder="Sujet de votre message"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Votre message..."
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                "Envoi en cours..."
              ) : (
                <>
                  Envoyer <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-12">
          <a href="mailto:votre@email.com" className="text-primary hover:underline">
            votre@email.com
          </a>
        </div>
      </div>
    </section>
  )
}
