// Component function for displaying paragraph contents in an article
export default function Contents(prop) {
  const linkClasses =
    "prose-a:text-[#14b8a6] prose-a:font-semibold prose-a:cursor-pointer prose-a:underline-none hover:prose-a:underline text-base my-5 leading-7 text-stone-600 dark:text-stone-400 prose-h1:font-bold dark:prose-h1:text-gray-100 prose-h1:py-4 prose-h1:text-4xl md:prose-h1:text-5xl dark:prose-h1:text-gray-100 prose-h2:font-medium md:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:text-2xl dark:prose-h2:text-gray-100 prose-img:w-[100%] prose-img:rounded-2xl prose-img:my-10";
  return <p className={linkClasses}>{prop.children}</p>;
}

// Paragraph also renders some nested html tags
// like br, a, b, strong tags
// Custome style is given to them for custom styling
