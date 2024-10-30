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
        I am a curious and experienced Software Engineer currently pursuing a
        Master's in Computer Science at Arizona State University (ASU), expected
        to graduate in May 2025. With a strong foundation in building reliable
        and scalable technology solutions, I am eager to apply my skills and
        tackle complex challenges in the tech industry. I am actively seeking
        Fall and Spring CoOps, as well as full-time opportunities starting May
        2025.
      </p>
      <p className="mb-3">
        During my time as a Software Engineer at UBS, I worked on a wide range
        of projects, from implementing cloud-native solutions to developing web
        applications and optimizing CI/CD pipelines. I redesigned and maintained
        critical systems, collaborated across teams to resolve production
        issues, and led initiatives that enhanced the efficiency of key
        applications. My contributions earned me the UBS Engineering Excellence
        award, and I am proud to have won the 2022 UBS Group Functions AI/ML
        Hackathon.
      </p>
      <p className="mb-3">
        In addition to my professional experience, I love participating in
        hackathons, where I can innovate and collaborate with like-minded
        individuals to create impactful solutions.
      </p>
    </motion.section>
  );
}
