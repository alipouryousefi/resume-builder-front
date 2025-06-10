import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";
import TemplateThree from "./TemplateThree";

interface RenderResumeProps {
  templateId: string;
  resume: any;
  colorPalettes: any[];
  containerWidth: number;
}

const RenderResume = ({
  templateId,
  resume,
  colorPalettes,
  containerWidth,
}: RenderResumeProps) => {

  console.log("colorPalettes")
  console.log(colorPalettes)
  switch (templateId) {
    case "01":
      return (
        <TemplateOne
          resume={resume}
          colorPalettes={colorPalettes}
          containerWidth={containerWidth}
        />
      );
    case "02":
      return (
        <TemplateTwo
          resume={resume}
          colorPalettes={colorPalettes}
          containerWidth={containerWidth}
        />
      );
    case "03":
      return (
        <TemplateThree
          resume={resume}
          colorPalettes={colorPalettes}
          containerWidth={containerWidth}
        />
      );

    default:
      return (
        <TemplateOne
          resume={resume}
          colorPalettes={colorPalettes}
          containerWidth={containerWidth}
        />
      );
  }
};

export default RenderResume;
