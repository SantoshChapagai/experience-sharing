import Button from "./components/Button";
import { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({
  imageSrc,
  author,
  heading,
  text,
  clickButton,
  buttonText,
}) => {
  return (
    <div className="w-56 h-fit bg-neutral-30 rounded-lg p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{heading}</h2>
        <p className="line-clamp-3 text-ellipsis text-sm">{text}</p>
      </div>
      <div className="flex flex-col gap-1">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={author}
            className="rounded-xl h-20 w-20 object-cover"
          />
        ) : (
          <div className="h-20 w-24 bg-neutral-10 rounded-lg flex items-center text-center">
            <p className="font-medium">No images available</p>
          </div>
        )}

        <p className="font-semibold">{author}</p>
      </div>
      <div className="">
        {buttonText && <Button text={buttonText} onClick={clickButton} />}
      </div>
    </div>
  );
};
