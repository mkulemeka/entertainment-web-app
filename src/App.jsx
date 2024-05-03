import "./App.css";

import * as Pages from "./pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import AppLayout from "./layouts/AppLayout";
import { EntertainmentProvider } from "./context/EntertainmentProvider";
import Login from "./pages/Login";
import React from "react";
import SignUp from "./pages/SignUp";

// Get all the pages from the Pages object
const pages = Object.keys(Pages);

const App = () => {
  // Create an array of routes from the pages
  const routes = pages.map((page, i) => {
    const Page = Pages[page];
    return {
      path: page === "Home" ? "/" : `/${page.toLowerCase()}`,
      element: (
        <AnimatePresence mode="sync">
          <Page key={page + i} />
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
      <EntertainmentProvider>
        {/* <RouterProvider router={router} /> */}
        <Login />
        {/* <SignUp /> */}
      </EntertainmentProvider>
    </React.StrictMode>
  );
};

export default App;
