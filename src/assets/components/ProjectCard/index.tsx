import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedContent from './AnimatedContent';

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
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
    >
      <div className="bg-pinkSecondary rounded-2xl shadow-md p-6 w-80 relative dark:bg-redPrimary">
        <div className="absolute top-4 right-4 flex gap-4 text-gray-800">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-inherit no-underline transition-transform hover:scale-125">
            <FaGithub className="text-xl hover:text-pinkPrimary dark:text-whiteSecondary dark:hover:text-redSecondary transition-colors duration-800" />
          </a>
          <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="text-inherit no-underline transition-transform hover:scale-125">
            <FaExternalLinkAlt className="text-xl hover:text-pinkPrimary dark:text-whiteSecondary dark:hover:text-redSecondary transition-colors duration-800" />
          </a>
        </div>
        <h3 className="text-xl text-left font-bold text-gray-900 mb-2 dark:text-whiteSecondary">{title}</h3>
        <p className="text-gray-700 text-sm text-left mb-6 dark:text-whiteSecondary">{description}</p>
        <div className="flex gap-4 text-pinkPrimary font-semibold text-sm">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </AnimatedContent>
  );
};

export default ProjectCard;