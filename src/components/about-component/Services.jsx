// import html from "../../assets/html.jpg";
import css from "../../assets/css.jpg";
// import js from "../../assets/js.jpg";

import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";

export default function Services() {
  return (
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-[#252529]">
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-[#252529] dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Static & Dynamic Website development
          </h3>
          <p className="my-4">
            Whether you need a lightweight static site or a feature-rich dynamic
            solution, I ensure that every project is: Responsive, Secure &
            Scalable. Let’s collaborate to create a web experience that truly
            stands out!
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9 mx-1"
            // src="../../assets/css.jpg"
            src={html}
            alt="profile picture"
          />
          <img
            className="rounded-full w-9 h-9 mx-1"
            // src="../../assets/html.jpg"
            src={css}
            alt="profile picture"
          />
          <img
            className="rounded-full w-9 h-9 mx-1"
            // src="../../assets/js.jpg"
            src={js}
            alt="profile picture"
          />
        </figcaption>
      </figure>
      <figure className="dark:bg-[#252529] flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg  dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            E-Commerce Development
          </h3>
          <p className="my-4">
            In E-Commerce Development, You will get E-commerce websites like
            Amazon & OrderKaro built using MERN Stack with AWS E-Commerce
            Services.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src={mongodb}
            alt="profile picture"
          />
          <img
            className="rounded-full w-9 h-9"
            src={react}
            alt="profile picture"
          />
          <img
            className="rounded-full w-9 h-9"
            src={express}
            alt="profile picture"
          />
          <img
            className="rounded-full w-9 h-9"
            src={node}
            alt="profile picture"
          />
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-[#252529] dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            NodeJS Community & Contribution
          </h3>
          <p className="my-4">
            I&apos;m strong contributor in Javascript & Node community. Ask me
            for any solutions regarding NodeJS. Let&apos; collborate together to
            contribute, build and improve Node community further.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Software Engineer at Facebook
            </div>
          </div>
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-[#252529] dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Wandering: Exploring Beyond Boundaries
          </h3>
          <p className="my-4">
            Through wandering, I embrace adventure and use the lessons learned
            to bring depth and meaning to my projects. If you’re looking for
            someone who thrives on exploration and thrives on creative energy,
            let’s connect!
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div>Joseph McFall</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              CTO at Google
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
