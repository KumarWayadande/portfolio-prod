import { Link } from "react-router-dom";

const OverviewArticle = (prop) => {
  return (
    <Link to={`articles/${prop.slug}`}>
      <div className="project1 flex flex-col my-5 hover:bg-gray-50 px-4 py-4 rounded-xl dark:hover:bg-[#252529] cursor-pointer">
        <p className="border-l-2 border-b-gray-600 text-gray-500 px-4 my-3">
          {prop.date}
        </p>
        <h2 className="font-semibold my-3 dark:text-white">
          {prop.articleHeading}
        </h2>
        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-3">
          {prop.article}
        </p>
        <p className="my-4 text-[#14b8a6] text-sm font-semibold cursor-pointer">
          Read article &gt;
        </p>
      </div>
    </Link>
  );
};

export default OverviewArticle;
