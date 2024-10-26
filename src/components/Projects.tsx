import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "AlteraX. A social media platform",
      description: "A full stack social media built for everyone",
      url: "https://github.com/NxtNinja/AlteraX",
      techstack: [
        "Nextjs",
        "Tailwind",
        "Directus",
        "PostgreSQL",
        "Tanstack Query",
      ],
      status: "Completed",
    },
    {
      name: "Quick Note. A note taking app",
      description: "A note taking app built for everyone",
      url: "https://github.com/NxtNinja/Quik-Note",
      techstack: [
        "Nextjs",
        "Tailwind",
        "Nest.js",
        "PostgreSQL",
        "Prisma",
        "Tanstack Query",
      ],
      status: "Completed",
    },
    {
      name: "Expense Tracker. A expense tracking app",
      description: "A expense tracking app built for everyone",
      url: "https://github.com/NxtNinja/Expense-Tracker-FullStack",
      techstack: [
        "Nextjs",
        "Tailwind",
        "Fastify",
        "PostgreSQL",
        "Prisma",
        "Tanstack Query",
      ],
      status: "Completed",
    },
    {
      name: "Taskify. A Todo List App",
      description: "A todo list app built for everyone",
      url: "https://github.com/NxtNinja/taskify-webui-v1",
      techstack: [
        "Nextjs",
        "Tailwind",
        "Directus",
        "PostgreSQL",
        "Tanstack Query",
      ],
      status: "Completed",
    },
    {
      name: "Secrecy. A password manager",
      description: "A password manager built for everyone",
      url: "",
      techstack: [
        "Nextjs",
        "Tailwind",
        "Directus",
        "PostgreSQL",
        "Tanstack Query",
      ],
      status: "Ongoing",
    },
    {
      name: "Developer Portfolio. A portfolio website",
      description: "My own portfolio website",
      url: "https://github.com/NxtNinja/dev-portfolio-2.0",
      techstack: ["Nextjs", "Tailwind", "NextUI", "Jotai", "Framer Motion"],
      status: "Completed",
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: "easeInOut" },
    }),
  };

  return (
    <>
      <section
        id="projects"
        className="grid place-items-center gap-5 py-20 p-5"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <motion.p className="text-xl">My Projects</motion.p>
          <motion.p className="text-4xl font-bold">
            What I have cooked so far
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 w-full gap-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="col-span-2 w-full h-full "
            >
              <Card className="w-full p-5 h-full" radius="sm">
                <CardHeader className="text-xl font-bold flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <Chip
                      className="text-white"
                      color={
                        project.status === "Completed" ? "success" : "warning"
                      }
                    >
                      {project.status}
                    </Chip>
                    <p>{project.name}</p>
                  </div>
                  <Link href={project.url} target="_blank">
                    <ExternalLink />
                  </Link>
                </CardHeader>
                <CardBody>{project.description}</CardBody>
                <CardFooter>
                  <div className="space-y-2 space-x-2">
                    {project.techstack.map((tech, idx) => (
                      <Chip key={idx} className="bg-foreground-900 text-white">
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
