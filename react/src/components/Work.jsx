import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "../../images/placeholder-project.png",
    title: "Oog & Onderwijs",
    tags: ["Svelte", "Strapi"],
    projectLink: "https://u230654.gluwebsite.nl/",
  },
  {
    imgSrc: "../../images/focus6.png",
    title: "Focus6",
    tags: ["Svelte", "WordPress"],
    projectLink: "https://focus6.nl/",
  },
  {
    imgSrc: "../../images/annexbios.png",
    title: "AnnexBios",
    tags: ["PHP", "phpMyAdmin", "API"],
    projectLink: "https://u230654.gluwebsite.nl/annexbios/",
  },
  {
    imgSrc: "../../images/hoveniers.png",
    title: "H.H. Hoveniers",
    tags: ["Svelte", "Custom CMS"],
    projectLink: "https://u230654.gluwebsite.nl/hendrik-hogendijk-hoveniers/",
  },
  {
    imgSrc: "../../images/apple.png",
    title: "Apple (Clone)",
    tags: ["PHP", "eCommerce"],
    projectLink: "https://u230654.gluwebsite.nl/apple/",
  },
  {
    imgSrc: "../../images/placeholder-project.png",
    title: "Project",
    tags: ["Tag", "Tag"],
    projectLink: "https://u230654.gluwebsite.nl/",
  },
];

const Work = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Mijn portfolio projecten</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
