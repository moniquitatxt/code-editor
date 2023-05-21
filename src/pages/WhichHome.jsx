import React from "react";
import { useParams } from "react-router-dom";
import AdminHome from "./AdminHome";
import Home from "./Home";

const WhichHome = () => {
	const { username } = useParams();

	if (username == "Administrador") {
		return <AdminHome />;
	} else return <Home />;
};

export default WhichHome;
