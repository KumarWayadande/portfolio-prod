// This Component is being used for displaying demo article
// This Component is being used for displaying demo article
// import axios from "axios";
import ArticleBackButton from "./ArticleBackBtn";
import Heading from "./Heading";
import Contents from "./Contents";
import banner from "../../../assets/aero_function_banner-3.png";
import ExtLink from "./ExtLink";
import CodeEditor from "./CodeEditor";
import Image from "./Image";
import ARTICLES from "../../../contents/articles-info";

export default function Article_02() {
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
          {ARTICLES[1].date}
        </p>
        <Heading extraClasses="mb-15">{ARTICLES[1].articleHeading}</Heading>
        <Contents>
          Arrow functions, introduced in{" "}
          <ExtLink link="https://www.w3schools.com/js/js_es6.asp">
            {" "}
            ES6 (ECMAScript 2015)
          </ExtLink>
          , provide a concise syntax for writing functions in JavaScript. They
          are not only syntactically shorter but also behave differently than
          traditional functions in terms of this binding. This blog explores
          arrow functions with code snippets to help you understand their usage
          and advantages.
        </Contents>
        <Image src={banner} className="rounded-xl my-10" />
        <Heading>Syntax of Arrow Functions</Heading>
        <Contents>The basic syntax of an arrow function is:</Contents>
        <CodeEditor>
          const functionName = (parameters) =&gt; expression;
        </CodeEditor>
        <Contents>
          If the function body contains multiple statements, you can use curly
          braces ({}) and the return keyword.
          <Heading>Example: Basic Arrow Function</Heading>
        </Contents>
        <CodeEditor>
          {`
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5
          `}
        </CodeEditor>
        <Heading>Features of Arrow Functions</Heading>
        <hr className="border-slate-200 dark:border-[#35353b]" />
        <Contents>
          <Heading>1. Implicit Return</Heading>If the function has a single
          expression, you can omit the return keyword and curly braces.
        </Contents>
        <CodeEditor>{`// Implicit return
const square = (x) => x * x;

console.log(square(4)); // Output: 16`}</CodeEditor>
        <Contents>
          <Heading>2. Simplified Syntax</Heading>
          For functions with a single parameter, parentheses around the
          parameter can be omitted.
        </Contents>
        <CodeEditor>{`// Implicit return
const square = (x) => x * x;

console.log(square(4)); // Output: 16`}</CodeEditor>
        <Contents>
          <Heading>3. No this Binding</Heading>
          Arrow functions do not have their own this. Instead, this is lexically
          inherited from the surrounding context.
          <br />
          Example: this in Arrow Functions
        </Contents>
        <CodeEditor>
          {`function Person() {
  this.age = 0;

  // Using traditional function
  setInterval(function() {
    this.age++; // Error: 'this' is undefined
  }, 1000);
}

function PersonWithArrow() {
  this.age = 0;

  // Using arrow function
  setInterval(() => {
    this.age++; // Works: 'this' is inherited from PersonWithArrow
    console.log(this.age);
  }, 1000);
}

new PersonWithArrow();`}
        </CodeEditor>
        <Heading>Use Cases for Arror functions</Heading>
        <Contents>
          <Heading>1. Array Manipulation</Heading>
          Arrow functions are commonly used with array methods like map, filter,
          and reduce.
          <br />
          Example: Using map
        </Contents>
        <CodeEditor>
          {`const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);

console.log(squares); // Output: [1, 4, 9, 16]`}
        </CodeEditor>
        <Contents>
          <Heading>2. Event Handlers</Heading>
          Arrow functions simplify event handling by ensuring the correct this
          context.
        </Contents>
        <CodeEditor>{`class Button {
  constructor() {
    this.label = 'Click me';
    document.querySelector('#myButton').addEventListener('click', () => {
      console.log(this.label); // Works as expected
    });
  }
}

new Button();`}</CodeEditor>
        <Contents>
          <Heading>Short function in Promises</Heading>
        </Contents>
        <CodeEditor>{`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}</CodeEditor>

        <Heading>Conclusion</Heading>
        <Contents>
          Conclusion Arrow functions provide a concise and powerful way to write
          functions in JavaScript, especially in scenarios like array
          manipulation, event handling, and asynchronous programming. However,
          they are not a one-size-fits-all solution, and understanding their
          limitations is crucial for effective use. Experiment with arrow
          functions in your projects to harness their full potential!
        </Contents>
      </div>
    </div>
  );
}
