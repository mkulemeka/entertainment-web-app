import * as Pages from "./pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import AppLayout from "./layouts/AppLayout";
import React from "react";

// Get all the pages from the Pages object
const pages = Object.keys(Pages);

const App = () => {
  // Create an array of routes from the pages
  const routes = pages.map((page) => {
    const Page = Pages[page];
    return {
      path: page === "Home" ? "/" : `/${page.toLowerCase()}`,
      element: (
        <AnimatePresence mode="wait">
          <Page />
        </AnimatePresence>
      ),
    };
  });

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: routes,
      errorElement: <Pages.ErrorPage />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
