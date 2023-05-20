import React from "react";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const UserCard = ({ user }) => {
	return (
		<Box borderWidth="1px" borderRadius="md" p="3">
			<Flex justifyContent="space-between" alignItems="center">
				<Text fontSize="lg">{user.username}</Text>
				<Flex>
					<IconButton aria-label="Editar usuario" icon={<EditIcon />} mr="2" />
					<IconButton aria-label="Eliminar usuario" icon={<DeleteIcon />} />
				</Flex>
			</Flex>
		</Box>
	);
};

export default UserCard;
