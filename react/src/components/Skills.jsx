import SkillCard from "./SkillCard";

const skillsItem = [
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    label: "React",
    desc: "JS Framework",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    label: "Figma",
    desc: "Designsoftware",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
    label: "WordPress",
    desc: "CMS",
  },
  {
    imgSrc: "../../images/javascript.svg",
    label: "JavaScript",
    desc: "Programmeertaal",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    label: "Node",
    desc: "Webserver",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
    label: "Svelte",
    desc: "JS Framework",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    label: "MongoDB",
    desc: "Database",
  },

  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    label: "Tailwind CSS",
    desc: "CSS Framework",
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Mijn essentiële tools</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[80ch] reveal-up">
          Hieronder de tools en technologieën die ik dagelijks gebruik, van
          designsoftware tot databases.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] reveal-up">
          {skillsItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
