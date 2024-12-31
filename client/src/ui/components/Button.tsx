import { cn } from "../../utils/cn";
import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={cn("bg-primary-100 text-neutral-10 p-2 rounded-md")}
    >
      {text}
    </button>
  );
};

export default Button;
