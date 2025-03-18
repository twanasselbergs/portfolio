import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur is assumenda itaque delectus quaerat.",
    name: "Recensent",
    imgSrc: "../../images/people-1.jpg",
    company: "Bedrijf",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur is assumenda itaque delectus quaerat.",
    name: "Recensent",
    imgSrc: "../../images/placeholder.png",
    company: "Bedrijf",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur is assumenda itaque delectus quaerat.",
    name: "Recensent",
    imgSrc: "../../images/placeholder.png",
    company: "Bedrijf",
  },
  {
    content:
      "Het was een fantastische ervaring! Ik heb er een mooie website voor teruggekregen.",
    name: "Focus6",
    imgSrc: "../../images/focus6-logo.png",
    company: "Bedrijf",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur is assumenda itaque delectus quaerat.",
    name: "Recensent",
    imgSrc: "../../images/placeholder.png",
    company: "Bedrijf",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur is assumenda itaque delectus quaerat.",
    name: "Recensent",
    imgSrc: "../../images/placeholder.png",
    company: "Bedrijf",
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-1000",
    });
  });

  return (
    <section id="testimonials" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Testimonials van klanten</h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
