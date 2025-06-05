import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes = "" }) => {
  return (
    <div
      className={
        "flex items-center gap-3 rounded-full p-3 hover:bg-zinc-800/50 duration-500 transition-colors group " +
        classes
      }>
      <figure className="overflow-hidden w-12 h-12 p-2 transition-transform group-hover:scale-105 transform duration-500">
        <img
          src={imgSrc}
          alt={label}
          width={32}
          height={32}
          className="rounded-full"
        />
      </figure>

      <div>
        <h3 className="font-extrabold">{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
