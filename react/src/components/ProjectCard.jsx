import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  description,
  projectLink,
  classes,
}) => {
  return (
    <div
      className={
        "relative p-4 rounded-[30px] hover:scale-[101%] bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 duration-500 transition-[colors, scale]" +
        classes
      }>
      <figure className="img-box aspect-square rounded-[30px] mx-1 mt-1 mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="title-1 mb-3 ml-1.5">{title}</h3>
          <div className="flex flex-wrap items-center gap-1 font-semibold">
            {tags.map((label, index) => (
              <span
                key={index}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-full ml-0.5">
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-full grid place-items-center bg-gray-400 text-zinc-950 shrink-0 mt-8">
          <span
            className="material-symbols-rounded font-bold text-gray-600"
            aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      <p className="h-32 text-sm text-zinc-400 mt-4 px-2">{description}</p>

      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
