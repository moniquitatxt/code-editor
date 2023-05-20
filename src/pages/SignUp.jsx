import React from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { createUser } from "../api/user";
import TextInput from "../components/TextInput";

const SignUp = () => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rPassword, setRPassword] = useState("");

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
		<>
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
			<Button onClick={onSubmit} colorScheme="green">
				Agregar
			</Button>
		</>
	);
};

export default SignUp;
