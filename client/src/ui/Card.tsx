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
    <div className="w-56 h-72 bg-neutral-30 rounded-lg p-2 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{heading}</h2>
        <p className="line-clamp-2 text-ellipsis text-sm">{text}</p>
      </div>
      <div className="flex flex-col gap-2">
        <img src={imageSrc} alt={author} />
        <p>{author}</p>
      </div>
      <div className="w-full md:w-[80%] mx-auto">
        <Button text="See more" onClick={clickButton} />
      </div>
    </div>
  );
};
