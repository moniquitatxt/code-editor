import React from "react";
import {
	Box,
	Flex,
	Text,
	IconButton,
	Icon,
	Tooltip,
	Heading,
	Button,
	useDisclosure,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import UserDeleteModal from "./UserDeleteModal";

const UserCard = ({ user }) => {
	//Abrevia el nombre de usuario y el nombre real
	let truncatedUsername = user.username;
	let truncatedName = user.name;
	//Si el nombre de usuario y el nombre real son más largos de 12 caracteres
	//Los trunca y coloca puntos suspensivos ..
	if (user.username.length > 15 || user.name.length > 15) {
		truncatedUsername = user.username.slice(0, 15) + "...";
		truncatedName = user.name.slice(0, 15) + "...";
	}

	// Obtiene la función useDisclosure de Chakra UI para mostrar y ocultar el modal de eliminación de usuario

	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box borderWidth="1px" borderRadius="lg" p={4} bg="white" boxShadow="md">
			<Flex justifyContent="space-between" alignItems="center">
				<Box display="flex" alignItems="center">
					<Icon color="blue.500" as={FaUser} boxSize="36px" mr="2" />
					<Box>
						{/* Muestra el nombre de usuario truncado y tiene un tooltip que sí lo muestra completo */}
						<Tooltip label={user.username}>
							<Heading
								as="h2"
								size="md"
								m="2"
								fontSize="lg"
								isTruncated
								fontFamily="Montserrat, sans-serif"
							>
								{truncatedUsername}
							</Heading>
						</Tooltip>

						{/* Muestra el nombre real truncado y tiene un tooltip que sí lo muestra completo*/}
						<Tooltip label={user.name}>
							<Text m="2">{truncatedName}</Text>
						</Tooltip>
					</Box>
				</Box>

				<Box>
					{/*Botón para eliminar usuario que despliega el modal de confirmación de eliminación de un usuario */}
					<Tooltip label="Eliminar usuario">
						<IconButton
							onClick={() => {
								onOpen();
							}}
							aria-label="Eliminar usuario"
							icon={<DeleteIcon />}
						/>
					</Tooltip>
					{/*El componente modal de eliminación de usuario */}
					<UserDeleteModal
						userId={user._id}
						isOpen={isOpen}
						onClose={() => {
							//Refresca la ventana
							window.location.reload();
							onClose();
						}}
					/>
					{/*Texto que muestra la cantidad de proyectos que tiene un usuario*/}

					<Box textAlign="right" color="gray.500">
						<Text fontWeight="bold">
							{user.projects.length} proyecto
							{user.projects.length === 1 ? "" : "s"}
						</Text>
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};

export default UserCard;
