import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import "./index.css";

/* FONTSOURCE IMPORTS */
// import "@fontsource/outfit/100.css"; // ? Titles/Buttons
// import "@fontsource/outfit/200.css";
import "@fontsource/outfit/300.css";
// import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
// import "@fontsource/outfit/700.css";
// import "@fontsource/outfit/800.css";
// import "@fontsource/outfit/900.css";

// import "@fontsource/plus-jakarta-sans/200-italic.css"; // ? Default/Body text
// import "@fontsource/plus-jakarta-sans/200.css";
import "@fontsource/plus-jakarta-sans/300-italic.css";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400-italic.css";
import "@fontsource/plus-jakarta-sans/400.css";
// import "@fontsource/plus-jakarta-sans/500-italic.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600-italic.css";
import "@fontsource/plus-jakarta-sans/600.css";
// import "@fontsource/plus-jakarta-sans/700-italic.css";
// import "@fontsource/plus-jakarta-sans/700.css";
// import "@fontsource/plus-jakarta-sans/800-italic.css";
import "@fontsource/plus-jakarta-sans/800.css";

// import "@fontsource/urbanist/100.css"; // ? Commissions Cards
// import "@fontsource/urbanist/200.css";
// import "@fontsource/urbanist/300.css";
import "@fontsource/urbanist/400.css";
// import "@fontsource/urbanist/500.css";
// import "@fontsource/urbanist/600.css";
// import "@fontsource/urbanist/700.css";
// import "@fontsource/urbanist/800.css";
// import "@fontsource/urbanist/900.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App route="" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <App route="portfolio" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/commissions",
    element: <App route="commissions" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logo",
    element: <App route="logo" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/examples",
    element: <App route="examples" />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </>
);
