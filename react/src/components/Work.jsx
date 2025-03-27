import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "../../images/happy-herbivore.png",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "Happy Herbivore",
    tags: ["React", "Tailwind", "Prisma"],
    description:
      "Happy Herbivore heb ik samen met een klasgenoot gebouwd. We kregen de taak om een kiosk te maken voor hun fictieve restaurant. Bij de kiosk hoort ook een adminpanel voor de keuken, waar je orders kunt voorbereiden en voltooien.",
    projectLink: "https://u230654.gluwebsite.nl/happy-herbivore/",
  },
  {
    imgSrc: "../../images/focus6.png",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "Focus6",
    tags: ["Svelte", "Tailwind", "WordPress"],
    description:
      "Focus6 is een website die is gebouwd voor een echte klant. Het bedrijf gaf ons de taak om in groepen een website te maken. Uiteindelijk hebben zij onze website gekozen om hun bedrijf te vertegenwoordigen.",
    projectLink: "https://focus6.nl/",
  },
  {
    imgSrc: "../../images/annexbios.png",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "AnnexBios",
    tags: ["PHP", "MySQL", "API"],
    description:
      "AnnexBios is een groepsproject. Wij hebben voor een fictieve bioscoop een website gemaakt. Hierbij moesten we gebruikmaken van een API om de films en de filmdata op te halen.",
    projectLink: "https://u230654.gluwebsite.nl/annexbios/",
  },
  {
    imgSrc: "../../images/hoveniers.png",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "H.H. Hoveniers",
    tags: ["Svelte", "Tailwind", "CMS"],
    description:
      "Hendrik Hogendijk Hoveniers heb ik samen met drie klasgenoten gebouwd. Voor deze opdracht kregen wij de taak om een website te maken voor een bedrijf met een zelfgebouwd contentmanagementsysteem.",
    projectLink: "https://u230654.gluwebsite.nl/hendrik-hogendijk-hoveniers/",
  },
  {
    imgSrc: "../../images/apple.png",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "Apple",
    tags: ["PHP", "JavaScript"],
    description:
      "Deze Apple-clone was mijn eerste individuele opdracht. De taak was om een zelfgebouwde dynamische webshop te maken met gebruik van PHP. Je kunt items en accessoires bestellen, je winkelmand bekijken en een order plaatsen.",
    projectLink: "https://u230654.gluwebsite.nl/apple/",
  },
  {
    imgSrc: "../../images/ns.png",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "NS Bord",
    tags: ["Vue", "Tailwind", "API"],
    description:
      "Dit NS-bord maakt gebruik van de officiële API van NS. De data wordt opgehaald en dynamisch weergegeven. Het bord wordt ook gebruikt bij Het BUREAU, zodat leerlingen hun bus- en treintijden kunnen bekijken.",
    projectLink: "https://u230061.gluwebsite.nl/",
  },
];

const Work = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Mijn portfolio projecten</h2>

        <div className="grid gap-x-6 gap-y-8 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] reveal-up">
          {works.map(
            (
              { imgSrc, logoSrc, title, tags, description, projectLink },
              key
            ) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                logoSrc={logoSrc}
                title={title}
                tags={tags}
                description={description}
                projectLink={projectLink}
                classes="reveal-up"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
