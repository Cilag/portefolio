import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Je suis un passionné d'infrastructure système et réseau avec un don pour créer une infrastructure de serveur sécurisée et robuste. Avec 2 ans d'expérience pratique chez Ynov Bordeaux, j'ai affiné mes compétences sur Docker, Ansible, Vagrant, VMware, ainsi que d'autres technologies comme Node.js, MySQL, Golang, Python, C#, Java, Java Script, PHP, React et Tailwind. Mon objectif est de mettre à profit mon expertise pour créer des solutions innovantes qui stimulent la croissance de l'entreprise et offrent une expérience utilisateur optimale.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 ",
    role: "stagiaire en infrastructure système et réseau",
    company: "Cheops Technology",
    description: `Le stagiaire effectuera dans ledit Organisme d’accueil les missions suivantes : Création de script powershell pour automatiser les configurations GPO. • Assistance et accompagnement sur les interventions système réaliser à l’agence de bordeaux. • Déploiement d’environnement virtualisé dans le showroom. • Accompagnement pendant les interventions d’infrastructure.`,
    technologies: ["Script", "Bash", "VMware", "Powershell"],
  },
];

export const PROJECTS = [
  {
    title: "Melosphere",
    image: project1,
    description:
      "Melosphere est un site web ou vous pourrez rechercher vos titres préférés grâce à une URL YouTube et trouver aussi vos prochains titres favoris, une possibilité de télécharger vos musiques directement sur votre ordinateur, mais surtout de pouvoir avoir une création de playlist téléchargeable depuis le site directement sur votre machine.",
    technologies: ["JavaScript", "Tailwind", "React", "Node.js", "Python"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Bordeaux 33000, France",
  email: "ozouxguillaume@gmail.com",
};
