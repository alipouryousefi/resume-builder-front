import React from "react";
import Input from "../Inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";

interface ProjectsInfoFormProps {
  projectsData: any[];
  updateArrayItem: (index: number, key: string, value: any) => void;
  addArrayItem: (newItem: any) => void;
  removeArrayItem: (index: number) => void;
}

const ProjectsInfoForm = ({
  projectsData,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}: ProjectsInfoFormProps) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Project</h2>
      <div className="mt-4 flex flex-col gap-4 mb-3">
        {projectsData.map((project, index) => (
          <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2">
                <Input
                  label="Project Title"
                  placeholder="Enter Project Title"
                  value={project.title || ""}
                  onChange={(e) =>
                    updateArrayItem(index, "title", e.target.value)
                  }
                />
              </div>
              <div className="col-span-2">
                <label className="text-xs font-medium text-slate-600">Description</label>
                <textarea
                  placeholder="short description about the project"
                  value={project.description || ""}
                  onChange={(e) =>
                    updateArrayItem(index, "description", e.target.value)
                  }
                  className="form-input w-full mt-1"
                  rows={3}
                />
              </div>

              <Input
                label="Github Link"
                placeholder="Enter Github Link"
                value={project.githubLink || ""}
                onChange={(e) =>
                  updateArrayItem(index, "githubLink", e.target.value)
                }
              />
              <Input
                label="Live Demo"
                placeholder="example: https://example.com"
                value={project.liveDemoLink || ""}
                onChange={(e) =>
                  updateArrayItem(index, "liveDemoLink", e.target.value)
                }
              />
            </div>
            {projectsData.length > 1 && (
              <button
                type="button"
                className="absolute top-3 right-3 text-red-600 text-sm hover:underline cursor-pointer"
                onClick={() => removeArrayItem(index)}
              >
                <LuTrash2 />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 transition-colors duration-300 cursor-pointer"
          onClick={() =>
            addArrayItem({
              title: "",
              description: "",
              githubLink: "",
              liveDemoLink: "",
            })
          }
        >
          <LuPlus /> Add Project
        </button>
      </div>
    </div>
  );
};

export default ProjectsInfoForm;
