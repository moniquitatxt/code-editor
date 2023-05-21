import React, { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Textarea,
	Input,
} from "@chakra-ui/react";
import { createProject } from "../api/project";

//Este es un componente modal que abre una ventana dentro de la misma página.
//Su función es mostrar el formulario para llenar el nombre y descripción y crear un nuevo proyecto
//Recibe por props el id del usuario y sus correspondientes funciones de abrir y cerrar el modal

const ProjectModal = ({ userId, isOpen, onClose }) => {
	//Variable de estado y su función set para manejar el input del nombre del proyecto
	const [name, setName] = useState("");

	//Variable de estado y su función set para manejar el input de la descripción del proyecto
	const [description, setDescription] = useState("");

	//Función para al hacer click ejecute la función de creación del proyecto
	const onSubmit = async () => {
		//Espera a la función de la api que recibe el id del usuario y un objeto con el nombre y descripción del proyecto para crearlo
		//Esta función createProject hace una llamada al servidor para crear el proyecto
		const response = await createProject(userId, { name, description });
		alert(response);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				{/* Formulario para manejar los inputs, cuando detecta el evento submit, ejecuta la función que crea el proyecto */}
				<form onSubmit={onSubmit}>
					<ModalHeader>Crear nuevo proyecto</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						{/* Input para ingresar el nombre del proyecto */}
						<Input
							placeholder="Nombre del proyecto"
							mb={3}
							required
							onChange={(e) => setName(e.target.value)}
						/>
						{/* Textarea para ingresar la descripción del proyecto */}
						<Textarea
							placeholder="Descripción del proyecto"
							mb={3}
							required
							onChange={(e) => setDescription(e.target.value)}
						/>
					</ModalBody>
					<ModalFooter>
						{/*ESte es un botón de tipo submit para crear el proyecto, para que al hacer click se detecte en el componente form y se ejecute la función correspondiente */}
						<Button colorScheme="blue" type="submit">
							Crear proyecto
						</Button>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
};
export default ProjectModal;
