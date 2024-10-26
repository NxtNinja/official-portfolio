import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { Chip } from "@nextui-org/chip";

const Hero = () => {
  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2, // Stagger each child
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const skills = [
    "/next_logo.svg",
    "/node_logo.svg",
    "/tailwind_logo.svg",
    "/typescript_logo.svg",
    "directus_logo.svg",
    "nest_logo.svg",
    "postgresql_logo.svg",
    "prisma_logo.svg",
  ];
  return (
    <section
      id="home"
      className="grid place-items-center h-[670px] md:h-[600px] py-12"
    >
      <motion.div
        className="z-10 flex flex-col justify-center items-center gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col justify-center items-center gap-3"
          variants={textVariants}
        >
          <motion.p className="md:text-2xl text-xl" variants={textVariants}>
            Hi, I'm
          </motion.p>
          <motion.p
            className="md:text-5xl text-4xl font-bold"
            variants={textVariants}
          >
            &lt;Priyangsu Banik/&gt;
          </motion.p>
          <motion.p
            className="md:text-2xl text-lg max-w-4xl text-center p-5"
            variants={textVariants}
          >
            I am a full stack developer with 4+ years of development experience.
            I specialize in headless commerce development, SAAS and custom
            softwares.
          </motion.p>
        </motion.div>

        {/* <motion.div
          className="flex justify-center items-center gap-3"
          variants={textVariants}
        >
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Button
              radius="full"
              className="bg-foreground-900 text-foreground-50 px-6"
              size="lg"
            >
              Download Resume
            </Button>
          </motion.div>
        </motion.div> */}

        <div className="grid place-items-center grid-cols-4 md:grid-cols-8 gap-10">
          {skills.map((skill, index) => (
            <motion.div key={index} variants={textVariants}>
              <img
                src={`${skill}`}
                alt="skill"
                className="w-10 h-10 opacity-80"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
