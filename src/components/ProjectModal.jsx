import React from "react";
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

const ProjectModal = ({ userId, isOpen, onClose }) => {
	const initialRef = React.useRef();
	const finalRef = React.useRef();

	const onSubmit = () => {};

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
						/>
						<Textarea placeholder="Descripción del proyecto" mb={3} required />
					</ModalBody>

					<ModalFooter>
						<Button variant="ghost" onClick={onClose} mr={3}>
							Cancelar
						</Button>
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
