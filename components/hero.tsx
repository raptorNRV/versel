import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center pt-16">
      <div className="space-y-6">
        <p className="font-mono text-primary">Bonjour, je suis</p>
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">Votre Nom.</h1>
        <h2 className="text-3xl font-bold text-muted-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          Je crée des expériences digitales exceptionnelles.
        </h2>
        <p className="max-w-xl text-muted-foreground leading-relaxed">
          Je suis un développeur full-stack passionné par la création d&apos;applications web modernes, performantes et
          accessibles. Actuellement disponible pour de nouvelles opportunités.
        </p>
        <div className="flex items-center gap-6 pt-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            Me contacter
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:votre@email.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
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
