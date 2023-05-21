import React, { useEffect, useRef, useState } from "react";
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
	useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../api/user";

//Este es un componente modal que abre una ventana dentro de la misma página.
//Su función es preguntar por la confirmación de eliminación de un usuario
//Recibe por Props el id de un usuario y sus funciones correspondientes para cerrar y abrir la ventana

const UserDeleteModal = ({ userId, isOpen, onClose }) => {
	//Este es un hook de la librería de rutas react router dom, que produce un objeto con el cual se puede navegar entre paginas, recibe un url
	const navigate = useNavigate();
	const toast = useToast();

	//Declaración de la función de las instrucciones que se ven a ejecutar cuando se seleccione confirmar la eliminación del usuario
	const deleteP = async () => {
		//Es una función asíncrona y aquí llama a la función de eliminar usuario de la carpeta api, que recibe el id del usuario
		//Esta función deleteUser hace una llamada al servidor para eliminar el usuario en la base datos
		const response = await deleteUser(userId);
		toast(response);
		//Se cierra el modal
		onClose();
	};

	return (
		//Este es un componente modal de la librería chakra
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalBody fontWeight="semibold" py={4}>
					¿Estás seguro de que deseas eliminar este usuario?
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
export default UserDeleteModal;
