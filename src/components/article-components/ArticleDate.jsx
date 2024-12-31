import formatGeneralDate from "../utility components/formatted-date";
export default function ArticleDate(prop) {
  const articleDate = new Date(prop.articleDate);
  return (
    <div className="text-gray-500 p-2 md:p-7 mt-10 md:px-3 md:my-3 w-[90%]">
      <div className="article-row flex flex-col md:flex-row">
        {formatGeneralDate(articleDate)}
      </div>
    </div>
  );
}
