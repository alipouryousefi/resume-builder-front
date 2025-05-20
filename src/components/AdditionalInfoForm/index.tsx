import React from "react";
import Input from "../Inputs/Input";
import RatingInput from "../RatingInput";
import { LuPlus, LuTrash2 } from "react-icons/lu";

interface AdditionalInfoFormProps {
  languages: string[];
  interests: string[];
  updateArrayItem: (
    section: string,
    index: number,
    key: string | null,
    value: any
  ) => void;
  addArrayItem: (section: string, newItem: any) => void;
  removeArrayItem: (section: string, index: number) => void;
}
const AdditionalInfoForm = ({
  languages,
  interests,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}: AdditionalInfoFormProps) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Additional Information</h2>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Languages</h3>
        <div className="flex flex-col gap-4">
          {languages.map((language: any, index: number) => (
            <div key={index} className="border border-gray-200/80 p-4 rounded-lg relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <Input
                  label={`Language`}
                  placeholder={`e.g. English, Spanish, French`}
                  value={language.name}
                  onChange={(e) =>
                    updateArrayItem("languages", index, "name", e.target.value)
                  }
                />
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-7 block">Proficiency</label>
                  <RatingInput
                    value={language.progress}
                    total={5}
                    onChange={(value) =>
                      updateArrayItem("languages", index, "progress", value)
                    }
                  />
                </div>
              </div>
              {languages.length > 1 && (
                <button
                  className="absolute top-3 right-3 text-red-600 text-sm hover:underline cursor-pointer"
                  onClick={() => removeArrayItem("languages", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 transition-colors duration-300 cursor-pointer mt-4"
          onClick={() =>
            addArrayItem("languages", {
              name: "",
              progress: 0,
            })
          }
        >
          <LuPlus /> Add Language
        </button>
      </div>

      <div className="mt-8 mb-4">
        <h3 className="text-sm font-semibold text-gray-700">Interests</h3>
        <div className="flex flex-col">
          {interests.map((interest: any, index: number) => (
            <div key={index} className="relative rounded-lg">
              <Input
                value={interest || ""}
                onChange={(e) =>
                  updateArrayItem("interests", index, null, e.target.value)
                }
                placeholder={`e.g. Reading, Writing, Swimming`}
                type="text"
                
              />

              {interests.length > 1 && (
                <button
                  className="absolute top-6.5 right-2 text-red-600 text-sm hover:underline cursor-pointer"
                  onClick={() => removeArrayItem("interests", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 transition-colors duration-300 cursor-pointer"
          onClick={() =>
            addArrayItem("interests", "")
          }
        >
          <LuPlus /> Add Interest
        </button>
      </div>
    </div>
  );
};

export default AdditionalInfoForm;
