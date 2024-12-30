import { createBrowserRouter } from "react-router-dom";
import ArticleContainer from "../article-components/ArticleContainer";
import ProjectContainer from "../project-components/ProjectContainer";
import Speaking from "../speaking-components/Speaking";
import Uses from "../tools-components/ToolContainer";
import LandingPage from "../utility components/LandingPage";
import RootLayout from "./RootLayout";
import Error from "../utility components/Error.jsx";
import TempSingleArticle from "../article-components/single-article/TempSingleArticle.jsx";
import ArticleRootLayout from "./ArticleRootLayout.jsx";
import AboutContainer from "../about-component/About.jsx";
import Article_01 from "../article-components/single-article/Article_01.jsx";
import Article_02 from "../article-components/single-article/Article_02.jsx";
import Article_03 from "../article-components/single-article/Article_03.jsx";
import Article_04 from "../article-components/single-article/Article_04.jsx";
import Article_05 from "../article-components/single-article/Article_05.jsx";
import Article_06 from "../article-components/single-article/Article_06.jsx";
import Article_07 from "../article-components/single-article/Article_07.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "about", element: <AboutContainer /> },
      {
        path: "articles",
        element: <ArticleRootLayout />,

        children: [
          { index: true, element: <ArticleContainer /> },
          {
            path: "Article_01",
            element: <Article_01 />,
          },
          {
            path: "Article_02",
            element: <Article_02 />,
          },
          {
            path: "Article_03",
            element: <Article_03 />,
          },
          {
            path: "Article_04",
            element: <Article_04 />,
          },
          {
            path: "Article_05",
            element: <Article_05 />,
          },
          {
            path: "Article_06",
            element: <Article_06 />,
          },
          {
            path: "Article_07",
            element: <Article_07 />,
          },
        ],
      },
      { path: "projects", element: <ProjectContainer /> },
      { path: "speaking", element: <Speaking /> },
      { path: "uses", element: <Uses /> },
    ],
  },
]);

export default router;
