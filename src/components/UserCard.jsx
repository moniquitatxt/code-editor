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
	let truncatedUsername = user.username;
	let truncatedName = user.name;

	const { isOpen, onOpen, onClose } = useDisclosure();

	if (user.username.length > 12 || user.name.length > 12) {
		truncatedUsername = user.username.slice(0, 12) + "...";
		truncatedName = user.name.slice(0, 12) + "...";
	}
	return (
		<Box borderWidth="1px" borderRadius="lg" p={4} bg="white" boxShadow="md">
			<Flex justifyContent="space-between" alignItems="center">
				<Box display="flex" alignItems="center">
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
						<Text m="2">{truncatedName}</Text>
					</Box>
				</Box>

				<Box>
					<Tooltip label="Eliminar usuario">
						<IconButton
							onClick={() => {
								onOpen();
							}}
							aria-label="Eliminar usuario"
							icon={<DeleteIcon />}
						/>
					</Tooltip>
					<UserDeleteModal
						userId={user._id}
						isOpen={isOpen}
						onClose={() => {
							window.location.reload();
							onClose();
						}}
					/>
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
