import MediaIcon from "../utility components/Mediacon";

export default function Newsletter() {
  return (
    <div>
      <div className="flex h-full justify-center items-center dark:bg-[#252529]">
        <div className="">
          <div className="flex flex-wrap items-center w-full p-5 text-left border shadow-sm border-gray-200 rounded lg:flex-nowrap md:p-8 dark:border-gray-700">
            <div className="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
              <h3 className="mb-2 text-2xl font-bold text-gray-700 dark:text-gray-200">
                Subscribe to Newsletter
              </h3>
              <p className="text-gray-500 dark:text-gray-400 ">
                Provide your email to get email notification when I launch new
                products or publish new articles
              </p>
              <div className="social-media-icons-container flex space-x-5 my-4">
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
            <div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
              <div>
                <input type="hidden" />
                <div className="flex flex-col sm:flex-row">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-3 py-2 placeholder-stone-700 border border-stone-200 dark:border-none rounded-md sm:mr-5 focus:outline-none outline-none focus:ring-indigo-100 dark:bg-[#18181b] dark:text-white dark:placeholder-gray-400"
                  />

                  <a href="https://kumarwayadande.substack.com/embed">
                    <button className="w-full px-6 py-4 mt-5 text-white text-lg bg-black dark:bg-[#18181b] dark:hover:bg-[#18181b] rounded-md sm:mt-0 sm:w-auto whitespace-nowrap">
                      {" "}
                      Subscribe{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
