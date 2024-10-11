import { RouteObject } from "react-router-dom";

import { Home } from "../features/home/Home";
import { About } from "../features/about/About";
import { Contact } from "../features/contact/Contact";
import { Share } from "../features/share/Share";
import { Signup } from "../features/signup/Signup";
import { Signin } from "../features/signin/Signin";

export const Routes: RouteObject[] = [
  {path: '/', Component: Home},
  {path: '/', Component: About},
  {path: '/contact', Component: Contact},
  {path: '/share', Component: Share},
  {path: '/signup', Component: Signup},
  {path: '/signin', Component: Signin},
];