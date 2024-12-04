export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export interface CardProps {
  imageSrc?: string;
  author?: string;
  heading?: string;
  text?: string;
  clickButton?: () => void;
}
