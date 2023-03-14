import Episode from "../pages/Episode";
import Episodes from "../pages/Episodes";
import Home from "../pages/Home";
import Podcasts from "../pages/Podcasts";

export const ROUTES = [
  {
    key: "home",
    path: "/",
    component: Home,
  },
  {
    key: "podcast",
    path: "/podcast/:podcastId/*",
    component: Podcasts,
  },
];

export const INTERNAL_ROUTES = [
  {
    key: "episodes",
    path: "/",
    component: Episodes,
  },
  {
    key: "episode",
    path: "/episode/:episodeId",
    component: Episode,
  },
];
