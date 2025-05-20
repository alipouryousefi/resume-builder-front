import React from "react";
import Input from "../Inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";

interface WorkExperienceFormProps {
  workExperienceData: any;
  updateArrayItem: (index: number, key: string, value: any) => void;
  addArrayItem: (newItem: any) => void;
  removeArrayItem: (index: number) => void;
}

const WorkExperienceForm = ({
  workExperienceData,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}: WorkExperienceFormProps) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Work Experience</h2>
      <div className="mt-4 flex flex-col gap-4 mb-3">
        {workExperienceData.map((item: any, index: number) => (
          <div
            key={index}
            className="border border-gray-200/80 p-4 rounded-lg relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Company"
                value={item.company}
                onChange={(e) =>
                  updateArrayItem(index, "company", e.target.value)
                }
                placeholder="example: Google"
                type="text"
              />
              <Input
                label="Role"
                value={item.role}
                onChange={(e) => updateArrayItem(index, "role", e.target.value)}
                placeholder="example: Software Engineer"
                type="text"
              />
              <Input
                label="Start Date"
                value={item.startDate}
                onChange={(e) =>
                  updateArrayItem(index, "startDate", e.target.value)
                }
                placeholder="example: 2020-01"
                type="month"
              />
              <Input
                label="End Date"
                value={item.endDate}
                onChange={(e) =>
                  updateArrayItem(index, "endDate", e.target.value)
                }
                placeholder="example: 2022-01"
                type="month"
              />
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium text-slate-600">
                Description
              </label>
              <textarea
                value={item.description || ""}
                onChange={(e) =>
                  updateArrayItem(index, "description", e.target.value)
                }
                placeholder="What did you do at this job?"
                className="form-input mt-1 w-full"
                rows={3}
              />
            </div>
            {workExperienceData.length > 1 && (
              <button
                className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                onClick={() => removeArrayItem(index)}
                type="button"
              >
                <LuTrash2 />
              </button>
            )}
          </div>
        ))}
        <button
          className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 cursor-pointer"
          onClick={() =>
            addArrayItem({
              company: "",
              role: "",
              startDate: "",
              endDate: "",
              description: "",
            })
          }
          type="button"
        >
          <LuPlus /> Add Work Experience
        </button>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
