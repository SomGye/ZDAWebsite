import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import "./index.css";
import RedirectStub from "./RedirectStub.tsx";
import { commFormLink, commInfoLink, privacyLink } from "./links.ts";

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

const routes = [
  {
    path: "/",
    route: "",
    redirect: "",
  },
  {
    path: "/portfolio",
    route: "portfolio",
    redirect: "",
  },
  {
    path: "/commissions",
    route: "commissions",
    redirect: "",
  },
  {
    path: "/about",
    route: "about",
    redirect: "",
  },
  {
    path: "/logo",
    route: "logo",
    redirect: "",
  },
  {
    path: "/examples",
    route: "examples",
    redirect: "",
  },
  {
    path: "/writings",
    route: "writings",
    redirect: "",
  },
  {
    path: "/form",
    route: "form",
    redirect: commFormLink,
  },
  {
    path: "/info",
    route: "info",
    redirect: commInfoLink,
  },
  {
    path: "/privacy",
    route: "privacy",
    redirect: privacyLink,
  },
];
const routerRoutes = routes.map((route) => { // ? dynamically map routes so that redirects skip App
  return {
    path: route.path,
    element: route.redirect ? (
      <RedirectStub redirectPath={route.redirect} />
    ) : (
      <App route={route.route} routes={routes} />
    ),
    errorElement: <ErrorPage />,
  };
});
const router = createBrowserRouter(routerRoutes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </>
);
