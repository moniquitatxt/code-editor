import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useToast,
} from "@chakra-ui/react";
import { deleteProject } from "../api/project";
import { useNavigate } from "react-router-dom";

//Este es un componente modal que abre una ventana dentro de la misma página.
//Su función es preguntar por la confirmación de eliminación de un proyecto
//Recibe por Props el nombre de usuario, su id, el id del proyecto y sus funciones correspondientes para cerrar y abrir la ventana
const DeleteModal = ({ username, userId, projectId, isOpen, onClose }) => {
	//Este es un hook de la librería de rutas react router dom, que produce un objeto con el cual se puede navegar entre paginas, recibe un url
	const navigate = useNavigate();
	const toast = useToast();

	//Declaración de la función de las instrucciones que se ven a ejecutar cuando se seleccione confirmar la eliminación del proyecto
	const deleteP = async () => {
		//Es una función asíncrona y aquí llama a la función de eliminar proyecto de la carpeta api, que recibe el id del usuario y el id del proyecto
		//Esta función deleteProject hace una llamada al servidor para eliminar el proyecto en la base datos
		const response = await deleteProject(userId, projectId);
		toast(response);

		//Después de eliminar, navega al inicio del usuario logeado
		navigate(`/home/${username}`);
	};

	return (
		//Este es un componente modal de la librería chakra
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalBody fontWeight="semibold" py={4}>
					¿Estás seguro de que deseas eliminar este proyecto?
				</ModalBody>
				<ModalCloseButton />
				<ModalFooter>
					{/*Este es el botón que al hacer onClick se ejecuta la función de eliminar*/}
					<Button mx="10px" colorScheme="red" onClick={deleteP}>
						Eliminar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default DeleteModal;
