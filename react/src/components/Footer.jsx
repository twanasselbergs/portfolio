import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Over Mij",
    href: "#over-mij",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/TwanAsselbergs",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/twanasselbergs/",
  },
];

const Footer = () => {
  return (
    <footer className="section mb-6 xl:mb-16">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg-max-w-[12ch] reveal-up">
              Laten we samenwerken!
            </h2>

            <ButtonPrimary
              href="mailto:twanasselbergs@outlook.com"
              label="Stuur me een e-mail"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Navigatie</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 hover:text-zinc-200 py-1 transition-colors duration-500 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 hover:text-zinc-200 py-1 transition-colors duration-500 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end pt-10 mb-8">
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-300">Twan Asselbergs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
