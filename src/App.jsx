import "./App.css";

import * as Pages from "./pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import AppLayout from "./layouts/AppLayout";
import { AuthProvider } from "./context/AuthProvider";
import { EntertainmentProvider } from "./context/EntertainmentProvider";
import Login from "./pages/Login";
import ProtectedRoute from "./containers/ProtectedRoute";
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

  // Create a router with the routes
  const router = createBrowserRouter([
    {
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      children: routes,
      errorElement: <Pages.ErrorPage />,
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
  ]);

  return (
    <React.StrictMode>
      <AuthProvider>
        <EntertainmentProvider>
          <RouterProvider router={router} />
        </EntertainmentProvider>
      </AuthProvider>
    </React.StrictMode>
  );
};

export default App;
