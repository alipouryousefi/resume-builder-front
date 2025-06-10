const TemplateCard = ({
  thumbnailImage,
  isSelected,
  onSelect,
}: {
  thumbnailImage: string;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  return (
    <div
      className={`h-auto md:h-[300px] flex flex-col items-center justify-between bg-white rounded-lg border border-gray-200 hover:border-purple-300 overflow-hidden cursor-pointer ${
        isSelected ? "border-purple-500 border-2" : ""
      }`}
      onClick={onSelect}
    >
      {thumbnailImage ? (
        <img src={thumbnailImage} alt="template" className="w-full rounded" />
      ) : (
        <div>Image not load</div>
      )}
    </div>
  );
};

export default TemplateCard;
