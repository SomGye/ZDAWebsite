import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.tsx";

/* FONTSOURCE IMPORTS */
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/karla/200.css";
import "@fontsource/karla/300.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/500.css";
import "@fontsource/karla/600.css";
import "@fontsource/karla/700.css";
import "@fontsource/karla/800.css";
import "@fontsource/karla/300-italic.css";
import "@fontsource/karla/400-italic.css";
import "@fontsource/karla/500-italic.css";
import "@fontsource/karla/600-italic.css";
import "@fontsource/karla/700-italic.css";

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
    path: "/examples",
    element: <App route="examples" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logo",
    element: <App route="logo" />,
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
