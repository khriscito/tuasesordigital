import { TFunction } from "react-i18next";

export interface VideoProps {
  src: string;
  title?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
