import React from "react";
import { useState, useEffect } from "react";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import UserCard from "../components/UserCard";
import { getUsers } from "../api/user";

const AdminHome = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers((users) => setUsers(users));
	}, []);

	return (
		<Container maxW="container.lg" py="6">
			<Box mb="4">
				<Text
					fontSize="2xl"
					fontWeight="semibold"
					fontFamily="Montserrat, sans-serif"
				>
					Lista de usuarios
				</Text>
			</Box>
			<SimpleGrid columns={[1, 2, 3]} spacing={8}>
				{users.map(
					(user, index) =>
						user.username !== "Administrador" && (
							<UserCard key={index} user={user} />
						)
				)}
			</SimpleGrid>
		</Container>
	);
};

export default AdminHome;
