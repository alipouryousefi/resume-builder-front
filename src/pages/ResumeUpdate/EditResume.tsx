import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Resume } from "../../types";
import DashboardLayout from "../../components/DashboardLayout";
import TitleInput from "../../components/Inputs/TitleInput";
import { useGetResumeById } from "../../hooks/useGetResumeById";
import { useReactToPrint } from "react-to-print";
import {
  LuArrowLeft,
  LuCircleAlert,
  LuDownload,
  LuPalette,
  LuSave,
  LuTrash2,
} from "react-icons/lu";
import StepProgress from "../../components/StepProgress";
import ProfileInfoForm from "../../components/ProfileInfoForm";
import ContactInfoForm from "../../components/ContactInfoForm";
import WorkExperienceForm from "../../components/WorkExperienceForm";
import EducationInfoForm from "../../components/EducationInfoForm";
import SkillsInfoForm from "../../components/SkillsInfoForm";
import ProjectsInfoForm from "../../components/ProjectsInfoForm";
import CertificationsInfoForm from "../../components/CertificationsInfoForm";
import AdditionalInfoForm from "../../components/AdditionalInfoForm";

const EditResume = () => {
  const { resumeId } = useParams();
  const navigate = useNavigate();

  const resumeRef = useRef<HTMLDivElement>(null);
  const resumeDownloadRef = useRef<HTMLDivElement>(null);

  const [baseWidth, setBaseWidth] = useState(800);
  const [openThemeSelector, setOpenThemeSelector] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const [currentPage, setCurrentPage] = useState("profile-info");
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string[]>([]);
  const [resume, setResume] = useState<Resume>({
    _id: "",
    userId: "",
    title: "",
    template: {
      theme: "",
      colorPalettes: [],
    },
    profileInfo: {
      profilePreviewUrl: "",
      fullName: "",
      designation: "",
      summary: "",
    },
    contactInfo: {
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      website: "",
    },
    workExperience: [
      {
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [
      {
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
      },
    ],
    skills: [
      {
        name: "",
        progress: 0,
      },
    ],
    projects: [
      {
        title: "",
        description: "",
        github: "",
        liveDemo: "",
      },
    ],
    certifications: [
      {
        title: "",
        issuer: "",
        year: "",
      },
    ],
    languages: [
      {
        name: "",
        progress: 0,
      },
    ],
    interests: [""],
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const { data: resumeData, isLoading } = useGetResumeById(resumeId as string);

  useEffect(() => {
    if (resumeData) {
      setResume((prevState) => ({
        title: resumeData?.title || "Untitled",
        template: resumeData?.template || prevState.template,
        profileInfo: resumeData?.profileInfo || prevState.profileInfo,
        contactInfo: resumeData?.contactInfo || prevState.contactInfo,
        workExperience: resumeData?.workExperience || prevState.workExperience,
        education: resumeData?.education || prevState.education,
        skills: resumeData?.skills || prevState.skills,
        projects: resumeData?.projects || prevState.projects,
        certifications: resumeData?.certifications || prevState.certifications,
        languages: resumeData?.languages || prevState.languages,
        interests: resumeData?.interests || prevState.interests,
        _id: resumeData?._id || prevState._id,
        userId: resumeData?.userId || prevState.userId,
        createdAt: resumeData?.createdAt || prevState.createdAt,
        updatedAt: resumeData?.updatedAt || prevState.updatedAt,
      }));
    }
  }, [resumeData]);

  const pages = [
    "profile-info",
    "contact-info",
    "work-experience",
    "education-info",
    "skills-info",
    "projects-info",
    "certifications-info",
    "additional-info",
  ];

  const validateAndNext = () => {
    const errors = [];
    switch (currentPage) {
      case "profile-info":
        const { fullName, designation, summary } = resume.profileInfo;
        if (!fullName?.trim()) errors.push("Full name is required");
        if (!designation?.trim()) errors.push("Designation is required");
        if (!summary?.trim()) errors.push("Summary is required");
        break;
      case "contact-info":
        const { email, phone } = resume.contactInfo;
        if (!email?.trim() || !/^\S+@\S+\.\S+$/.test(email))
          errors.push("Invalid email");
        if (!phone?.trim() || !/^\d{10}$/.test(phone))
          errors.push("Invalid phone number");
        break;
      case "work-experience":
        resume.workExperience.forEach((item, index) => {
          if (!item.company?.trim())
            errors.push(`Company is required at work experience ${index + 1}`);
          if (!item.role?.trim())
            errors.push(`Role is required at work experience ${index + 1}`);
          if (!item.startDate || !item.endDate)
            errors.push(
              `Start and end date are required at work experience ${index + 1}`
            );
        });
        break;
      case "education-info":
        resume.education.forEach((item, index) => {
          if (!item.degree?.trim())
            errors.push(`Degree is required at education ${index + 1}`);
          if (!item.institution?.trim())
            errors.push(`Institution is required at education ${index + 1}`);
          if (!item.startDate || !item.endDate)
            errors.push(
              `Start and end date are required at education ${index + 1}`
            );
        });
        break;
      case "skills-info":
        resume.skills.forEach((item, index) => {
          if (!item.name?.trim())
            errors.push(`Skill name is required at skill ${index + 1}`);
          if (item.progress < 0 || item.progress > 100)
            errors.push(`Invalid progress at skill ${index + 1}`);
        });
        break;
      case "projects-info":
        resume.projects.forEach((item, index) => {
          if (!item.title?.trim())
            errors.push(`Title is required at project ${index + 1}`);
          if (!item.description?.trim())
            errors.push(`Description is required at project ${index + 1}`);
        });
        break;
      case "certifications-info":
        resume.certifications.forEach((item, index) => {
          if (!item.title?.trim())
            errors.push(`Title is required at certification ${index + 1}`);
          if (!item.issuer?.trim())
            errors.push(`Issuer is required at certification ${index + 1}`);
        });
        break;
      case "additional-info":
        if (
          resume.languages.length === 0 ||
          !resume.languages[0].name?.trim()
        ) {
          errors.push("At least one language is required");
        }
        if (resume.interests.length === 0 || resume.interests[0]?.trim()) {
          errors.push("At least one interest is required");
        }
        break;
      default:
        break;
    }

    if (errors.length > 0) {
      setErrorMsg([...errors]);
      return;
    }

    setErrorMsg("");
    goToNextStep();
  };

  const goToNextStep = () => {
    if (currentPage === "additional-info") setOpenPreview(true);

    const currentPageIndex = pages.indexOf(currentPage);

    if (currentPageIndex !== -1 && currentPageIndex < pages.length - 1) {
      const nextIndex = currentPageIndex + 1;
      setCurrentPage(pages[nextIndex]);
      const percent = Math.round((nextIndex / (pages.length - 1)) * 100);
      setProgress(percent);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goBack = () => {
    if (currentPage === "profile-info") navigate("/dashboard");

    const currentPageIndex = pages.indexOf(currentPage);
    if (currentPageIndex !== -1 && currentPageIndex > 0) {
      const prevIndex = currentPageIndex - 1;
      setCurrentPage(pages[prevIndex]);
      const percent = Math.round((prevIndex / (pages.length - 1)) * 100);
      setProgress(percent);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderForm = () => {
    switch (currentPage) {
      case "profile-info":
        return (
          <ProfileInfoForm
            profileData={resume.profileInfo}
            updateSection={(key, value) => {
              updateSection("profileInfo", key, value);
            }}
            onNext={validateAndNext}
          />
        );
      case "contact-info":
        return (
          <ContactInfoForm
            contactData={resume.contactInfo}
            updateSection={(key, value) => {
              updateSection("contactInfo", key, value);
            }}
          />
        );
      case "work-experience":
        return (
          <WorkExperienceForm
            workExperienceData={resume.workExperience}
            updateArrayItem={(index, key, value) => {
              updateArrayItem("workExperience", index, key, value);
            }}
            addArrayItem={(newItem) => addArrayItem("workExperience", newItem)}
            removeArrayItem={(index) =>
              removeArrayItem("workExperience", index)
            }
          />
        );
      case "education-info":
        return (
          <EducationInfoForm
            educationData={resume.education}
            updateArrayItem={(index, key, value) => {
              updateArrayItem("education", index, key, value);
            }}
            addArrayItem={(newItem) => addArrayItem("education", newItem)}
            removeArrayItem={(index) => removeArrayItem("education", index)}
          />
        );
      case "skills-info":
        return (
          <SkillsInfoForm
            skillsData={resume.skills}
            updateArrayItem={(index, key, value) => {
              updateArrayItem("skills", index, key, value);
            }}
            addArrayItem={(newItem) => addArrayItem("skills", newItem)}
            removeArrayItem={(index) => removeArrayItem("skills", index)}
          />
        );
      case "projects-info":
        return (
          <ProjectsInfoForm
            projectsData={resume.projects}
            updateArrayItem={(index, key, value) => {
              updateArrayItem("projects", index, key, value);
            }}
            addArrayItem={(newItem) => addArrayItem("projects", newItem)}
            removeArrayItem={(index) => removeArrayItem("projects", index)}
          />
        );
      case "certifications-info":
        return (
          <CertificationsInfoForm
            certificationsData={resume.certifications}
            updateArrayItem={(index, key, value) => {
              updateArrayItem("certifications", index, key, value);
            }}
            addArrayItem={(newItem) => addArrayItem("certifications", newItem)}
            removeArrayItem={(index) =>
              removeArrayItem("certifications", index)
            }
          />
        );
      case "additional-info":
        return (
          <AdditionalInfoForm
            languages={resume.languages}
            interests={resume.interests}
            updateArrayItem={(section, index, key, value) => {
              updateArrayItem(section, index, key, value);
            }}
            addArrayItem={(section, newItem) => addArrayItem(section, newItem)}
            removeArrayItem={(section, index) =>
              removeArrayItem(section, index)
            }
          />
        );

      default:
        return null;
    }
  };

  const updateSection = (section: string, key: string, value: any) => {
    setResume((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [key]: value,
      },
    }));
  };

  const updateArrayItem = (
    section: string,
    index: number,
    key: string,
    value: any
  ) => {
    setResume((prev) => {
      const updatedArray = [...prev[section]];

      if (key === null) {
        updatedArray[index] = value;
      } else {
        updatedArray[index] = {
          ...updatedArray[index],
          [key]: value,
        };
      }

      return {
        ...prev,
        [section]: updatedArray,
      };
    });
  };

  const addArrayItem = (section: string, newItem: any) => {
    setResume((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  const removeArrayItem = (section: string, index: number) => {
    setResume((prev) => {
      const updateArray = [...prev[section]];
      updateArray.splice(index, 1);

      return {
        ...prev,
        [section]: updateArray,
      };
    });
  };

  const uploadResumeImages = async () => {};

  const updateResumeDetails = async (thumbnailLink, profilePreviewUrl) => {};

  const downloadResume = async () => {};

  const handleDeleteResume = async () => {};

  // const reactToPrintFn = useReactToPrint({ contentRef: resumeDownloadRef });

  const updateBaseWidth = () => {
    if (resumeRef.current) {
      setBaseWidth(resumeRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateBaseWidth();
    window.addEventListener("resize", updateBaseWidth);

    return () => {
      window.removeEventListener("resize", updateBaseWidth);
    };
  }, []);

  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-5 bg-white rounded-lg border border-purple-100 py-3 px-4 mb-4">
          <TitleInput
            title={resume.title}
            setTitle={(value: string) => setResume({ ...resume, title: value })}
          />
          <div className="flex items-center gap-4">
            <button
              className="btn-small-light"
              onClick={() => {
                setOpenThemeSelector(true);
              }}
            >
              <LuPalette className="text-[16px]" />
              <span className="hidden md:block">Change Theme</span>
            </button>

            <button
              className="btn-small-light"
              onClick={() => {
                handleDeleteResume();
              }}
            >
              <LuTrash2 className="text-[16px]" />
              <span className="hidden md:block">Delete</span>
            </button>

            <button
              className="btn-small-light"
              onClick={() => {
                setOpenPreview(true);
              }}
            >
              <LuDownload className="text-[16px]" />
              <span className="hidden md:block">Preview & Download</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-lg border border-purple-100 overflow-hidden">
            <StepProgress progress={progress} />
            {renderForm()}

            <div className="mx-5">
              {errorMsg.length > 0 &&
                errorMsg.map((error, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[13px] font-medium text-amber-600 bg-amber-100 px-2 py-2 my-1 rounded"
                  >
                    <LuCircleAlert className="text-base" />
                    {error}
                  </div>
                ))}

              <div className="flex items-end justify-end gap-3 mt-3 mb-5">
                <button
                  className="btn-small-light"
                  onClick={goBack}
                  disabled={isLoading}
                >
                  <LuArrowLeft className="text-[16px]" />
                  Back
                </button>
                <button
                  className="btn-small-light"
                  onClick={uploadResumeImages}
                  disabled={isLoading}
                >
                  <LuSave className="text-[16px]" />
                  {isLoading ? "Updating..." : "Save & Exit"}
                </button>

                <button
                  className="btn-small"
                  onClick={validateAndNext}
                  disabled={isLoading}
                >
                  {currentPage === "additionalInfo" && (
                    <LuDownload className="text-[16px]" />
                  )}
                  {currentPage === "additionalInfo"
                    ? "Preview & Download"
                    : "Next"}
                  {currentPage !== "additionalInfo" && (
                    <LuArrowLeft className="text-[16px] rotate-180" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="h-screen" ref={resumeRef}>
            {/* Resume template will be here */}
          </div>
        </div>

        <div className="h-screen" ref={resumeRef}>
          <RenderResume
            templateId={resumeData?.template?.theme || ""}
            resume={resume}
            colorPalettes={resumeData?.template?.colorPalettes || []}
            containerWidth={baseWidth}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditResume;
