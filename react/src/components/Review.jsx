import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur is assumenda itaque delectus quaerat.",
    name: "Jan van Beek",
    imgSrc: "../../portfolio/images/people-1.jpg",
    company: "Bedrijf 1",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur is assumenda itaque delectus quaerat.",
    name: "Jonathan Joost",
    imgSrc: "../../portfolio/images/people-2.jpg",
    company: "Bedrijf 2",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur is assumenda itaque delectus quaerat.",
    name: "Willem ter Steegen",
    imgSrc: "../../portfolio/images/people-3.jpg",
    company: "Bedrijf 3",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur is assumenda itaque delectus quaerat.",
    name: "Noa Veer",
    imgSrc: "../../portfolio/images/people-4.jpg",
    company: "Bedrijf 4",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur is assumenda itaque delectus quaerat.",
    name: "Jesse Zand",
    imgSrc: "../../portfolio/images/people-5.jpg",
    company: "Bedrijf 5",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur is assumenda itaque delectus quaerat.",
    name: "Fred Teler",
    imgSrc: "../../portfolio/images/people-6.jpg",
    company: "Bedrijf 6",
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
