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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../api/user";

const UserDeleteModal = ({ userId, isOpen, onClose }) => {
	const navigate = useNavigate();

	const deleteP = async () => {
		await deleteUser(userId);
		navigate(`/home/Administrador`);
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalBody fontWeight="semibold" py={4}>
					¿Estás seguro de que deseas eliminar este usuario?
				</ModalBody>
				<ModalCloseButton />
				<ModalFooter>
					<Button mx="10px" colorScheme="red" onClick={deleteP}>
						Eliminar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default UserDeleteModal;
