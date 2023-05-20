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
import { DeleteIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";

const ProjectCard = ({ username, uid, project }) => {
	const navigate = useNavigate();

	let truncatedProjectName = project.name;
	if (project.name.length > 12) {
		truncatedProjectName = project.name.slice(0, 12) + "...";
	}

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
				<Flex>
					<Tooltip label="Eliminar proyecto">
						<IconButton aria-label="Eliminar proyecto" icon={<DeleteIcon />} />
					</Tooltip>
				</Flex>
			</Flex>
		</Box>
	);
};

export default ProjectCard;
