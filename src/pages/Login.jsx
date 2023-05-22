import React from "react";
import { useState } from "react";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Image,
	Input,
	Link,
	useToast,
} from "@chakra-ui/react";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";
import { getUser } from "../api/user";
import { login } from "../api/auth";

const Login = () => {
	//Variables de estado que manejan los inputs de usuario y contraseña
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	//hook de react router para navegar entre páginas
	const navigate = useNavigate();
	const toast = useToast();

	//función que se ejecuta al dar click a iniciar sesión de tipo submit y asíncrona
	const onSubmit = async () => {
		if (username === "" || password === "") {
			alert("Por favor, complete todos los campos.");
			return;
		}
		//Ejecuta la petición para iniciar sesión al servidor con los parámetros de usuario y contraseña
		//Espera la respuesta para determinar si puedo iniciar sesión
		const response = await login({ username, password });
		toast(response);
		//De existir una respuesta y que esta sea positiva entonces navegar el home del usuario logeado
		if (response.status == "success") {
			navigate(`/home/${username}`);
		}
	};

	return (
		<Flex align="center" justify="flex-end" height="100vh">
			<Box width="50vw" height="100vh" display={{ base: "none", md: "block" }}>
				<Image
					src="/assets/imagen.jpeg"
					alt="Descripción de la imagen"
					float="left"
					width="100%"
					height="100%"
				/>
			</Box>

			<Box
				w={{ base: "100%", md: "50%" }}
				h="100%"
				bg="#D6EAF8"
				p={8}
				align="center"
				boxShadow="md"
				color="black"
			>
				<Flex mx="10%" align="center" justify="center" height="100%">
					<Box w="100%" align="center" justify="center">
						<Heading>Inicio de sesión</Heading>
						{/* Inputs */}
						<FormControl mt="10" id="username">
							<FormLabel>Usuario</FormLabel>
							<TextInput
								placeholder="Usuario"
								onChange={(event) => setUsername(event.target.value)} //Manejador del texto que se ingresa al input usuario
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
								onChange={(event) => setPassword(event.target.value)} //Manejador del texto que se ingresa al input usuario
							/>
						</FormControl>
						{/* Botón de inicio de sesión */}
						<Button m="10" onClick={onSubmit} type="submit" colorScheme="green">
							Iniciar sesión
						</Button>
						<Box>
							{/* Link que lleva al usuario no registrado a la página para registrarse */}
							<Link
								fontWeight="bold"
								_hover={{ textDecoration: "underline", color: "blue.500" }}
								onClick={() => navigate("/signup")}
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
