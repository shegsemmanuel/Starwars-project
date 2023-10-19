import HomePage from "../pages/login";
import Overview from "../pages/overview";
import People from "../pages/people";
import Species from "../pages/species";
import Starships from "../pages/starships";
import Single from "../pages/single";

export const ROUTES = [
    {
        path: "/",
        Component: HomePage,
        exact: true,
    },
    {
        path: "/overview",
        Component: Overview,
        exact: true,
    },
    {
        path: "/people",
        Component: People,
        exact: true,
    },
    {
        path: "/species",
        Component: Species,
        exact: true,
    },
    {
        path: "/starships",
        Component: Starships,
        exact: true,
    },
    {
        path: "/item/",
        Component: Single,
        exact: true,
    },
]
 


