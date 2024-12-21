const aboutItems = [
  {
    label: "Afgeronde Projecten",
    number: 6,
  },
  {
    label: "Jaren Ervaring",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="over-mij" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 md:p-12 rounded-2xl reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Ik ben een gepassioneerde en leergierige student die momenteel
            softwareontwikkeling studeert aan het Grafisch Lyceum Utrecht. Ik
            heb een sterke interesse in full-stack development en creëer graag
            gebruiksvriendelijke applicaties. Mijn huidige ambitie is om mijn
            studie af te ronden en daarna door te stromen naar HBO-Software
            Developer.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl md:text-4xl font-semibold">
                    {number}
                  </span>
                  <span className="text-gray-500/80 md:text-3xl font-semibold">
                    +
                  </span>
                </div>

                <p className="text-zinc-400 text-sm">{label}</p>
              </div>
            ))}

            <img
              src="./images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
