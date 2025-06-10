import React from "react";
import Progress from "../RenderResume/Progress";

interface LanguageSectionProps {
  languages: {
    name: string;
    progress: number;
  }[];
  accentColor: string;
  bgColor: string;
}

interface LanguageItemProps {
  language: {
    name: string;
    progress: number;
  };
  accentColor: string;
  bgColor: string;
}
const LanguageItem = ({
  language,
  accentColor,
  bgColor,
}: LanguageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[12px] font-semibold text-gray-900">{language.name}</p>
      {language.progress > 0 && (
        <Progress
          progress={(language.progress / 100) * 5}
          color={accentColor}
          bgColor={bgColor}
        />
      )}
    </div>
  );
};

const LanguageSection = ({
  languages,
  accentColor,
  bgColor,
}: LanguageSectionProps) => {
  return (
    <div className="flex flex-col gap-2">
      {languages.map((language, index) => (
        <LanguageItem
          key={`language_${index}`}
          language={language}
          accentColor={accentColor}
          bgColor={bgColor}
        />
      ))}
    </div>
  );
};

export default LanguageSection;
