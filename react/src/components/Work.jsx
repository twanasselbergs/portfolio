import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "../../portfolio/images/project-1.jpg",
    title: "Oog & Onderwijs",
    tags: ["CMS", "API", "Development"],
    projectLink: "https://u230654.gluwebsite.nl/index.html",
  },
  {
    imgSrc: "../../portfolio/images/project-2.jpg",
    title: "Focus6",
    tags: ["CMS", "API"],
    projectLink: "https://focus6.nl/",
  },
  {
    imgSrc: "../../portfolio/images/project-3.jpg",
    title: "AnnexBios",
    tags: ["Development", "API"],
    projectLink: "https://u230654.gluwebsite.nl/annexbios/",
  },
  {
    imgSrc: "../../portfolio/images/project-4.jpg",
    title: "H.H. Hoveniers",
    tags: ["Web-design", "Development"],
    projectLink: "https://u230654.gluwebsite.nl/index.html",
  },
  {
    imgSrc: "../../portfolio/images/project-5.jpg",
    title: "Apple (Clone)",
    tags: ["eCommerce", "Development"],
    projectLink: "https://u230654.gluwebsite.nl/apple/",
  },
  {
    imgSrc: "../../portfolio/images/project-6.jpg",
    title: "Lorem Ipsum",
    tags: ["Web-design", "Development"],
    projectLink: "https://u230654.gluwebsite.nl/index.html",
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
