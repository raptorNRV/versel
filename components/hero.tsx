import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center pt-16">
      <div className="space-y-6">
        <p className="font-mono text-primary">Bonjour, je suis</p>
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">Lucas Mary.</h1>
        <h2 className="text-3xl font-bold text-muted-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance">
          Développeur Web Freelance à Caen.
        </h2>
        <p className="max-w-xl text-muted-foreground leading-relaxed">
          Je suis un <strong>développeur web freelance basé à Caen</strong>, en Normandie. Je crée des{" "}
          <strong>sites internet sur mesure</strong>, des applications web modernes et des solutions e-commerce.
          Spécialisé en React, Next.js et Node.js, j&apos;accompagne les entreprises et entrepreneurs dans leur
          transformation digitale.
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Caen, Normandie - Disponible en remote</span>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary/10 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            Demander un devis gratuit
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/lucasmary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub de Lucas Mary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/lucasmary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn de Lucas Mary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@lucasmary.fr"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Contacter Lucas Mary par email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
