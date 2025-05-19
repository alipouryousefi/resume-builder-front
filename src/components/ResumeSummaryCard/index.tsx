import { useEffect, useState } from "react";
import { getLightColorFromImage } from "../../utils/helper";

interface ResumeSummaryCardProps {
  imgUrl: string | null;
  title: string;
  lastUpdated: string;
  onSelect: () => void;
}

const ResumeSummaryCard = ({
  imgUrl,
  title,
  lastUpdated,
  onSelect,
}: ResumeSummaryCardProps) => {
  const [bgColor, setBgColor] = useState<string>("#ffffff");

  useEffect(() => {
    if (imgUrl) {
      getLightColorFromImage(imgUrl)
        .then((color: unknown) => {
          setBgColor(color as string);
        })
        .catch((error: any) => {
          setBgColor("#ffffff");
        });
    }
  }, [bgColor]);
  return (
    <div
      className="h-[300px] flex flex-col items-center justify-between bg-white rounded-lg border-gray-200 hover:border-gray-300 hover:bg-gray-50/5 cursor-pointer duration-300"
      onClick={onSelect}
      style={{ backgroundColor: bgColor }}
    >
      <div className="p-4">
        {imgUrl ? (
          <img src={imgUrl} alt={title} className="w-full h-[200px] rounded" />
        ) : (
          <div></div>
        )}
      </div>
      <div className="w-full bg-white px-4 py-3">
        <h5 className="text-sm font-medium truncate overflow-hidden whitespace-nowrap">
          {title}
        </h5>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          {lastUpdated}
        </p>
      </div>
    </div>
  );
};

export default ResumeSummaryCard;
