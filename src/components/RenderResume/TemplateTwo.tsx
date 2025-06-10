import React, { useEffect, useRef, useState } from "react";
import { Resume } from "../../types";
import {
  LuMail,
  LuMapPinHouse,
  LuPhone,
  LuUser,
  LuLinkedin,
  LuGithub,
  LuRss,
} from "react-icons/lu";
import ContactInfo from "./ContactInfo";
import EducationInfo from "../Template/EducationInfo";
import { formatYearMonth } from "../../utils/helper";
import LanguageSection from "../Template/LanguageSection";
import WorkExperienceSection from "../Template/WorkExperienceSection";
import ProjectSection from "../Template/ProjectSection";
import SkillSection from "../Template/SkillSection";
import CertificationSection from "../Template/CertificationSection";

interface TemplateTwoProps {
  resume: Resume;
  colorPalettes: any[];
  containerWidth: number;
}

const DEFAULT_THEME = ["#ebfdff", "#A1f4fd", "#cefafe", "#00b8db", "#4a5565"];

const Title = ({ text, color }: { text: string; color: string }) => {
  return (
    <div className="relative w-fit mb-2.5">
      <span
        className="absolute bottom-0 left-0 w-full h-2"
        style={{ background: color }}
      ></span>
      <h2 className="relative text-sm font-bold">{text}</h2>
    </div>
  );
};
const TemplateTwo = ({
  resume,
  colorPalettes,
  containerWidth,
}: TemplateTwoProps) => {
  const themeColors = colorPalettes.length > 0 ? colorPalettes : DEFAULT_THEME;
  const resumeRef = useRef<HTMLDivElement>(null);
  const [baseWidth, setBaseWidth] = useState(800);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const actualBaseWidth = resumeRef.current?.offsetWidth || 800;
    setBaseWidth(actualBaseWidth || 800);
    setScale(containerWidth / actualBaseWidth);
  }, [containerWidth]);
  return (
    <div
      className="p-3 bg-white"
      ref={resumeRef}
      style={{
        transform: containerWidth > 0 ? `scale(${scale})` : "none",
        transformOrigin: "top left",
        // width: containerWidth > 0 ? `${containerWidth}px` : "auto",
        height: "auto",
      }}
    >
      <div className="px-10 pt-10 pb-5">
        <div className="flex items-start gap-5 mb-5">
          <div
            className="w-[140px] h-[140px] max-w-[140px] max-h-[140px] rounded-2xl flex items-center justify-center"
            style={{
              background: themeColors[1],
            }}
          >
            {resume.profileInfo.profilePreviewUrl ? (
              <img
                src={resume.profileInfo.profilePreviewUrl}
                alt="profile"
                className="w-[140px] h-[140px] object-cover rounded-2xl"
              />
            ) : (
              <div
                className="w-[140px] h-[140px] flex items-center justify-center text-5xl rounded-full"
                style={{
                  color: themeColors[4],
                }}
              >
                <LuUser />
              </div>
            )}
          </div>

          <div>
            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-6">
                <h2 className="text-2xl font-bold">
                  {resume.profileInfo.fullName}
                </h2>
                <p className="text-[15px] font-semibold mb-2">
                  {resume.profileInfo.designation}
                </p>

                <ContactInfo
                  icon={<LuMapPinHouse />}
                  iconBG={themeColors[2]}
                  value={resume.contactInfo.location || ""}
                />
              </div>

              <div className="col-span-6 flex flex-col gap-5 mt-2">
                <ContactInfo
                  icon={<LuMail />}
                  iconBG={themeColors[2]}
                  value={resume.contactInfo.email || ""}
                />
                <ContactInfo
                  icon={<LuPhone />}
                  iconBG={themeColors[2]}
                  value={resume.contactInfo.phone || ""}
                />
              </div>

              <div className="col-span-6">
                {resume.contactInfo.linkedin && (
                  <ContactInfo
                    icon={<LuLinkedin />}
                    iconBG={themeColors[2]}
                    value={resume.contactInfo.linkedin || ""}
                  />
                )}
              </div>
              <div className="col-span-6">
                <ContactInfo
                icon={<LuRss/>}
                iconBG={themeColors[2]}
                value={resume.contactInfo.website || ""}
/>
                </div>

            </div>
          </div>
        </div>
      </div>

      <div className="mx-10 pb-5">
        <div>
          <Title text="Professional Summary" color={themeColors[1]} />
          <p className="text-sm font-medium">{resume.profileInfo.summary}</p>
        </div>

        <div className="mt-4">
          <Title text="Work Experience" color={themeColors[1]} />
          {resume.workExperience.map((work, index) => (
            <WorkExperienceSection
              key={`work_${index}`}
              company={work.company || ""}
              role={work.role || ""}
              duration={`${formatYearMonth(
                work.startDate || ""
              )} - ${formatYearMonth(work.endDate || "")}`}
              description={work.description || ""}
              durationColor={themeColors[4]}
            />
          ))}
        </div>

        <div className="mt-4">
          <Title text="Projects" color={themeColors[1]} />
          {resume.projects.map((project, index) => {
            return (
              <ProjectSection
                key={`project_${index}`}
                title={project.title || ""}
                description={project.description || ""}
                githubLink={project.github || ""}
                liveDemoLink={project.liveDemo || ""}
                bgColor={themeColors[2]}
              />
            );
          })}
        </div>
        <div className="mt-5">
          <Title text="Education" color={themeColors[1]} />
          <div className="grid grid-cols-2 gap-3">
            {resume.education.map((education, index) => (
              <EducationInfo
                key={`education_${index}`}
                degree={education.degree || ""}
                institution={education.institution || ""}
                duration={`${formatYearMonth(
                  education.startDate || ""
                )} - ${formatYearMonth(education.endDate || "")}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <Title text="Certifications" color={themeColors[1]} />
          <div className="grid grid-cols-2 gap-6">
            {resume.certifications.map((certification, index) => (
              <CertificationSection
                key={`certification_${index}`}
                title={certification.title || ""}
                issuer={certification.issuer || ""}
                year={certification.year || ""}
                bgColor={themeColors[2]}
              />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <Title text="Skills" color={themeColors[1]} />
          <SkillSection
            skills={resume.skills}
            accentColor={themeColors[3]}
            bgColor={themeColors[2]}
          />
        </div>

        <div className="grid grid-cols-2 gap-10 mt-4">
          <div className="">
            <Title text="Languages" color={themeColors[1]} />
            <LanguageSection
              languages={resume.languages.map((language) => ({
                name: language.name || "",
                progress: language.progress || 0,
              }))}
              accentColor={themeColors[3]}
              bgColor={themeColors[2]}
            />
          </div>

          {resume.interests?.length > 0 && resume.interests[0] !== "" && (
            <div className="">
              <Title text="Interests" color={themeColors[1]} />
              <div className="flex items-center flex-wrap gap-3 mt-4">
                {resume.interests?.map((interest, index) => {
                  if (!interest) return null;
                  return (
                    <div
                      key={`interest_${index}`}
                      className="text-[10px] font-medium py-1 px-3 rounded-lg"
                      style={{ backgroundColor: themeColors[2] }}
                    >
                      {interest}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateTwo;
