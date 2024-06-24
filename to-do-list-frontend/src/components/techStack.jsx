import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiNpm,
  DiBootstrap 
} from "react-icons/di";
import {
  SiTailwindcss,
  SiCss3,
  SiExpress 
} from "react-icons/si";
import './techStack.css'; // Ensure you import your CSS file if needed

function Techstack() {
  const icons = [
    { component: DiJavascript1, name: "JavaScript" },
    { component: DiNpm, name: "NPM" },
    { component: DiNodejs, name: "Node.js" },
    { component: DiReact, name: "React" },
    { component: DiMongodb, name: "MongoDB" },
    { component: DiGit, name: "Git" },
    { component: SiTailwindcss, name: "Tailwind CSS" },
    { component: SiCss3, name: "CSS3" },
    { component: DiBootstrap, name: "Bootstrap" },
    { component: SiExpress, name: "Express.js" }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center w-full">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/6 p-4 tech-icons transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
        >
          <Icon.component size={64} title={Icon.name} />
        </div>
      ))}
    </div>
  );
}

export default Techstack;
