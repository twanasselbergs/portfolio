import PropTypes from "prop-types";

export default function ReviewCard({ content, imgSrc, name, company }) {
  return (
    <div className="p-5 rounded-[50px] hover:bg-zinc-800/50 transition-colors duration-500 min-w-[320px] flex flex-col lg:min-w-[420px]">
      <p className="text-zinc-400 mb-8">"{content}"</p>

      <div className="flex items-center gap-2.5 mt-auto">
        <figure className="img-box rounded-full brightness-75">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="bg-cover w-12 h-12"
          />
        </figure>

        <div>
          <p className="font-extrabold">{name}</p>

          <p className="text-xs text-zinc-400">{company}</p>
        </div>
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};
