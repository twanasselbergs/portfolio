import CountUp from "react-countup";

export default function About() {
  return (
    <section id="over-mij" className="section">
      <div className="container">
        <div className="bg-zinc-800/10 p-7 md:p-12 rounded-[50px] reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[74ch]">
            "Hoi! Ik ben Twan, een gepassioneerde en leergierige student die
            momenteel een versneld traject softwareontwikkeling volgt aan het
            Grafisch Lyceum Utrecht. Ik heb een sterke interesse in full-stack
            development en ontwikkel graag gebruiksvriendelijke applicaties.
            Mijn huidige ambitie is om mijn studie af te ronden en daarna door
            te stromen naar de hbo-opleiding Software Engineering."
          </p>

          <div className="flex gap-7">
            <div className="flex flex-col flex-wrap">
              <div className="flex items-center md:mb-2">
                <span className="text-2xl md:text-4xl font-semibold md:w-10">
                  <CountUp start={0} end={21} duration={12} />
                </span>
                <span className="text-gray-500/80 ml-2 md:text-3xl font-semibold">
                  +
                </span>
              </div>
              <p className="text-zinc-400 text-sm font-semibold">
                Afgeronde Projecten
              </p>
            </div>

            <div className="flex flex-col flex-wrap">
              <div className="flex items-center md:mb-2">
                <span className="text-2xl md:text-4xl font-semibold md:w-8">
                  <CountUp start={0} end={2} duration={20} />
                </span>
                <span className="text-gray-500/80 md:text-3xl font-semibold">
                  +
                </span>
              </div>
              <p className="text-zinc-400 text-sm font-semibold">
                Jaren Ervaring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
