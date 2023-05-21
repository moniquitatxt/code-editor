import React from "react";
import { useParams } from "react-router-dom";
import AdminHome from "./AdminHome";
import Home from "./Home";

//Este es un componente de home que envuelve a los dos tipos inicio que existen y decide cual inicio devolver
//Si el usuario es el administrador entonces devuelve el componente de la vista del administrador
//Sino entonces retorna el inicio del usuario ordinario
const WhichHome = () => {
	const { username } = useParams();

	if (username == "Administrador") {
		return <AdminHome />;
	} else return <Home />;
};

export default WhichHome;
