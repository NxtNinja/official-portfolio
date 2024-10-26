import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import Projects from "@/components/Projects";

const index = () => {
  return (
    <>
      <div className="">
        <Hero />
        <About />
        <MySkills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default index;
