import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AdminHome from "../pages/AdminHome";
import SignUp from "../pages/SignUp";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "signup",
		element: <SignUp />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/adminHome",
		element: <AdminHome />,
	},
]);
