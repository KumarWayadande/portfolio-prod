import Article from "./Article";
import Heading from "../utility components/Heading.jsx";
import HeadingContainer from "../utility components/HeadingContainer.jsx";
import SubHeading from "../utility components/SubHeading.jsx";
import ARTICLES from "../../contents/articles-info.js";
const ArticleContainer = () => {
  return (
    <div className="article-container my-20">
      <HeadingContainer>
        <Heading heading="Writing on software design, website building, and the research projects." />
        <SubHeading>
          All of my long-form thoughts on programming, cloud computing, website
          design, mumbai&apos;s underbelly exploration and more, collected in
          chronological order.
        </SubHeading>
      </HeadingContainer>

      <div className="article-card-container flex flex-col md:border-l-[1px] dark:border-gray-700 border-b-gray-50 md:w-[80%] pl-1">
        {/* All articles */}
        {ARTICLES.map((article, index) => {
          return <Article {...article} key={index} />;
        })}
        {/* End of all articles */}
      </div>
    </div>
  );
};

export default ArticleContainer;
