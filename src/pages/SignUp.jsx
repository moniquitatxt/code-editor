import React from "react";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { createUser } from "../api/user";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rPassword, setRPassword] = useState("");
	const navigate = useNavigate();

	const onSubmit = async () => {
		console.log(username);
		if (username === "" || name === "" || password === "" || rPassword === "") {
			alert("Por favor, complete todos los campos.");
			return;
		} else if (password != rPassword) {
			alert("Las contraseñas no coinciden.");
			return;
		}
		await createUser({ name, username, password });
	};

	return (
		<Flex align="center" justify="flex-end" height="100vh">
			<Box
				w={{ base: "90%", sm: "80%", md: "50%" }}
				h="100%"
				bg="#D6EAF8"
				p={8}
				align="center"
				boxShadow="md"
				color="black"
			>
				<Flex mx="10%" align="center" justify="center" height="100%">
					<Box w="100%" align="center" justify="center">
						<FormControl>
							<FormLabel>Nombre completo</FormLabel>
							<TextInput
								placeholder="Nombre"
								onChange={(e) => setName(e.target.value)}
							/>
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Username</FormLabel>
							<TextInput
								placeholder="Username"
								onChange={(e) => setUsername(e.target.value)}
							/>
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Contraseña</FormLabel>
							<Input
								border="2px solid #3498DB"
								borderRadius="md"
								type="password"
								size="lg"
								placeholder="Contraseña"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Repetir contraseña</FormLabel>
							<Input
								border="2px solid #3498DB"
								borderRadius="md"
								type="password"
								size="lg"
								placeholder="Repetir contraseña"
								onChange={(e) => setRPassword(e.target.value)}
							/>
						</FormControl>
						<Button m="10" onClick={onSubmit} colorScheme="green">
							Registrarme
						</Button>
						<Box>
							<Link
								fontWeight="bold"
								_hover={{ textDecoration: "underline", color: "blue.500" }}
								onClick={() => navigate("/login")}
							>
								¿Ya estás registrado? Haz click aquí
							</Link>
						</Box>
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
};

export default SignUp;