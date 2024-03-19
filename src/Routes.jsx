import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import EduviCoursesDetails from "pages/EduviCoursesDetails/index.jsx";
import EduviBookDetails from "pages/EduviBooksDetails/index.jsx";
import EduviCart from "pages/EduviCart/index.jsx";
import EduviShop from "pages/EduviShop";
import EduviCourses from "pages/EduviCourses";
import EduviCoursesPricing from "pages/EduviCoursesPricing";
import EduviJoinAsTeacher from "pages/EduviJoinAsTeacher";
import Allmentors from "pages/Allmentors";
import Singlementordetails from "pages/Singlementordetails";
import LogIn from "modals/LogIn";
import SignUp from "modals/SignUp";
import AddBook from "pages/AddBooks/index.jsx";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "/login", element: <LogIn isOpen={true} /> },
    { path: "/addbooks", element: <AddBook isOpen={true} /> },
    { path: "/shop/:id", element: <EduviBookDetails /> },
    { path: "/register", element: <SignUp isOpen={true} /> },
    { path: "/coursedetails", element: <EduviCoursesDetails /> },
    { path: "/shop", element: <EduviShop /> },
    { path: "/cart", element: <EduviCart /> },
    { path: "allcourses", element: <EduviCourses /> },
    { path: "coursespricing", element: <EduviCoursesPricing /> },
    { path: "joinasteacher", element: <EduviJoinAsTeacher /> },
    { path: "allmentors", element: <Allmentors /> },
    { path: "singlementordetails", element: <Singlementordetails /> },
  ]);

  return element;
};

export default ProjectRoutes;
