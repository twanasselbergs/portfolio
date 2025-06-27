import ProjectCard from "@/components/PortfolioCard";

const works = [
  {
    imgSrc: "../../img/portfolio/love-u-festival.png",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "Love U Festival",
    tags: ["Svelte", "PWA", "Figma", "Tailwind"],
    description:
      "Love U Festival is een individueel schoolproject voor het fictieve bedrijf Love U. Voor dit project heb ik een Progressive Web App (PWA) gebouwd waarmee festivalbezoekers eenvoudig informatie kunnen vinden.",
    github: "https://github.com/twanasselbergs/love-u-festival",
    url: "https://love-u-festival.twanasselbergs.com",
  },
  {
    imgSrc: "../../img/portfolio/happy-herbivore.png",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "Happy Herbivore",
    tags: ["React", "Prisma", "WebSockets", "TypeScript", "Tailwind"],
    description:
      "Happy Herbivore is gebouwd voor een fictief restaurant. In tweetallen kregen we de taak om een self-service kiosk systeem te bouwen. Naast de kiosk hebben wij ook een keukendashboard gebouwd met gebruik van WebSockets.",
    github: "https://github.com/twanasselbergs/happy-herbivore",
    url: "https://happy-herbivore.twanasselbergs.com",
  },
  {
    imgSrc: "../../img/portfolio/oog-en-onderwijs.png",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "Oog & Onderwijs",
    tags: ["Vue", "TypeScript", "Figma", "Tailwind"],
    description:
      "Oog & Onderwijs is een website ontwikkeld voor een echte klant in de onderwijssector. Het bedrijf richt zich op het geven van gastlessen bij universiteiten en hogescholen. De site biedt een overzicht van het aanbod en maakt eenvoudig contact mogelijk.",
    github: "https://github.com/twanasselbergs/oog-en-onderwijs",
    url: "https://oogenonderwijs.nl",
  },
  {
    imgSrc: "../../img/portfolio/focus6.png",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "Focus6",
    tags: ["Svelte", "Figma", "WordPress", "Tailwind"],
    description:
      "Focus6 is een website die is gebouwd voor een echte klant. Het bedrijf gaf klassen de taak om in groepen van vier voor hen een website te ontwerpen en te realiseren. Uiteindelijk hebben zij onze website gekozen om hun bedrijf te vertegenwoordigen.",
    github: "https://github.com/twanasselbergs",
    url: "https://focus6.nl",
  },
  {
    imgSrc: "../../img/portfolio/spotify-remote.png",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "Spotify Remote",
    tags: ["React", "WebSockets", "Spotify-API"],
    description:
      "Met Spotify Remote kun je de Spotify-app op je telefoon of laptop in realtime besturen via de website dankzij WebSockets. Naast bedieningselementen zie je onder andere de artiestennaam en het album.",
    github: "https://github.com/twanasselbergs/spotify-remote",
    url: "https://spotify-remote.twanasselbergs.com",
  },
  {
    imgSrc: "../../img/portfolio/ns-bord.png",
    logoSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "NS Bord",
    tags: ["Vue", "Tailwind", "NS-API"],
    description:
      "Dit NS-bord maakt gebruik van de officiële API van NS. De data wordt opgehaald en dynamisch weergegeven. Het bord wordt ook gebruikt bij Het BUREAU, zodat leerlingen hun bus- en treintijden kunnen bekijken.",
    github: "https://github.com/twanasselbergs",
    url: "https://u230061.gluwebsite.nl",
  },
];

export default function Work() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Portfolio</h2>

        <div className="grid gap-x-6 gap-y-8 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(
            (
              { imgSrc, logoSrc, title, tags, description, github, url },
              key
            ) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                logoSrc={logoSrc}
                title={title}
                tags={tags}
                description={description}
                github={github}
                url={url}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
