import { Input } from "@chakra-ui/react";
import React from "react";

//Componente que devuelve un input de tipo texto
//Está personalizado con los estilos de la página para ser reusable
//Recibe los props de placeholder y onchange correspondientes para manejar el input
const TextInput = ({ placeholder, onChange }) => {
	return (
		<Input
			placeholder={placeholder}
			onChange={onChange}
			size="lg"
			border="2px solid #3498DB"
			borderRadius="md"
			type="text"
		/>
	);
};

export default TextInput;
