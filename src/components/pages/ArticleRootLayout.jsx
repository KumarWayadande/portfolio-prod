import { Outlet, ScrollRestoration } from "react-router-dom";

export default function ArticleRootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
