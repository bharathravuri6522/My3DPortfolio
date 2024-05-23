import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    bootstrap,
    Node,
    postgres,
    Cognizant,
    TekSolvent,
    UL_Lafayette,
    Insightify,
    Tek_Solvent,
    Portfolio,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node Js",
      icon: Node,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "postgres",
      icon: postgres,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Cognizant",
      icon: Cognizant,
      iconBg: "#FFFFFF",
      date: "Aug 2019 - Dec 2022",
      points: [
        "Spearheaded critical web application development for a UK-based pharmaceutical client using React and Node.js.",
        "Resolved complex technical issues through in-depth code analysis and efficient debugging practices.",
        "Transitioned an existing application to React, enhancing performance and user experience.",
        "Employed agile methodologies for effective project lifecycle management, ensuring smooth production deployment.",
        "Engaged in cross-functional collaboration, demonstrating strong communication and pair-programming skills."
      ],
    },
    {
      title: "Freelance Back-end Developer",
      company_name: "Tek Solvent",
      icon: TekSolvent,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Mar 2024",
      points: [
        "Developed decentralized applications for the Bitsz platform using Java, enhancing user experience.",
        "Designed and implemented GraphQL APIs for efficient data exchange between front-end and back-end systems.",
        "Leveraged Node.js, Express.js, and TypeScript to build robust server-side components.",
        "Ensured compliance with industry standards and security protocols in application development.",
        "Integrated web services and APIs into backend systems, demonstrating cloud technology proficiency.",
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company_name: "University of Louisiana at Lafayette",
      icon: UL_Lafayette,
      iconBg: "#FFFFFF",
      date: "Aug 2023 - May 2024",
      points: [
        "Assisted undergraduate students in the Operating Systems in Java course.",
        "Guided students on project implementations involving concurrency and multithreading.",
        "Provided support in understanding memory allocation, page replacements, and scheduling algorithms.",
        "Offered one-on-one assistance to students, clarifying complex concepts and solving doubts."
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Insightify",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "postgres",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI API",
          color: "orange-text-gradient",
        },

      ],
      image: Insightify,
      source_code_link: "https://github.com/bharathravuri6522/Insightify",
    },
    {
      name: "Tek Solvent",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },

      ],
      image: Tek_Solvent,
      source_code_link: "https://www.teksolvent.com/",
    },
    {
      name: "Portfolio",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio,
      source_code_link: "https://bharathravuri6522.github.io/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };