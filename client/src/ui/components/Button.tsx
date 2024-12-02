import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-primary-100 text-neutral-10 p-2 rounded w-[40%]"
    >
      {text}
    </button>
  );
};

export default Button;
