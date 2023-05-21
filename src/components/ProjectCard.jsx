import React, { useState } from "react";
import {
	Box,
	Flex,
	Text,
	IconButton,
	Icon,
	Tooltip,
	Heading,
	Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ username, uid, project }) => {
	// Obtiene la función navigate de React Router DOM para navegar a diferentes rutas
	const navigate = useNavigate();

	// Abrevia el nombre del proyecto si la longitud es mayor a 12 caracteres
	let truncatedProjectName = project.name;
	if (project.name.length > 15) {
		truncatedProjectName = project.name.slice(0, 15) + "...";
	}

	// Crea una nueva fecha a partir del tiempo de creación del proyecto y la convierte en una cadena en formato local
	const createdAtDate = new Date(project.createdAt);
	const formattedDate = createdAtDate.toLocaleDateString();

	return (
		// Caja que muestra el proyecto
		<Box borderWidth="1px" borderRadius="lg" p={4} bg="white" boxShadow="md">
			{/* Flexbox que muestra el nombre del proyecto y el botón "Ver Proyecto" */}
			<Flex justifyContent="space-between" alignItems="center">
				<Box>
					{/* Etiqueta de encabezado que muestra el nombre del proyecto */}
					<Tooltip label={project.name}>
						<Heading
							as="h2"
							size="md"
							m="2"
							fontSize="lg"
							isTruncated // Establece que el texto se abreviará si es demasiado largo
							fontFamily="Montserrat, sans-serif"
						>
							{truncatedProjectName}
						</Heading>
					</Tooltip>
					{/* Botón que permite al usuario navegar al proyecto */}
					<Button
						onClick={() => {
							navigate(`/home/${username}/${uid}/${project._id}`);
						}}
						colorScheme="blue"
					>
						Ver Proyecto
					</Button>
				</Box>
				<Box>
					{/* Muestra la fecha de creación del proyecto */}
					<Text fontSize="sm" color="gray.500" mt={4}>
						Creado el {formattedDate}
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default ProjectCard;
