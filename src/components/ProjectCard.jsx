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
	const navigate = useNavigate();

	let truncatedProjectName = project.name;
	if (project.name.length > 12) {
		truncatedProjectName = project.name.slice(0, 12) + "...";
	}

	const createdAtDate = new Date(project.createdAt);
	const formattedDate = createdAtDate.toLocaleDateString();

	return (
		<Box borderWidth="1px" borderRadius="lg" p={4} bg="white" boxShadow="md">
			<Flex justifyContent="space-between" alignItems="center">
				<Box>
					<Tooltip label={project.name}>
						<Heading
							as="h2"
							size="md"
							m="2"
							fontSize="lg"
							isTruncated
							fontFamily="Montserrat, sans-serif"
						>
							{truncatedProjectName}
						</Heading>
					</Tooltip>
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
					<Text fontSize="sm" color="gray.500" mt={4}>
						Creado el {formattedDate}
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default ProjectCard;
