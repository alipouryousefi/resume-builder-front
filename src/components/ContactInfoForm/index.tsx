import React from "react";
import Input from "../Inputs/Input";

interface ContactInfoFormProps {
  contactData: any;
  updateSection: (key: string, value: any) => void;
}

const ContactInfoForm = ({
  contactData,
  updateSection,
}: ContactInfoFormProps) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2">
          <Input
            label="Address"
            placeholder="Short address"
            value={contactData.address || ""}
            onChange={(e) => updateSection("address", e.target.value)}
            type="text"
          />
        </div>
        <Input
          label="Email"
          placeholder="example: john.doe@example.com"
          value={contactData.email || ""}
          onChange={(e) => updateSection("email", e.target.value)}
          type="email"
        />
        <Input
          label="Phone"
          placeholder="example: +1234567890"
          value={contactData.phone || ""}
          onChange={(e) => updateSection("phone", e.target.value)}
          type="tel"
        />
        <Input
          label="LinkedIn"
          placeholder="example: https://www.linkedin.com/in/john-doe"
          value={contactData.linkedin || ""}
          onChange={(e) => updateSection("linkedin", e.target.value)}
          type="url"
        />
        <Input
          label="Github"
          placeholder="example: https://github.com/john-doe"
          value={contactData.github || ""}
          onChange={(e) => updateSection("github", e.target.value)}
          type="url"
        />
        <div className="md:col-span-2">
          <Input
            label="Website / Portfolio"
            placeholder="example: https://john-doe.com"
            value={contactData.website || ""}
            onChange={(e) => updateSection("website", e.target.value)}
            type="url"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
