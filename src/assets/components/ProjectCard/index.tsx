import { FaGithub, FaExternalLinkAlt  } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    externalUrl: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  externalUrl,
}: ProjectCardProps) => {
  return (
      <div className="bg-pinkSecondary rounded-2xl shadow-md p-6 w-80 relative">
        <div className="absolute top-4 right-4 flex gap-4 text-gray-800">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">
            <FaGithub className="text-xl hover:text-gray-600" />
          </a>
          <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="text-inherit no-underline">
            <FaExternalLinkAlt className="text-xl hover:text-gray-600" />
          </a>
        </div>
        <h3 className="text-xl text-left font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm text-left mb-6">{description}</p>
        <div className="flex gap-4 text-pinkPrimary font-semibold text-sm">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
  );
};

export default ProjectCard;