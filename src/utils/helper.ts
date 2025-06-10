import moment from "moment";
import html2canvas from "html2canvas";

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getLightColorFromImage = async (imageUrl: string) => {
  return new Promise((resolve, reject) => {
    if (!imageUrl || typeof imageUrl !== "string") {
      reject(new Error("Invalid image URL"));
      return;
    }
    const img = new Image();
    if (!imageUrl.startsWith("data:")) {
      img.crossOrigin = "anonymous";
    }

    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const imageData = ctx?.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;
      let r = 0,
        g = 0,
        b = 0,
        count = 0;

      for (let i = 0; i < imageData?.length!; i += 4) {
        const red = imageData![i];
        const green = imageData![i + 1];
        const blue = imageData![i + 2];
        const brightness = (red + green + blue) / 3;
        if (brightness > 180) {
          r += red;
          g += green;
          b += blue;
          count++;
        }
      }

      if (count === 0) {
        resolve("#ffffff");
      } else {
        r = Math.floor(r / count);
        g = Math.floor(g / count);
        b = Math.floor(b / count);
        resolve(`rgb(${r},${g},${b})`);
      }
    };

    img.onerror = () => {
      reject(new Error("Failed to load image"));
    };
  });
};

export const formatYearMonth = (yearMonth: string) => {
  return yearMonth ? moment(yearMonth, "YYYY-MM").format("MMM YYYY") : "";
};

export const fixTailwindColors = (element: HTMLElement) => {
  const elements = element.querySelectorAll("*");
  elements.forEach((el) => {
    const style = window.getComputedStyle(el);

    ["color", "backgroundColor", "borderColor"].forEach((prop) => {
      const value = style[prop as keyof CSSStyleDeclaration];
      if (value && typeof value === "string" && value.includes("oklch")) {
        (el as HTMLElement).style[prop as 'color' | 'backgroundColor' | 'borderColor'] = "#000";
      }
    });
  });
};

// convert component to image
export const captureElementAsImage = async (element: HTMLElement) => {
  if (!element || !(element instanceof HTMLElement)) {
    throw new Error("no element provided");
  }

  const canvas = await html2canvas(element);
  return canvas.toDataURL("image/png");
};

export const dataURLToFile = (dataURL: string, filename: string) => {

  const arr = dataURL.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};
