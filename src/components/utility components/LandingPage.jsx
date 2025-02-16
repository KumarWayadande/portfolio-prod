import resume from "../../assets/KUMAR WAYADANDE RESUME_I.pdf";
import MediaIcon from "./Mediacon";
import OverviewArticle from "./OverviewArticle";
import profilePhoto from "../../assets/profile_5.png";

import landingByculla from "../../assets/landing-byculla-img.jpg";
import landingCloud from "../../assets/landing-cloud-img.png";
import landingWeb from "../../assets/landing-web-img.png";
import landingWeb1 from "../../assets/landing-web1-img.webp";
import landingWeb2 from "../../assets/l-page4.png";

import linkcode from "../../assets/linkcode.jpg";
import innovatus from "../../assets/innovatus.png";
import campus from "../../assets/campus-infotech.png";
import { FlipWordsDemo } from "../aceternity-components/flip-words-demo";

const companyImages = [linkcode, innovatus, campus];
const images = [
  landingCloud,
  landingWeb,
  landingByculla,
  landingWeb1,
  landingWeb2,
];

const limitedArticles = [
  {
    id: "ARTICLE_01",
    date: "December 27, 2024",
    articleHeading: "Building Scalable Web Architectures: Best Practices",
    article:
      "Discover strategies to design web systems that grow with demand. Learn about distributed architectures, load balancing, and failover mechanisms. Optimize scalability while maintaining system reliability.",
    slug: "Article_01",
  },
  {
    id: "ARTICLE_02",
    date: "December 24, 2024",
    articleHeading: "Understanding JavaScript Arrow Functions",
    article:
      "Arrow functions, introduced in ES6 (ECMAScript 2015), provide a concise syntax for writing functions in JavaScript. They are not only syntactically shorter but also behave differently than traditional functions in terms of this binding.",
    slug: "Article_02",
  },
  {
    id: "ARTICLE_03",
    date: "December 22, 2024",
    articleHeading: "Understanding the javascript map() function",
    article:
      "Quantum computing promises exponential processing power. Discover its potential in cryptography, AI, and simulations. Understand how it could revolutionize industries in the near future.",
    slug: "Article_03",
  },
];

const LandingPage = () => {
  return (
    <div className="main-page-container">
      <div className="landing-page flex flex-col space-y-4 max-w-2xl px-3">
        <div className="profile-container">
          <img
            src={profilePhoto}
            className="w-16 rounded-full border border-gray-200 shadow-sm"
            alt=""
          />
        </div>

        <div className="heading text-4xl md:text-5xl font-bold dark:text-white">
          {/* Full-Stack Developer and Cloud Computing Ethusiast. */}
          <FlipWordsDemo
            words={["Full-Stack Developer and Cloud Computing Enthusiast"]}
          />
        </div>

        <div className="-translate-y-20">
          <p className="dark:text-gray-400">
            I’m Kumar, a web developer and cloud computing enthusiast based in
            Pune City. I’m intrigued to learn AWS cloud services with
            corresponding certifications and develop better Solutions. I love
            wandering and exploring historic elements of mumbai.
            {/* I’m Kumar, a web developer and amatuer crime investigative based in Pune
            City. I’m strongly interested in psychology - The science of
            human thought, emotion, and learning, including interpersonal
            relationships. */}
          </p>
        </div>

        <div className="social-media-icons-container -translate-y-10 flex space-x-5">
          <MediaIcon
            class="fa-brands fa-linkedin"
            link="https://www.linkedin.com/in/kumar-wayadande/"
          />
          <MediaIcon
            class="fa-brands fa-instagram"
            link="https://www.instagram.com/kumar_wayadande/"
          />
          <MediaIcon
            class="fa-solid fa-envelope"
            link="mailto:kumarwaidande@gmail.com"
          />
          {/* <MediaIcon class="fa-brands fa-x-twitter" link="#" /> */}
          <MediaIcon
            class="fa-brands fa-github"
            link="https://github.com/KumarWayadande"
          />
        </div>
      </div>

      <div className="second-section -ml-[23%] sm:-ml-[20%] mt-20 flex w-[500%]">
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            // src="./assets/l-page1.png"
            src={images[0]}
            // src="\src\assets\landing-cloud-img.png"
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="image-holder -rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            // src="\src\assets\landing-web-img.png"
            src={images[1]}
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            // src="\src\assets\landing-byculla-img.jpg"
            src={images[2]}
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            // src="\src\assets\l-page4.png"
            src={images[3]}
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            // src="\src\assets\landing-web1-img.webp"
            src={images[4]}
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
      </div>

      <div className="third-section flex md:flex-row flex-col mt-10">
        <div className="left flex flex-col w-[100%]">
          {limitedArticles.map((article, index) => {
            return <OverviewArticle {...article} key={index} />;
          })}
        </div>

        <div className="right flex flex-col w-[100%] my-5 lg:pl-32 px-4 py-0">
          <div className="contact-card p-5 border dark:border-[#27272c] rounded-lg">
            <span className="flex gap-2 items-center justify-start text-stone-600">
              <i className="fa-solid fa-briefcase"></i>
              <h3 className="font-semibold text-sm text-stone-900 dark:text-gray-50">
                Stay up to date
              </h3>
            </span>
            <p className="text-stone-600 dark:text-stone-300 my-3 text-sm">
              Get notified when I publish something new, and unsubscribe at
              anytime.
            </p>
            <div className="contact-card-fields flex gap-4 my-2">
              <input
                className="focus:ring-4 focus:ring-teal-500/10 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 focus:border-teal-500 placeholder:text-[#52525c] dark:bg-[#1d1d21] dark:focus:outline-none focus:border-none text-sm dark:text-stone-50 dark:border-[#27272c] px-2 shadow-sm border dark:border-2 w-[80%] rounded-md focus:outline-none"
                type="text"
                name=""
                id=""
                placeholder="Email address"
              />
              <a href="https://kumarwayadande.substack.com/embed">
                <button className="bg-black text-sm font-bold  text-white py-3 dark:hover:bg-[#35353a] dark:bg-[#3f3f46] dark:text-stone-50 px-3 rounded-lg">
                  Join
                </button>
              </a>
              {/* <iframe
                src="https://kumarwayadande.substack.com/embed"
                width="480"
                height="320"
                // style="border:1px solid #EEE; background:white;"
                style={{ border: "1px", solid: "#EEE", background: "white" }}
                frameBorder="0"
                scrolling="no"
              ></iframe> */}
            </div>
          </div>

          <div className="work-exp p-5 border dark:border-[#27272c] rounded-lg my-10">
            <span className="flex gap-2 items-center justify-start text-stone-600 mb-5">
              <i className="fa-solid fa-briefcase"></i>
              <h3 className="font-semibold text-sm text-stone-900 dark:text-gray-50">
                Intern / Work
              </h3>
            </span>
            <div className="companies flex flex-col my-3">
              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3 mb-3 md:mb-0">
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <img
                      src={companyImages[0]}
                      className="w-12 rounded-3xl border-white border-8 dark:border-[#1e1e20]"
                      alt=""
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm dark:text-stone-100">
                      Linkcode Technologies
                    </h5>
                    <p className="text-stone-400 text-sm">
                      Front End Developer
                      <br />
                      <span className="md:hidden lg:hidden">2022-23</span>
                    </p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs hidden md:block lg:block">
                    2022-23
                  </span>
                </div>
              </div>

              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3 mb-3 md:mb-0">
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <img
                      // src="\src\assets\innovatus.png"
                      src={companyImages[1]}
                      className="w-12 rounded-3xl border-white border-8 dark:border-[#1e1e20]"
                      alt=""
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm dark:text-stone-100">
                      Innovatus Technologies
                    </h5>
                    <p className="text-stone-400 text-sm">
                      Backend Developer
                      <br />
                      <span className="md:hidden lg:hidden">2023</span>
                    </p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs hidden md:block lg:block">
                    2023
                  </span>
                </div>
              </div>
              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3 mb-3 md:mb-0">
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <img
                      // src="\src\assets\campus-infotech.png"
                      src={companyImages[2]}
                      className="w-12 rounded-3xl border-white border-8 dark:border-[#1e1e20]"
                      alt=""
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm dark:text-stone-100">
                      Campus Infotech
                    </h5>
                    <p className="text-stone-400 text-sm">
                      AWS Cloud Practitioner
                      <br />
                      <span className="md:hidden lg:hidden">
                        2024-25 present
                      </span>
                    </p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs hidden md:block lg:block">
                    2024-25 present
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <a href={resume} download="Copy of Resume.pdf">
                <button className="text-sm dark:hover:bg-[#1f1f23] hover:bg-gray-200 dark:bg-[#202022] dark:border-none dark:text-stone-300 px-4 py-2 w-[100%] rounded-lg bg-gray-100 font-semibold">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
