"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About Me </SectionHeading>
      <p className="mb-3">
        Hello, I am Rutwik Chaudhari. With a solid foundation in computer
        science and a proven track record of success in software engineering
        roles, I am a highly motivated individual dedicated to delivering
        innovative solutions and driving efficiency in technology-driven
        environments. From my rigorous academic journey at Veermata Jijabai
        Technological Institute (VJTI) to my ongoing pursuit of a Master's
        degree in Computer Science at Arizona State University, I have
        consistently excelled, maintaining a perfect GPA in my master's program
        and earning accolades for my dedication. I am proficient in programming
        languages such as Python, Java and Javascript. I have developed multiple
        web applications and
      </p>
      <p className="mb-3">
        When I'm not working or studying, I enjoy going on hikes and exploring
        nature. I also love watching TV shows and movies, and cooking up tasty
        meals. And I have a keen interest in following the world of finance.
      </p>

      <p className="mb-3">
        If you are looking for a passionate and driven individual who can bring
        a unique blend of technical expertise to your team, let's connect! I am
        excited about the prospect of contributing my skills and enthusiasm to a
        forward-thinking organization.
      </p>
    </motion.section>
  );
}
