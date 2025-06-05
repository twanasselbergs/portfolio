import { useRef, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";

export default function Navbar({ navOpen }) {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const sections = useRef([]);
  const isClicking = useRef(false);

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "Over Mij",
      link: "#over-mij",
      className: "nav-link",
    },
    {
      label: "Portfolio",
      link: "#portfolio",
      className: "nav-link",
    },
    {
      label: "Testimonials",
      link: "#testimonials",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link",
    },
  ];

  const initActiveBox = () => {
    if (lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  useLayoutEffect(() => {
    const updateSections = () => {
      sections.current = navItems
        .map(({ link }) => document.getElementById(link.replace("#", "")))
        .filter(Boolean);
    };
    updateSections();
    const observer = new MutationObserver(updateSections);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClicking.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeSection = entry.target.getAttribute("id");
            const activeLink = document.querySelector(
              `.nav-link[href="#${activeSection}"]`
            );
            if (activeLink) {
              lastActiveLink.current?.classList.remove("active");
              activeLink.classList.add("active");
              lastActiveLink.current = activeLink;
              initActiveBox();
            }
          }
        });
      },
      { threshold: 0.55 }
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("resize", initActiveBox);
      observer.disconnect();
    };
  }, [navItems]);

  const activeCurrentLink = (event) => {
    event.preventDefault();
    isClicking.current = true;
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;
    initActiveBox();
    setTimeout(() => {
      isClicking.current = false;
    }, 1800);
  };

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}>
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};
