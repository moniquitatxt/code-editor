import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AdminHome from "../pages/AdminHome";
import SignUp from "../pages/SignUp";
import ProjectCodeEditor from "../pages/ProjectCodeEditor";
import Header from "../components/Header";
import WhichHome from "../pages/WhichHome";

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
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/home",
		element: <Header />,
		children: [
			{
				path: "/home/:username",
				element: <WhichHome />,
			},
			{
				path: "/home/:username/:id/:projectId",
				element: <ProjectCodeEditor />,
			},

			{
				path: "/home/adminHome",
				element: <AdminHome />,
			},
		],
	},
]);
