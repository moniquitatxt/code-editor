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
import { deleteProject } from "../api/project";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ username, userId, projectId, isOpen, onClose }) => {
	const navigate = useNavigate();

	const deleteP = async () => {
		await deleteProject(userId, projectId);
		navigate(`/home/${username}`);
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalBody fontWeight="semibold" py={4}>
					¿Estás seguro de que deseas eliminar este proyecto?
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
export default DeleteModal;
