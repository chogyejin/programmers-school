import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Home from "./Home";
import About from "./About";
import Docs from "./Docs";
import DocsId from "./DocsId";
import NotFound from "./NotFound";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/documents",
      component: Docs,
    },
    {
      path: "/documents/:id",
      name: "docsId",
      component: DocsId,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
