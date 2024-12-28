import resume from "../../assets/KUMAR WAYADANDE RESUME_I.pdf";
import { useLoaderData } from "react-router-dom";
import MediaIcon from "./Mediacon";
import OverviewArticle from "./OverviewArticle";

const LandingPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="main-page-container">
      <div className="landing-page flex flex-col space-y-4 max-w-2xl">
        <div className="profile-container">
          <img
            src="\src\assets\profile.jpg"
            className="w-16 rounded-full border border-gray-200 shadow-sm"
            alt=""
          />
        </div>

        <div className="heading text-4xl md:text-5xl font-bold dark:text-white">
          Web Developer, and amateur cloud computing esthusiast.
        </div>

        <div className="">
          <p className="dark:text-gray-500">
            I’m Kumar, a web developer and cloud computing ethusiast based in
            Pune City. I’m intrigued to learn AWS cloud services with
            corresponding certifications and develop better Solutions.
            {/* I’m Kumar, a web developer and amatuer crime investigative based in Pune
            City. I’m strongly interested in psychology - The science of
            human thought, emotion, and learning, including interpersonal
            relationships. */}
          </p>
        </div>

        <div className="social-media-icons-container flex space-x-5">
          <MediaIcon
            class="fa-brands fa-github"
            link="https://github.com/KumarWayadande"
          />
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
            class="fa-brands fa-facebook"
            link="https://facebook.com/kumar.wayadande"
          />
        </div>
      </div>

      <div className="second-section -ml-[23%] sm:-ml-[20%] my-20 flex w-[500%]">
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            // src="./assets/l-page1.png"
            src="\src\assets\l-page1.png"
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="image-holder -rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            src="\src\assets\l-page2.png"
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            src="\src\assets\l-page3.png"
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            src="\src\assets\l-page4.png"
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            src="\src\assets\l-page5.png"
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
      </div>

      <div className="third-section flex md:flex-row flex-col my-20">
        <div className="left flex flex-col w-[100%]">
          {data.data.map((article, index) => {
            return <OverviewArticle {...article} key={index} />;
          })}

          {/* <OverviewArticle />
          <OverviewArticle />
          <OverviewArticle /> */}
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
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3">
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <img
                      // src="\src\assets\company-logo1.png"
                      src="\src\assets\linkcode.jpg"
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
                    </p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs">
                    2022-23
                  </span>
                </div>
              </div>

              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3">
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <img
                      src="\src\assets\innovatus.png"
                      className="w-12 rounded-3xl border-white border-8 dark:border-[#1e1e20]"
                      alt=""
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm dark:text-stone-100">
                      Innovatus Technologies
                    </h5>
                    <p className="text-stone-400 text-sm">Backend Developer</p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs">2023</span>
                </div>
              </div>
              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3">
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <img
                      src="\src\assets\campus-infotech.png"
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
                    </p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs">
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

      {/* <div className="new-section">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
              <a
                href="#"
                className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                </svg>
                Tutorial
              </a>
              <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                How to quickly deploy a static website
              </h1>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers.
              </p>
              <a
                href="#"
                className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a
                  href="#"
                  className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
                >
                  <svg
                    className="w-2.5 h-2.5 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                  </svg>
                  Design
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                  Start with Flowbite Design System
                </h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even
                  influence both web designers and developers.
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <a
                  href="#"
                  className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
                >
                  <svg
                    className="w-2.5 h-2.5 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                    />
                  </svg>
                  Code
                </a>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                  Best react libraries around the web
                </h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even
                  influence both web designers and developers.
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default LandingPage;

export async function limitedArticleLoader() {
  const res = await fetch(
    "http://localhost:1337/api/articles?pagination[limit]=3&sort=date:desc"
  );
  const data = await res.json();

  return data;
}
