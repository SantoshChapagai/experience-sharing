import Button from "./components/Button";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({
  imageSrc,
  author,
  heading,
  text,
  clickButton,
}) => {
  return (
    <div className="w-56 h-72 bg-neutral-30 rounded-lg">
      <div>
        <img src={imageSrc} alt={author} />
        <p>{author}</p>
      </div>
      <h2>{heading}</h2>
      <p>{text}</p>
      <Button text="See more" onClick={clickButton} />
    </div>
  );
};
