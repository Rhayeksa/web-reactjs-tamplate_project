import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import PageError from "./pages/pageError";

const routes = [
    {
        "path": "/",
        "page": <Home />
    },
    {
        "path": "/page1",
        "page": <Page1 />
    },
    {
        "path": "/page2",
        "page": <Page2 />
    },
    {
        "path": "/page3",
        "page": <Page3 />
    },
    {
        "path": "*",
        "page": <PageError />
    },
]

export default routes;