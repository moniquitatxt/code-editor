import React, { useEffect, useState } from "react";
import { runCode, setEngine, setOptions } from "client-side-python-runner";

import {
	Box,
	Button,
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
	FaFileImport,
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
	const myRef = useRef();
	const refSalida = useRef();
	const refError = useRef();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [name, setName] = useState();
	const [code, setCode] = useState();
	const [description, setDescription] = useState();

	const exportar_codigo = () => {
		const contenido = code;
		const nombre = `${name}.py`;

		const proyecto = new File([contenido], nombre, { type: "text/plain" });

		saveAs(proyecto);
	};

	useEffect(() => {
		const getProjectWrap = async (callback) => {
			const data = await getProject(id, projectId);
			callback(data);
		};

		getProjectWrap((data) => {
			setName(data.name);
			setCode(data.code);
			setDescription(data.description);
		});
	}, []);

	const updateCode = async () => {
		await updateProject(id, projectId, { code });
	};

	// Compilacion
	let mostrar_en_patalla = "";

	const print = (...argumentos) => {
		for (let i = 0; i < argumentos.length; i++) {
			mostrar_en_patalla += argumentos[i] + " ";
		}
		mostrar_en_patalla += "<br/>";
	};

	const configuracion = async () => {
		setOptions({
			output: print,
		});
		await setEngine("pyodide");
	};

	configuracion();
	const ejecutar = async () => {
		try {
			await runCode(code);

			if (mostrar_en_patalla) {
				refSalida.current.innerHTML = mostrar_en_patalla;
			}
		} catch ({ message }) {
			refError.current.innerHTML = message;
		}
	};

	return (
		<Container autoFocus mt={10} maxW="container.lg">
			<IconButton
				aria-label="Volver atrás"
				icon={<FaArrowLeft />}
				onClick={() => window.history.back()}
				mr={2}
			/>
			<Flex justifyContent="space-between" alignItems="center" my={4}>
				<Flex alignItems="center">
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
					<Tooltip label="Guardar">
						<IconButton
							icon={<FaSave />}
							aria-label="Guardar"
							onClick={updateCode}
							mr={2}
						/>
					</Tooltip>
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
					<Tooltip label="Importar">
						<IconButton icon={<FaFileImport />} aria-label="Importar" mr={2} />
					</Tooltip>
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
				{/* Aquí podrías agregar el código para mostrar la salida */}
			</Box>

			<Text fontSize="lg" mb={2} fontWeight="bold">
				Error:
			</Text>
			<Box h="50vh" overflowY="auto" bg="gray.100" p={1} mb={5}>
				<Text ref={refError}></Text>
				{/* Aquí podrías agregar el código para mostrar la salida */}
			</Box>
		</Container>
	);
};

export default ProjectCodeEditor;
