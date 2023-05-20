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
				<Text fontSize="2xl">Lista de usuarios</Text>
			</Box>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="4">
				{users.map((user, index) => (
					<UserCard key={index} user={user} />
				))}
			</SimpleGrid>
		</Container>
	);
};

export default AdminHome;
