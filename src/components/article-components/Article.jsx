import { Link } from "react-router-dom";
import ArticleButton from "./ArticleButton";
import ArticleContents from "./ArticleContents";
import ArticleContentsContainer from "./ArticleContentsContainer";
import ArticleDate from "./ArticleDate";
import ArticleHeading from "./ArticleHeading";
// import Markdown from 'react-markdown'
const Article = (prop) => {
  console.log("Article", prop, prop.data);
  
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional for smooth scrolling
    });
  };
  return (
    <div className="article-row flex flex-col md:flex-row">
      <ArticleDate articleDate={prop.date} />
      <Link to={`${prop.documentId}`} onClick={handleClick}>
        <ArticleContentsContainer>
          <ArticleHeading articleHeading={prop.articleHeading} />
          <ArticleContents article={prop.articleDesc} />
          {/* <Markdown>{prop.ArticleImageEditor}</Markdown> */}
          <ArticleButton />
        </ArticleContentsContainer>
      </Link>
    </div>
  );
};

export default Article;
