import React from "react";
import { Box, Flex, Text, IconButton, Icon, Tooltip } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";

const UserCard = ({ user }) => {
	let truncatedUsername = user.username;
	if (user.username.length > 15) {
		truncatedUsername = user.username.slice(0, 15) + "...";
	}

	return (
		<Box borderWidth="1px" borderRadius="md" p="3">
			<Flex justifyContent="space-between" alignItems="center">
				<Flex alignItems="center">
					<Icon as={FaUser} size="24px" mr="2" />
					<Tooltip label={user.username}>
						<Text fontSize="lg" isTruncated>
							{truncatedUsername}
						</Text>
					</Tooltip>
				</Flex>
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
