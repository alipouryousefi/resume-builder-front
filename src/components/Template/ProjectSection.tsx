import React from "react";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import ActionLink from "./ActionLink";

interface ProjectSectionProps {
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
  bgColor: string;
  isPreview?: boolean;
}
const ProjectSection = ({
  title,
  description,
  githubLink,
  liveDemoLink,
  bgColor,
  isPreview = false,
}: ProjectSectionProps) => {
  return (
    <div className="mb-5">
      <h3
        className={`font-semibold text-gray-900 ${
          isPreview ? "text-xs" : "text-base"
        }`}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-700 font-medium mt-1">{description}</p>

      <div className="flex items-center gap-3 mt-2">
        {githubLink && (
          <ActionLink icon={<LuGithub />} link={githubLink} bgColor={bgColor} />
        )}
        {liveDemoLink && (
          <ActionLink icon={<LuExternalLink />} link={liveDemoLink} bgColor={bgColor} />
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
