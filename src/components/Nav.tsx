import React, { useState, useEffect, useCallback } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { motion } from "framer-motion";
import { Cross as Hamburger } from "hamburger-react";
import { Divider } from "@nextui-org/divider";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Array with section names and ids
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Animation variants for the sliding mobile menu
  const menuVariants = {
    open: {
      x: 0,
      y: 64,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    closed: {
      x: "-100%",
      y: 64,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  // Hover animation for individual links
  const linkHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  // Section observer for active section highlighting
  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    setActiveSection(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-xl uppercase">Priyangsu.</p>
        </NavbarBrand>
        <div className="sm:hidden block">
          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            direction="right"
          />
        </div>
      </NavbarContent>

      {/* Desktop menu */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(({ name, id }, index) => (
          <NavbarItem key={id}>
            <button
              className={`w-full ${
                activeSection === id ? "underline font-bold" : ""
              }`}
              onClick={() => scrollToSection(id)}
            >
              {name}
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile menu with animation */}
      <motion.div
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 left-0 h-screen w-[80%] bg-white z-50 shadow-lg sm:hidden"
      >
        <div className="flex flex-col gap-8 p-10">
          <p className="text-3xl font-bold">Menu</p>
          <Divider />
          {menuItems.map(({ name, id }, index) => (
            <motion.div
              key={id}
              whileHover="hover"
              variants={linkHoverVariants}
            >
              <button
                className={`text-lg text-right ${
                  activeSection === id ? "underline font-bold" : ""
                }`}
                onClick={() => scrollToSection(id)}
              >
                {name}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Navbar>
  );
}
