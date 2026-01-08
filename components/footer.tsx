import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-border">
      <div className="flex justify-center gap-6 mb-6 md:hidden">
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
          aria-label="Contacter Lucas Mary"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
        <MapPin className="h-4 w-4 text-primary" />
        <span>Développeur Web Freelance à Caen, Normandie</span>
      </div>
      <p className="text-sm text-muted-foreground font-mono">
        Conçu & développé par{" "}
        <a href="https://github.com/lucasmary" className="text-primary hover:underline">
          Lucas Mary
        </a>
      </p>
      <p className="text-xs text-muted-foreground mt-2">
        © {new Date().getFullYear()} Lucas Mary - Tous droits réservés
      </p>
    </footer>
  )
}
