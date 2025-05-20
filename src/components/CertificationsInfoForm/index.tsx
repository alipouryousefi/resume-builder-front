import React from "react";
import Input from "../Inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";

interface CertificationsInfoFormProps {
  certificationsData: any[];
  updateArrayItem: (index: number, key: string, value: any) => void;
  addArrayItem: (newItem: any) => void;
  removeArrayItem: (index: number) => void;
}

const CertificationsInfoForm = ({
  certificationsData,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}: CertificationsInfoFormProps) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Certifications</h2>
      <div className="mt-4 flex flex-col gap-4 mb-3">
        {certificationsData.map((certification, index) => (
          <div
            key={index}
            className="border border-gray-200/80 p-4 rounded-lg relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Certification Title"
                placeholder="ex. AWS Certified Developer"
                value={certification.title}
                onChange={(e) =>
                  updateArrayItem(index, "title", e.target.value)
                }
                type="text"
              />
              <Input
                label="Certification Issuer"
                placeholder="Cursera, Udemy, etc."
                value={certification.issuer}
                onChange={(e) =>
                  updateArrayItem(index, "issuer", e.target.value)
                }
                type="text"
              />

              <Input
                label="Certification Year"
                placeholder="ex. 2020"
                value={certification.year}
                onChange={(e) => updateArrayItem(index, "year", e.target.value)}
                type="text"
              />
            </div>

            {certificationsData.length > 1 && (
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
          onClick={() =>
            addArrayItem({
              title: "",
              issuer: "",
              year: "",
            })
          }
        >
          <LuPlus /> Add Certification
        </button>
      </div>
    </div>
  );
};

export default CertificationsInfoForm;
