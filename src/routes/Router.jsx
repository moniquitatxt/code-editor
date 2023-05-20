import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AdminHome from "../pages/AdminHome";
import SignUp from "../pages/SignUp";
import ProjectCodeEditor from "../pages/ProjectCodeEditor";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/home/:username",
		element: <Home />,
	},
	{
		path: "/home/:username/:id/:projectId",
		element: <ProjectCodeEditor />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/adminHome",
		element: <AdminHome />,
	},
]);
