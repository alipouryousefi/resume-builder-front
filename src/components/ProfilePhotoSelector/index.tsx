import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({
  image,
  setImage,
  preview,
  setPreview,
}: {
  image: string;
  setImage: (image: File | null) => void;
  preview: string;
  setPreview: (preview: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);

      const preview = URL.createObjectURL(file);
      if (setPreview) {
        setPreview(preview);
      }

      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };
  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      {!image ? (
        <div className="w-20 h-20 flex items-center justify-center bg-purple-50 rounded-full relative cursor-pointer">
          <LuUser className="text-4xl text-purple-500" />
          <button type="button" onClick={onChooseFile} className="w-8 h-8 flex justify-center items-center bg-linear-to-r from-purple-500/85 to-purple-700 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer">
            <LuUpload className="" />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img src={preview || previewUrl || ''} alt="profile" className="w-20 h-20 rounded-full object-cover" />
          <button type="button" onClick={handleRemoveImage} className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer">
            <LuTrash className="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
