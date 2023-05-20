import React from "react";
import { useState } from "react";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Link,
} from "@chakra-ui/react";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		// Aquí se podría enviar la información a un servidor para autenticar al usuario
		console.log(`Username: ${username}, Password: ${password}`);
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
						<FormControl mt="10" id="username">
							<FormLabel>Usuario</FormLabel>
							<TextInput
								placeholder="Usuario"
								onChange={(event) => setUsername(event.target.value)}
							/>
						</FormControl>
						<FormControl mt="10" id="password">
							<FormLabel>Contraseña</FormLabel>
							<Input
								border="2px solid #3498DB"
								borderRadius="md"
								type="password"
								placeholder="Contraseña"
								size="lg"
								onChange={(event) => setPassword(event.target.value)}
							/>
						</FormControl>
						<Button m="10" type="submit" colorScheme="green">
							Iniciar sesión
						</Button>
						<Box>
							<Link
								fontWeight="bold"
								_hover={{ textDecoration: "underline", color: "blue.500" }}
								onClick={navigate("/signup")}
							>
								¿No estás registrado? Haz click aquí
							</Link>
						</Box>
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Login;
