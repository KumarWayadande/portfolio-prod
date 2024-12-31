// This Component is being used for displaying demo article
// This Component is being used for displaying demo article
// import axios from "axios";
import ArticleBackButton from "./ArticleBackBtn";
import Heading from "./Heading";
import Contents from "./Contents";
import banner from "../../../assets/Article_03_banner.jpg";
// import ExtLink from "./ExtLink";
import CodeEditor from "./CodeEditor";
import Image from "./Image";
import ARTICLES from "../../../contents/articles-info";

export default function Article_03() {
  return (
    <div className="single-article-container px-2 mx-auto mt-15 md:mt-20 flex flex-col md:flex-row">
      <div className="back-aero-container md:basis-1/6 flex-col md:flex-row items-center">
        <div className="flex">
          <ArticleBackButton />
        </div>
      </div>
      <div className="article-contents-container max-w-2xl basis-10/12">
        {/* <Date /> */}
        <p className="article-date text-stone-300 dark:text-stone-600 font-semibold text-[100%] mb-10">
          <span className="mr-3 font-bold h-3">|</span>
          {ARTICLES[2].date}
        </p>
        <Heading extraClasses="mb-15">{ARTICLES[2].articleHeading}</Heading>
        <Contents>
          The `map()` function in JavaScript is a powerful and versatile tool
          for transforming arrays. Introduced in ES5, it provides a way to apply
          a function to each element of an array and return a new array with the
          transformed values. In this blog, we’ll delve into the details of
          `map()` and explore its practical uses with examples.
        </Contents>
        <Image src={banner} className="rounded-xl my-10" />
        <Contents>
          <Heading>What is the `map()` Function?</Heading>
          The `map()` function is a method of the `Array` object in JavaScript.
          It creates a new array by applying a provided callback function to
          each element of the calling array.
          <Heading>Syntax</Heading>
        </Contents>
        <CodeEditor>
          {`array.map(callback(element, index, array), thisArg);`}
        </CodeEditor>
        <Contents>
          <ul>
            <li>
              <b>callback</b>: A function that is called for every element in
              the array.
            </li>
            <li>
              <b>element</b>: The current element being processed.
            </li>
            <li>
              <b>index(optional)</b>: The index of the current element.
            </li>{" "}
            <li>
              <b>array (optional)</b>: The array `map()` was called upon.
            </li>
            <li>
              <b>thisArg (optional)</b>: A value to use as `this` when executing
              the callback.
            </li>
          </ul>
          <Heading>Example: Basic Usage</Heading>
        </Contents>
        W
        <CodeEditor>
          {`const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
`}
        </CodeEditor>
        <Contents>
          <Heading>Features of `map()`</Heading>
          <ul>
            <li>
              <strong>Non-Destructive</strong>: The original array remains
              unchanged.
            </li>
            <li>
              <strong>Returns a New Array</strong>: The result is always a new
              array of the same length as the original.
            </li>
            <li>
              <strong>Chaining</strong>: <code>map()</code> can be chained with
              other array methods like <code>filter()</code> and{" "}
              <code>reduce()</code>
            </li>
          </ul>
        </Contents>
        <Heading>Practical Examples</Heading>
        <Contents>
          <Heading>1. Transforming Data</Heading>
          You can use `map()` to transform data into a different format or
          structure.
        </Contents>
        <CodeEditor>
          {`const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const usernames = users.map(user => user.name);

console.log(usernames); // Output: ['Alice', 'Bob', 'Charlie']`}
        </CodeEditor>
        <Contents>
          <Heading>2. Adding Properties to Objects</Heading>
          Use `map()` to add or modify properties of objects in an array.
        </Contents>
        <CodeEditor>
          {`const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 }
];

const productsWithTax = products.map(product => ({
  ...product,
  priceWithTax: product.price * 1.1
}));

console.log(productsWithTax);
// Output: [{ name: 'Laptop', price: 1000, priceWithTax: 1100 }, { name: 'Phone', price: 500, priceWithTax: 550 }]
`}
        </CodeEditor>
        <Contents>
          <Heading>3. Converting Strings to Numbers</Heading>
          If you have an array of strings, `map()` can convert them to numbers.
          <CodeEditor>
            {`const strings = ['1', '2', '3'];
const numbers = strings.map(Number);

console.log(numbers); // Output: [1, 2, 3]`}
          </CodeEditor>
        </Contents>
        <Contents>
          <Heading>4. Flattening Nested Arrays</Heading>
          While `map()` alone cannot completely flatten nested arrays, it can
          assist in partial flattening when combined with other methods.
        </Contents>
        <CodeEditor>
          {`const nested = [[1, 2], [3, 4], [5, 6]]; const flattened =
          nested.map(arr => arr.join(',')); console.log(flattened); // Output:
          ['1,2', '3,4', '5,6']`}
        </CodeEditor>
        <Heading>Common Mistakes</Heading>
        <Contents>
          <Heading>1. Not Returning a Value</Heading>
          The callback function must return a value; otherwise, the resulting
          array will contain `undefined`.
        </Contents>
        <CodeEditor>
          {`
const numbers = [1, 2, 3];
const result = numbers.map(num => {
  num * 2; // Missing return
});

console.log(result); // Output: [undefined, undefined, undefined]`}
        </CodeEditor>
        <Contents>
          <Heading>2. Using `map()` When `forEach()` is Sufficient</Heading>
          If you do not need the transformed array, prefer `forEach()` instead.
        </Contents>
        <CodeEditor>
          {`
// Inefficient use of map()
[1, 2, 3].map(num => console.log(num)); // Use forEach() instead`}
        </CodeEditor>
        <Heading> Advanced Use Cases</Heading>
        <Contents>
          <Heading>1. Chaining with Other Methods</Heading>
        </Contents>
        <CodeEditor>
          {`const numbers = [1, 2, 3, 4];
const result = numbers
  .map(num => num * 2)
  .filter(num => num > 4);

console.log(result); // Output: [6, 8]`}
        </CodeEditor>
        <Contents>
          <Heading>2. Async Operations</Heading>
          While `map()` does not support asynchronous callbacks directly, it can
          be combined with `Promise.all()` for asynchronous operations.
        </Contents>
        <CodeEditor>
          {`const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];

const fetchData = async () => {
  const results = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
  console.log(results);
};

fetchData();`}
        </CodeEditor>
        <Heading> Conclusion</Heading>
        <Contents>
          The `map()` function is a cornerstone of modern JavaScript
          programming. Its ability to transform arrays in a clean and
          declarative way makes it an essential tool for developers. By
          understanding its features, use cases, and limitations, you can
          leverage `map()` to write more expressive and efficient code.
        </Contents>
      </div>
    </div>
  );
}
