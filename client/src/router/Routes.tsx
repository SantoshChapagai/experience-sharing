import { RouteObject } from "react-router-dom";

import { Home } from "../features/home/Home";
import { About } from "../features/about/About";
import { Contact } from "../features/contact/Contact";

export const Routes: RouteObject[] = [
  {path: '/', Component: Home},
  {path: '/', Component: About},
  {path: '/contact', Component: Contact},
];