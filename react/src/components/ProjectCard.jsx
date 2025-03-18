import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-[30px] hover:scale-[101%] bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 duration-500 transition-[colors, scale]" +
        classes
      }>
      <figure className="img-box aspect-square rounded-[30px] mx-1 mt-1 mb-4 brightness-75">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover object-left-top"
        />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3 ">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-full">
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-2xl grid place-items-center bg-gray-400 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

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
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
