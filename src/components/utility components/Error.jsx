import { Link } from "react-router-dom";
import RootLayout from "../pages/RootLayout";

const Error = () => {
  const content = {
    errorCode: "404",
    message: "Some errors occured | Try again later...",
  };

  return (
    <div>
      <RootLayout>
        <div className="flex flex-col justify-center items-center mx-auto w-max gap-y-4 py-32">
          <h1 className="text-gray-400 dark:text-gray-500 font-bold text-sm">404</h1>
          <h1 className="text-4xl md:text-5xl font-bold dark:text-gray-300">Page not found</h1>
          <p className="text-gray-500 font-normal dark:text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
          <Link to="/" className="bg-gray-100 dark:bg-[#1f1f22] dark:hover:bg-[#0d0d0e] dark:text-gray-200 hover:bg-gray-200 transition-all px-2 py-3 text-sm font-medium rounded-md">Go back home</Link>
        </div>
      </RootLayout>
    </div>
  );
};

export default Error;
