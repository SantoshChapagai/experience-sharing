import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-blue-200 h-16 text-xl px-8 flex justify-between items-center">
      <Link to='/'>Home</Link>
      <div className="flex gap-4">
      <Link to='/share'>Share</Link>
      <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
}
