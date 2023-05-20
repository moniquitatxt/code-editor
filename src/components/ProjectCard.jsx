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
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";

const ProjectCard = ({ project }) => {
	let truncatedProjectName = project.name;
	if (project.name.length > 12) {
		truncatedProjectName = project.name.slice(0, 12) + "...";
	}

	return (
		<Box borderWidth="1px" borderRadius="lg" p={4} bg="white" boxShadow="md">
			<Flex justifyContent="space-between" alignItems="center">
				<Icon color="blue.500" as={FaUser} boxSize="36px" mr="2" />
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
					<Button colorScheme="blue">Ver Proyecto</Button>
				</Box>
				<Flex>
					<Tooltip label="Editar proyecto">
						<IconButton
							aria-label="Editar proyecto"
							icon={<EditIcon />}
							mr="2"
						/>
					</Tooltip>
					<Tooltip label="Eliminar proyecto">
						<IconButton aria-label="Eliminar proyecto" icon={<DeleteIcon />} />
					</Tooltip>
				</Flex>
			</Flex>
		</Box>
	);
};

export default ProjectCard;
