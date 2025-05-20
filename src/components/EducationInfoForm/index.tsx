import React from "react";
import Input from "../Inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";

interface EducationInfoFormProps {
  educationData: any;
  updateArrayItem: (index: number, key: string, value: any) => void;
  addArrayItem: (newItem: any) => void;
  removeArrayItem: (index: number) => void;
}

const EducationInfoForm = ({
  educationData,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}: EducationInfoFormProps) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Education</h2>
      <div className="mt-4 flex flex-col gap-4 mb-3">
        {educationData.map((education: any, index: number) => (
          <div className="border border-gray-200/80 p-4 rounded-lg relative" key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Degree"
                value={education.degree}
                onChange={(e) =>
                  updateArrayItem(index, "degree", e.target.value)
                }
                placeholder="example: Bachelor of Science"
                type="text"
              />
              <Input
                label="Institution"
                value={education.institution}
                onChange={(e) =>
                  updateArrayItem(index, "institution", e.target.value)
                }
                placeholder="example: University of California, Los Angeles"
                type="text"
              />
              <Input
                label="Start Date"
                value={education.startDate}
                onChange={(e) =>
                  updateArrayItem(index, "startDate", e.target.value)
                }
                placeholder="example: 2020-01"
                type="month"
              />
              <Input
                label="End Date"
                value={education.endDate}
                onChange={(e) =>
                  updateArrayItem(index, "endDate", e.target.value)
                }
                placeholder="example: 2024-05"
                type="month"
              />
            </div>
            {educationData.length > 1 && (
              <button
                className="absolute top-2 right-2 text-red-600 text-sm hover:underline cursor-pointer"
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
            onClick={() => addArrayItem({})}
          >
            <LuPlus/> Add Education
          </button> 
      </div>
    </div>
  );
};

export default EducationInfoForm;
