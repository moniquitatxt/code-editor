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

const UserCard = ({ user }) => {
	let truncatedUsername = user.username;
	if (user.username.length > 12) {
		truncatedUsername = user.username.slice(0, 12) + "...";
	}

	return (
		<Box borderWidth="1px" borderRadius="lg" p={4} bg="white" boxShadow="md">
			<Flex justifyContent="space-between" alignItems="center">
				<Icon color="blue.500" as={FaUser} boxSize="36px" mr="2" />
				<Box>
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
					<Button colorScheme="blue">Ver Usuario</Button>
				</Box>
				<Flex>
					<Tooltip label="Editar usuario">
						<IconButton
							aria-label="Editar usuario"
							icon={<EditIcon />}
							mr="2"
						/>
					</Tooltip>
					<Tooltip label="Eliminar usuario">
						<IconButton aria-label="Eliminar usuario" icon={<DeleteIcon />} />
					</Tooltip>
				</Flex>
			</Flex>
		</Box>
	);
};

export default UserCard;
