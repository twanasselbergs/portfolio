import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36 2xl:pt-44">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              Twan Asselbergs
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Ik bouw moderne applicaties met een oog voor
            <span className="text-2xl">&nbsp; gebruiksvriendelijkheid</span>
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="../../Twan Asselbergs CV.pdf"
              label="Download CV"
              icon="download"
              target="_blank"
              rel="noopener noreferrer"
            />
            <ButtonOutline
              href="#over-mij"
              label="Naar Beneden"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto 
          bg-gradient-to-t from-gray-500/5 via-5% via-gray-500/5 to-70% rounded-[100px] overflow-hidden brightness-75">
            <img
              src="images/twan.png"
              alt="Twan Asselbergs"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
