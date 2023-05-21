import React from "react";
import { useState, useEffect } from "react";
import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import UserCard from "../components/UserCard";
import { getUsers } from "../api/user";

//Este elemento es la página de inicio del administrador
//Aquí el administrador podrá ver los UserCard (ver componente) con la info de todos los usuarios registrados
const AdminHome = () => {
	//variable de estado y su función set para guardar los usuarios
	const [users, setUsers] = useState([]);

	//Función que se ejecuta una vez al cargar la página
	useEffect(() => {
		//Función para obtener de la base de datos los usuarios y colocarlos con el set en la variable de estado users.
		//Esta función getUsers hace una petición al servidor para obtener los usuarios y toda su información
		getUsers((users) => setUsers(users));
	}, []);

	return (
		<Box p={8}>
			<Flex justifyContent="space-between" alignItems="center" mb={8}>
				<Text
					fontSize="2xl"
					fontWeight="semibold"
					fontFamily="Montserrat, sans-serif"
				>
					Lista de usuarios
				</Text>
			</Flex>

			{/* Componente que es un grid para mostrar en columnas el elemento deseado */}
			<SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
				{
					//Por cada usuario del arreglo de usuarios definidos en el useEffect, devuelve una card que muestre la información de ese usuario
					//Hacer esto con cada uno de los usuarios, excepto si es el administrador, no mostrar la info de este
					users.map(
						(user, index) =>
							user.username !== "Administrador" && (
								<UserCard key={index} user={user} />
							)
					)
				}
			</SimpleGrid>
		</Box>
	);
};

export default AdminHome;
