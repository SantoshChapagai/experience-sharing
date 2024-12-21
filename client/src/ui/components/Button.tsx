import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="bg-primary-100 text-neutral-10 p-2 rounded max-w-full"
    >
      {text}
    </button>
  );
};

export default Button;
