import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const whatIDo = [
  {
    title: "Front-End Development",
    description:
      "Crafting responsive, user-focused interfaces with React, JavaScript, and CSS.",
  },
  {
    title: "Back-End Development",
    description:
      "Developing scalable APIs and server-side logic with Node.js and Nest.",
  },
  {
    title: "Full-Stack Solutions",
    description:
      "Delivering seamless, end-to-end solutions by integrating front-end and back-end systems.",
  },
  {
    title: "Headless CMS",
    description:
      "Building and managing content with headless CMS like Directus, Strapi, Sanity or Payload CMS.",
  },
  {
    title: "Cloud Hosting and Deployment",
    description:
      "Utilizing cloud platforms like AWS and Azure for scalable hosting and efficient deployment of applications.",
  },
];

const About = () => {
  const [inView, setInView] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Use entry.target directly
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="grid p-5 py-20 bg-transparent h-[850px] md:h-[700px]"
      ref={aboutRef}
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Text Section */}
        <motion.div
          className="space-y-5 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <p className="text-xl">About me</p>
            <p className="text-4xl font-bold">What I do</p>
          </div>

          <div className="mt-6 space-y-4">
            {whatIDo.map((item, index) => (
              <motion.div
                key={index}
                className="space-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <p className="text-xl font-semibold">
                  {index + 1}. {item.title}:{" "}
                  <span className="text-lg font-normal">
                    {item.description}
                  </span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full hidden lg:block h-fit"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src="/about_me.webp" alt="about me" className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
