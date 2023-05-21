import React, { useEffect, useState } from "react";
import { runCode, setEngine, setOptions } from "client-side-python-runner"; // Importa las funciones necesarias para ejecutar código Python en el lado del cliente
import {
	Box,
	Container,
	Divider,
	Flex,
	Heading,
	Icon,
	IconButton,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Text,
	Textarea,
	Tooltip,
	useDisclosure,
} from "@chakra-ui/react";
import {
	FaArrowLeft,
	FaFileExport,
	FaInfoCircle,
	FaPlay,
	FaSave,
	FaTrash,
} from "react-icons/fa";
import { useParams } from "react-router";
import { getProject, updateProject } from "../api/project";
import DeleteModal from "../components/DeleteModal";
import { useRef } from "react";
import { saveAs } from "file-saver";
const ProjectCodeEditor = () => {
	const { username, id, projectId } = useParams();
	// Obtiene los parámetros de la URL mediante el hook useParams
	// Se crean referencias para elementos del DOM
	const myRef = useRef();
	const refSalida = useRef();
	const refError = useRef();
	// Crea variables y funciones de estado para el manejo de un modal
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [name, setName] = useState(); // Crea una variable de estado para el nombre del proyecto
	const [code, setCode] = useState(); // Crea una variable de estado para el código del proyecto
	const [description, setDescription] = useState(); // Crea una variable de estado para la descripción del proyecto

	// Función para exportar el código como archivo
	const exportar_codigo = () => {
		const contenido = code;
		const nombre = `${name}.py`;

		const proyecto = new File([contenido], nombre, { type: "text/plain" });

		saveAs(proyecto);
	};

	// Obtener el proyecto y establecer los datos iniciales
	useEffect(() => {
		const getProjectWrap = async (callback) => {
			// Llama a la función getProject para obtener los datos del proyecto
			const data = await getProject(id, projectId);
			callback(data);
		};

		getProjectWrap((data) => {
			setName(data.name); // Establece el nombre del proyecto en la variable de estado
			setCode(data.code); // Establece el código del proyecto en la variable de estado
			setDescription(data.description); // Establece la descripción del proyecto en la variable de estado
		});
	}, []);

	// Actualizar el código del proyecto
	const updateCode = async () => {
		await updateProject(id, projectId, { code }); // Llama a la función updateProject para actualizar el código del proyecto en la base de datos.
	};

	// Compilación y configuración de opciones
	let mostrar_en_patalla = ""; // Variable para almacenar la salida que se mostrará en pantalla

	const print = (...argumentos) => {
		// Función para imprimir en pantalla
		for (let i = 0; i < argumentos.length; i++) {
			mostrar_en_patalla += argumentos[i] + " ";
		}
		// Concatena los argumentos y los agrega a la variable mostrar_en_patalla
		mostrar_en_patalla += "<br/>"; // Agrega una etiqueta <br/> al final para mostrar el siguiente resultado en una nueva línea
	};

	const configuracion = async () => {
		// Función para configurar opciones de ejecución
		setOptions({
			output: print, // Establece la función print como opción de salida para mostrar el resultado en pantalla
		});
		await setEngine("pyodide"); // Establece el motor de ejecución de Python como "pyodide"
	};

	configuracion(); // Llama a la función de configuración al renderizar el componente

	// Ejecución del código
	const ejecutar = async () => {
		try {
			await runCode(code); // Ejecuta el código utilizando la función runCode

			if (mostrar_en_patalla) {
				refSalida.current.innerHTML = mostrar_en_patalla; // Actualiza el contenido del elemento refSalida con la salida mostrada en pantalla
			}
		} catch ({ message }) {
			alert("Error, puede visualizarlo abajo"); // Muestra una alerta en caso de error
			refError.current.innerHTML = message; // Actualiza el contenido del elemento refError con el mensaje de error
		}
	};

	return (
		<Container autoFocus mt={10} maxW="container.lg">
			{/* Botón para volver atrás */}
			<IconButton
				aria-label="Volver atrás"
				icon={<FaArrowLeft />}
				onClick={() => window.history.back()}
				mr={2}
			/>
			<Flex justifyContent="space-between" alignItems="center" my={4}>
				<Flex alignItems="center">
					{/* Descripción del proyecto */}
					<Popover>
						<PopoverTrigger>
							<Box as="span" mr={2}>
								<Icon
									color="blue.500"
									mt={4}
									as={FaInfoCircle}
									cursor="pointer"
								/>
							</Box>
						</PopoverTrigger>
						<PopoverContent>
							<PopoverArrow />
							<PopoverCloseButton />
							<PopoverHeader fontWeight="semibold">
								Descripción del proyecto
							</PopoverHeader>
							<PopoverBody>{description}</PopoverBody>
						</PopoverContent>
					</Popover>
					<Heading size="lg">{name}</Heading>
				</Flex>

				<Flex alignItems="center">
					{/* Botón de guardar */}
					<Tooltip label="Guardar">
						<IconButton
							icon={<FaSave />}
							aria-label="Guardar"
							onClick={updateCode}
							mr={2}
						/>
					</Tooltip>
					{/* Botón de eliminar */}
					<Tooltip label="Eliminar">
						<IconButton
							ref={myRef}
							icon={<FaTrash />}
							aria-label="Eliminar"
							onClick={() => {
								onOpen();
							}}
							mr={2}
						/>
					</Tooltip>
					<DeleteModal
						username={username}
						userId={id}
						projectId={projectId}
						isOpen={isOpen}
						onClose={() => {
							window.location.reload();
							onClose();
						}}
					/>
					{/* Botón de ejecutar */}
					<Tooltip label="Ejecutar">
						<IconButton
							icon={<FaPlay />}
							aria-label="Ejecutar"
							onClick={() => {
								ejecutar();
							}}
							mr={2}
						/>
					</Tooltip>
					{/* Botón de exportar */}
					<Tooltip label="Exportar">
						<IconButton
							icon={<FaFileExport />}
							aria-label="Exportar"
							onClick={() => {
								exportar_codigo();
							}}
						/>
					</Tooltip>
				</Flex>
			</Flex>
			<Flex>
				<Box h="50vh" flex={1}>
					<Textarea
						value={code}
						onChange={(e) => setCode(e.target.value)}
						h="100%"
						resize="none"
						fontSize="sm"
						fontFamily="mono"
					/>
				</Box>
			</Flex>
			<Divider my={4} />
			<Text fontSize="lg" mb={2} fontWeight="bold">
				Resultado:
			</Text>
			<Box h="50vh" overflowY="auto" bg="gray.100" p={1} mb={5}>
				<Text ref={refSalida}></Text>
				{/* Muestra la salida del código en pantalla */}
			</Box>

			<Text fontSize="lg" mb={2} color="red" fontWeight="bold">
				Error:
			</Text>
			<Box h="50vh" overflowY="auto" bg="red.100" color="red" p={1} mb={5}>
				<Text ref={refError}></Text>
				{/* Muestra los mensajes de error en pantalla */}
			</Box>
		</Container>
	);
};

export default ProjectCodeEditor;
