import { User, Post, Comment, Home } from "../pages";

const routes = [
  {
    path: "/users",
    component: User,
  },
  {
    path: "/posts",
    component: Post,
  },
  {
    path: "/comments",
    component: Comment,
  },
  {
    path: "/",
    component: Home,
  },
];

export default routes;
