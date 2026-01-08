import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center gap-6 mb-6 md:hidden">
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
      <p className="text-sm text-muted-foreground font-mono">
        Conçu & développé par{" "}
        <a href="https://github.com" className="text-primary hover:underline">
          Votre Nom
        </a>
      </p>
      <p className="text-xs text-muted-foreground mt-2">© {new Date().getFullYear()} Tous droits réservés</p>
    </footer>
  )
}
