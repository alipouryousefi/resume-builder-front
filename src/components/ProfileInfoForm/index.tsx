import React from "react";
import ProfilePhotoSelector from "../ProfilePhotoSelector";
import Input from "../Inputs/Input";

interface ProfileInfoFormProps {
  profileData: any;
  updateSection: (key: string, value: any) => void;
  onNext: () => void;
}

const ProfileInfoForm = ({
  profileData,
  updateSection,
  onNext,
}: ProfileInfoFormProps) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>

      <div className="mt-4">
        <ProfilePhotoSelector
          image={profileData?.profileImg || profileData?.profilePreviewUrl}
          setImage={(value) => updateSection("profileImg", value)}
          preview={profileData?.profilePreviewUrl}
          setPreview={(value) => updateSection("profilePreviewUrl", value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
                value={profileData?.fullName}
                onChange={(e) => updateSection("fullName", e.target.value)}
                label="Full Name"
                placeholder="Enter your full name"
                type="text"
            />
            <Input
                value={profileData?.designation}
                onChange={(e) => updateSection("designation", e.target.value)}
                label="Designation"
                placeholder="Enter your designation eg. Software Engineer"
                type="text"
            />
            <div className="col-span-2 mt-3">
                <label className="text-xs font-medium text-slate-600">Summary</label>
                <textarea
                value={profileData?.summary || ""}
                onChange={(e) => updateSection("summary", e.target.value)}
                placeholder="Enter your summary"
                className="form-input"
                rows={4}
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoForm;
