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
            Bonjour ! Je suis <span className="text-primary">Votre Nom</span>, développeur passionné par la création
            d&apos;expériences digitales qui combinent design élégant et code performant.
          </p>
          <p>
            Mon parcours dans le développement web a commencé il y a plusieurs années, et depuis, j&apos;ai eu le
            privilège de travailler sur des projets variés, allant de startups innovantes à des entreprises établies.
          </p>
          <p>
            Aujourd&apos;hui, je me concentre sur la création d&apos;applications web modernes avec les dernières
            technologies, en mettant l&apos;accent sur l&apos;accessibilité et les bonnes pratiques.
          </p>
          <p>Voici quelques technologies avec lesquelles je travaille :</p>
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
