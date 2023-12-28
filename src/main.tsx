import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import "./index.css";
import "@fontsource/inter";
import "@fontsource/karla";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.tsx";

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
