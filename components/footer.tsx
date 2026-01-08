import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-border">
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
