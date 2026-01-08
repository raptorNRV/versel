export function About() {
  const technologies = ["JavaScript (ES6+)", "TypeScript", "React / Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"]

  return (
    <section id="about" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-10">
        <span className="font-mono text-primary text-xl">01.</span>À propos de moi
        <span className="h-px flex-1 bg-border max-w-xs" />
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Bonjour ! Je suis <span className="text-primary font-semibold">Lucas Mary</span>, développeur web freelance
            basé à <strong>Caen</strong>, en Normandie. Passionné par le développement web depuis plusieurs années,
            j&apos;aide les entreprises locales et nationales à développer leur présence en ligne.
          </p>
          <p>
            Mon expertise couvre la <strong>création de sites internet</strong>, le développement d&apos;
            <strong>applications web sur mesure</strong> et les solutions <strong>e-commerce</strong>. J&apos;interviens
            auprès de startups, PME et entrepreneurs pour transformer leurs idées en produits digitaux performants.
          </p>
          <p>
            Basé à Caen, je travaille avec des clients dans toute la <strong>Normandie</strong> (Caen, Rouen, Le Havre,
            Cherbourg) mais également partout en France grâce au télétravail.
          </p>
          <p>Voici les technologies que je maîtrise :</p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
            {technologies.map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="text-primary">▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group mx-auto">
          <div className="relative w-64 h-64 rounded-lg overflow-hidden bg-primary/20">
            <div className="absolute inset-0 flex items-center justify-center text-6xl">👨‍💻</div>
          </div>
          <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </section>
  )
}
