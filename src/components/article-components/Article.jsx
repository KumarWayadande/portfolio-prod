import { Link } from "react-router-dom";
import ArticleButton from "./ArticleButton";
import ArticleContents from "./ArticleContents";
import ArticleContentsContainer from "./ArticleContentsContainer";
import ArticleDate from "./ArticleDate";
import ArticleHeading from "./ArticleHeading";

const Article = (prop) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional for smooth scrolling
    });
  };
  return (
    <div className="article-row flex flex-col md:flex-row">
      <ArticleDate articleDate={prop.date} />
      <Link to={`${prop.id}`} onClick={handleClick}>
        <ArticleContentsContainer>
          <ArticleHeading articleHeading={prop.articleHeading} />
          <ArticleContents article={prop.article} />
          <ArticleButton />
        </ArticleContentsContainer>
      </Link>
    </div>
  );
};

export default Article;
