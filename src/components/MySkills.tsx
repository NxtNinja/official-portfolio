import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MySkills = () => {
  const [inView, setInView] = useState(false);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  const skills_frontend = [
    "/next_logo.svg",
    "/node_logo.svg",
    "/tailwind_logo.svg",
    "/typescript_logo.svg",
    "/nextui_logo.svg",
    "/expo_logo.svg",
  ];

  const skills_backend = [
    "/nest_logo.svg",
    "/node_logo.svg",
    "/directus_logo.svg",
    "/medusa_logo.svg",
    "/typescript_logo.svg",
    "/prisma_logo.svg",
    "/postgresql_logo.svg",
    "/fastify_logo.svg",
  ];

  const skills_cloud = ["/docker_logo.svg", "/digitalocean_logo.svg"];
  const skills_networking = ["/linux_logo.svg"];
  const skills_uiux = ["/figma_logo.svg"];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: i * 0.3, // Delay each card by 0.3 seconds
        ease: "easeInOut",
      },
    }),
  };

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  return (
    <>
      <section
        ref={skillsRef}
        id="skills"
        className="grid place-items-center gap-5 py-20 p-5"
      >
        <div className="text-center space-y-3">
          <p className="text-xl">My Skills</p>
          <p className="text-4xl font-bold">What my tech stack is</p>
        </div>

        {/* Main Skill Sections */}
        <motion.div
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover="hover"
          variants={cardVariants}
          className="grid grid-cols-1 md:grid-cols-6 w-full gap-3"
        >
          {/* Frontend Skills */}
          <Card className="col-span-3 w-full p-5" radius="sm">
            <CardHeader>
              <div className="grid grid-cols-5 md:grid-cols-8 gap-5">
                {skills_frontend.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={textVariants}
                  >
                    <img
                      src={skill}
                      alt="skill"
                      className="w-8 h-8 opacity-80"
                    />
                  </motion.div>
                ))}
              </div>
            </CardHeader>
            <CardBody className="text-2xl font-bold">
              Frontend Development
              <p className="text-base font-normal mt-2">
                Specializing in building visually appealing, responsive
                interfaces using the latest frontend tools and frameworks.
              </p>
            </CardBody>
          </Card>

          {/* Backend Skills */}
          <Card className="col-span-3 w-full p-5" radius="sm">
            <CardHeader>
              <div className="grid grid-cols-5 md:grid-cols-8 gap-5">
                {skills_backend.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={textVariants}
                  >
                    <img
                      src={skill}
                      alt="skill"
                      className="w-8 h-8 opacity-80"
                    />
                  </motion.div>
                ))}
              </div>
            </CardHeader>
            <CardBody className="text-2xl font-bold">
              Backend Development
              <p className="text-base font-normal mt-2">
                Creating robust, scalable backend solutions that handle data
                efficiently and serve as the backbone for complex applications.
              </p>
            </CardBody>
          </Card>
        </motion.div>

        {/* Other Skill Sections */}
        <motion.div
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover="hover"
          variants={cardVariants}
          className="grid grid-cols-1 md:grid-cols-6 w-full gap-3"
        >
          {/* Cloud Skills */}
          <Card className="col-span-2 w-full p-5" radius="sm">
            <CardHeader>
              <div className="grid grid-cols-4 gap-5">
                {skills_cloud.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={textVariants}
                  >
                    <img
                      src={skill}
                      alt="skill"
                      className="w-8 h-8 opacity-80"
                    />
                  </motion.div>
                ))}
              </div>
            </CardHeader>
            <CardBody className="text-2xl font-bold">
              Cloud Computing
              <p className="text-base font-normal mt-2">
                Deploying and managing applications in cloud environments using
                AWS, Azure, GCP, and containerization with Docker for high
                availability and scalability.
              </p>
            </CardBody>
          </Card>

          {/* Networking Skills */}
          <Card className="col-span-2 w-full p-5" radius="sm">
            <CardHeader>
              <div className="grid grid-cols-4 gap-5">
                {skills_networking.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={textVariants}
                  >
                    <img
                      src={skill}
                      alt="skill"
                      className="w-8 h-8 opacity-80"
                    />
                  </motion.div>
                ))}
              </div>
            </CardHeader>
            <CardBody className="text-2xl font-bold">
              Networking
              <p className="text-base font-normal mt-2">
                Configuring and securing networks with protocols and tools like
                TCP/IP, DNS, and VPNs to ensure data integrity and seamless
                connectivity.
              </p>
            </CardBody>
          </Card>

          {/* UI/UX Skills */}
          <Card className="col-span-2 w-full p-5" radius="sm">
            <CardHeader>
              <div className="grid grid-cols-4 gap-5">
                {skills_uiux.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={textVariants}
                  >
                    <img
                      src={skill}
                      alt="skill"
                      className="w-8 h-8 opacity-80"
                    />
                  </motion.div>
                ))}
              </div>
            </CardHeader>
            <CardBody className="text-2xl font-bold">
              UI/UX Design
              <p className="text-base font-normal mt-2">
                Designing user-centered, intuitive interfaces using tools like
                Figma, Adobe XD, and Sketch to enhance user experiences and
                engagement.
              </p>
            </CardBody>
          </Card>
        </motion.div>
      </section>
    </>
  );
};

export default MySkills;
