import React from "react";
import {
	Box,
	Button,
	Flex,
	Heading,
	IconButton,
	Tooltip,
} from "@chakra-ui/react";
import { FaCode, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Header = () => {
	const { username } = useParams(); // Obtenemos el nombre de usuario de los parámetros de la URL
	const navigate = useNavigate(); // Obtenemos la función navigate de la librería react-router-dom

	return (
		<>
			<Box
				bg="blue.500"
				px={8}
				py={4}
				boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
			>
				<Flex alignItems="center" justifyContent="space-between">
					{/* Añadimos un botón para navegar a la página de inicio del usuario */}
					<Button
						bgColor="blue.500"
						onClick={() => {
							navigate(`/home/${username}`);
						}}
					>
						<Heading color="white" as="h2" size="md" mx="auto">
							Code Editor
						</Heading>
					</Button>
					{/* Botón para cerrar sesión*/}
					<Tooltip label="Cerrar Sesión">
						<IconButton
							onClick={() => {
								navigate("/");
							}}
							bg="blue.500"
							color="white"
							aria-label="Cerrar sesión"
							icon={<FaSignOutAlt />}
							mr={2}
						/>
					</Tooltip>
				</Flex>
			</Box>
			<Outlet />
		</>
	);
};

export default Header;
