import { createBrowserRouter } from "react-router-dom";
import ArticleContainer, {
  loader,
} from "../article-components/ArticleContainer";
import ProjectContainer from "../project-components/ProjectContainer";
import Speaking from "../speaking-components/Speaking";
import Uses from "../tools-components/ToolContainer";
import LandingPage from "../utility components/LandingPage";
import RootLayout from "./RootLayout";
import Error from "../utility components/Error.jsx";
import { limitedArticleLoader } from "../utility components/LandingPage";
import TempSingleArticle, {
  articleLoader,
} from "../article-components/single-article/TempSingleArticle.jsx";
import ArticleRootLayout from "./ArticleRootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <LandingPage />, loader: limitedArticleLoader },
      { path: "about", element: <LandingPage />},
      {
        path: "articles",
        element: <ArticleRootLayout />,

        children: [
          { index: true, element: <ArticleContainer />, loader: loader },
          {
            path: ":id",
            element: <TempSingleArticle />,
            loader: articleLoader,
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
