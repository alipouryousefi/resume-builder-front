import React from "react";
import Input from "../Inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";
import RatingInput from "../RatingInput";

interface SkillsInfoFormProps {
  skillsData: any;
  updateArrayItem: (index: number, key: string, value: any) => void;
  addArrayItem: (newItem: any) => void;
  removeArrayItem: (index: number) => void;
}
const SkillsInfoForm = ({
  skillsData,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}: SkillsInfoFormProps) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
      <div className="mt-4 flex flex-col gap-4 mb-3">
        {skillsData.map((skill: any, index: number) => (
          <div
            key={index}
            className="border border-gray-200/80 p-4 rounded-lg relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Skill Name"
                value={skill.skill}
                onChange={(e) => updateArrayItem(index, "name", e.target.value)}
                placeholder="example: React"
                type="text"
              />

              <div className="flex flex-col">
                <label className="text-[13px] text-slate-800 mb-1">
                  Proficiency {Math.round(skill.progress / 20 || 0)}/5
                </label>
                <div className="mt-5">
                  <RatingInput
                    value={skill.progress || 0}
                    total={5}
                    onChange={(value: number) =>
                      updateArrayItem(index, "progress", value)
                    }
                  />
                </div>
              </div>
            </div>

            {skillsData.length > 1 && (
              <button
                className="absolute top-2 right-2 text-red-600 text-sm hover:underline cursor-pointer"
                type="button"
                onClick={() => removeArrayItem(index)}
              >
                <LuTrash2 />
              </button>
            )}
          </div>
        ))}

        <button
          className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 transition-colors duration-300 cursor-pointer"
          type="button"
          onClick={() =>
            addArrayItem({
              name: "",
              progress: 0,
            })
          }
        >
          <LuPlus /> Add Skill
        </button>
      </div>
    </div>
  );
};

export default SkillsInfoForm;
