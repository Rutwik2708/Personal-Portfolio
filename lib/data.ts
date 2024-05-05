import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import HealthifyImg from "@/public/Healthify.png";
import ResponderDashImg from "@/public/Responder_Dash.png";
import PortfolioImg from "@/public/Portfolio_Proj.png";
import CourseSwImg from "@/public/Course_Swapper.jpg";
import StockImg from "@/public/Stock_Img.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Masters in Computer Science",
    location: "Arizona State University, Tempe, AZ",
    description:
      "Pursuing a master's degree to further hone my skills in the constantly evolving field of Computer Science ",
    icon: React.createElement(LuGraduationCap),
    date: "2023-Present",
  },  
  {
    title: "Software Engineer",
    location: "UBS, Mumbai, India",
    description:
      "I worked as a full stack developer for 2 years. My work primarily included devloping Cloud Native and Hybrid Cloud solutions, Web applications and CI/CD.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2023",
  },
  {
    title: "Summer Technology Intern",
    location: "UBS, Remote",
    description:
      "I developed a UI for comparing Bank's performance with Peers to highlight irregularities in financial reports",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Bachelor of Technology in Information Technology",
    location: "VJTI, Mumbai, India",
    description:
      "Successfully completed a bachelor's degree, gaining solid knowledge of Information Technology fundamentals ",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },  
] as const;

export const projectsData = [
  {
    title: "Healthify",
    description:
      "A Blockchain based distributed application to simplify and optimize the health insurance claims process. I developed smart contracts using Solidity and UI using React",
    tags: ["React", "Solidity", "Ethereum", "Web3.js", "Metamask","Ganache"],
    imageUrl: HealthifyImg,
  },
  {
    title: "Responder Dash",
    description:
      "Visual Analytics Dashboard for emergency Responders. I developed visualizations such as choropleth map, streamgraph, violin, pie charts.",
    tags: ["JavaScript", "D3.js", "Python", "Pandas", "Bootstrap"],
    imageUrl: ResponderDashImg,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern website for displaying my portfolio. It gives user insight about me, my projects and past experiences.",
    tags: ["React", "Next.js", "Tailwind", "Vercel"],
    imageUrl: PortfolioImg,
  },
  {
    title: "Course Swapper",
    description:
      "A personal tool to automate swapping of undesired courses with the desired ones for course registration",
    tags: ["Python", "Selenium"],
    imageUrl: CourseSwImg,
  },
  {
    title: "Stock Price Prediction",
    description:
      "A project to predict the stock prices based on historical candle stick data and Latest news. I Preprocessed the raw data and trained ML Models",
    tags: ["Python", "Pandas","Tensorflow","numpy"],
    imageUrl: StockImg,
  }
] as const;

export const skillsData = [
  "Python",
  "Java",
  "Go",
  "Django",
  "Spring Boot",
  "Azure",
  "CI/CD",
  "Docker",
  "Linux",
  "GitLab",
  "Pandas",
  "Numpy",
  "Tensorflow",
  "Scikit-learn",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Oracle"
  
  
] as const;