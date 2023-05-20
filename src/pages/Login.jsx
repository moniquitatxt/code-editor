import React from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { createUser } from "../api/user";

const Login = () => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rPassword, setRPassword] = useState("");

	const onSubmit = async () => {
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
				<Input placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
			</FormControl>
			<FormControl mt={4}>
				<FormLabel>Username</FormLabel>
				<Input
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</FormControl>
			<FormControl mt={4}>
				<FormLabel>Contraseña</FormLabel>
				<Input
					type="password"
					placeholder="Contraseña"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</FormControl>
			<FormControl mt={4}>
				<FormLabel>Repetir contraseña</FormLabel>
				<Input
					type="password"
					placeholder="Repetir contraseña"
					value={rPassword}
					onChange={(e) => setRPassword(e.target.value)}
				/>
			</FormControl>
			<Button onClick={onSubmit} colorScheme="green">
				Agregar
			</Button>
		</>
	);
};

export default Login;
