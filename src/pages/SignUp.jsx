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
	//variables de estado para manejar los inputs del llenado de los datos del usuario
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rPassword, setRPassword] = useState("");

	//hook de react router para navegar entre páginas
	const navigate = useNavigate();

	//función que se ejecuta al dar clic a registrarse
	const onSubmit = async () => {
		//verificación del llenado de todos los campos

		if (username === "" || name === "" || password === "" || rPassword === "") {
			alert("Por favor, complete todos los campos.");
			return;
		} //Verificación de la repetición de la contraseña
		else if (password != rPassword) {
			alert("Las contraseñas no coinciden.");
			return;
		}
		//Espera de la respuesta de creación del usuario
		const response = await createUser({ name, username, password });
		//si hubo respuesta y la respuesta fue positiva entonces el usuario fue creado y se redirige al home del usuario registrado
		if (response != undefined && response.ok) navigate(`/home/${username}`);
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
						{/* Inputs */}
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
						{/* Botón de registrarse */}
						<Button m="10" onClick={onSubmit} colorScheme="green">
							Registrarme
						</Button>
						<Box>
							{/* Link que lleva al usuario registrado a loguearse */}
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
