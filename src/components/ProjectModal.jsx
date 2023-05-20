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

const ProjectModal = ({ userId, isOpen, onClose }) => {
	const initialRef = React.useRef();
	const finalRef = React.useRef();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const onSubmit = async () => {
		await createProject(userId, { name, description });
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			initialFocusRef={initialRef}
			finalFocusRef={finalRef}
		>
			<ModalOverlay />
			<ModalContent>
				<form onSubmit={onSubmit}>
					<ModalHeader>Crear nuevo proyecto</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Input
							placeholder="Nombre del proyecto"
							mb={3}
							ref={initialRef}
							required
							onChange={(e) => setName(e.target.value)}
						/>
						<Textarea
							placeholder="Descripción del proyecto"
							mb={3}
							required
							onChange={(e) => setDescription(e.target.value)}
						/>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" type="submit">
							Crear proyecto
						</Button>
						<Button variant="ghost" onClick={onClose} mr={3}>
							Cancelar
						</Button>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
};
export default ProjectModal;
