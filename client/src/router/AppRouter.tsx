import { useRoutes } from "react-router-dom";
import { Routes } from "./routes";


export const AppRouter = () => {
  const element = useRoutes(Routes);
  return element;
};