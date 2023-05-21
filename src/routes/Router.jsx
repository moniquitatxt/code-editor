import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ProjectCodeEditor from "../pages/ProjectCodeEditor";
import Header from "../components/Header";
import WhichHome from "../pages/WhichHome";

//Creación de las rutas con la librearía react router
export const Router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
		//Página predeterminada inicio de sesión
	},
	{
		path: "/login",
		element: <Login />,
		//Página del login
	},
	{
		path: "/signup",
		element: <SignUp />,
		//Página de registrarse
	},
	{
		path: "/home/:username",
		element: <Header />,
		//esta ruta hace que todos los "hijos" (children) muestren antes el componente del header
		children: [
			{
				path: "/home/:username",
				element: <WhichHome />,
			},
			{
				path: "/home/:username/:id/:projectId",
				element: <ProjectCodeEditor />,
			},
		],
	},
]);
