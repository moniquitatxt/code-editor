import React from "react";
import {
	Box,
	Container,
	Heading,
	Text,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react";
import {
	FaArrowLeft,
	FaFileExport,
	FaInfoCircle,
	FaPlay,
	FaSave,
	FaTrash,
} from "react-icons/fa";

const Manual = () => {
	return (
		<Container mt={10} maxW="container.lg">
			<Heading size="lg" mb={4}>
				Manual de Usuario - Editor de Código
			</Heading>
			<Text mb={4}>
				Bienvenido al manual de usuario del Editor de Código. A continuación, se
				presentan las principales funciones y características del editor y cómo
				utilizarlas.
			</Text>
			<Box mb={6}>
				<Heading size="md" mb={2}>
					Ejecución de código
				</Heading>
				<Text mb={2}>
					Para ejecutar el código que has escrito en el editor, sigue los
					siguientes pasos:
				</Text>
				<UnorderedList>
					<ListItem>
						Haz clic en el botón de &quot;Ejecutar&quot; (icono de play) en la
						barra superior del editor.
					</ListItem>
					<ListItem>
						Espera a que el código se ejecute y la salida se muestre en la
						sección correspondiente de abajo donde dice &quot;Resultado&quot;.
					</ListItem>
					<ListItem>
						Si se genera algún error, se puede visualizar en el área de
						&quot;Error&quot; correspondiente, la cual se encuentra debajo del
						área de &quot;Resultado&quot;.
					</ListItem>
				</UnorderedList>
			</Box>
			<Box mb={6}>
				<Heading size="md" mb={2}>
					Guardado de código
				</Heading>
				<Text mb={2}>
					Para guardar el código que has escrito en el editor, sigue los
					siguientes pasos:
				</Text>
				<UnorderedList>
					<ListItem>
						Haz clic en el botón de &quot;Guardar&quot; (icono de un disco) en
						la barra superior del editor.
					</ListItem>
					<ListItem>
						El código se guardará automáticamente en la base de datos.
					</ListItem>
				</UnorderedList>
			</Box>
			<Box mb={6}>
				<Heading size="md" mb={2}>
					Exportación de código
				</Heading>
				<Text mb={2}>
					Para exportar el código que has escrito en el editor a un archivo de
					Python, sigue los siguientes pasos:
				</Text>
				<UnorderedList>
					<ListItem>
						Haz clic en el botón de &quot;Exportar&quot; (icono de una flecha
						hacia abajo) en la barra superior del editor.
					</ListItem>
					<ListItem>
						Se generará un archivo con extensión &quot;.py&quot; que podrás
						descargar y utilizar en otros proyectos.
					</ListItem>
				</UnorderedList>
			</Box>
			<Box mb={6}>
				<Heading size="md" mb={2}>
					Eliminación de proyecto
				</Heading>
				<Text mb={2}>
					Para eliminar un proyecto creado en el editor, sigue los siguientes
					pasos:
				</Text>
				<UnorderedList>
					<ListItem>
						Haz clic en el botón de &quot;Eliminar&quot; (icono de una papelera)
						en la barra superior del editor.
					</ListItem>
					<ListItem>
						Confirma que deseas eliminar el proyecto en la ventana emergente.
					</ListItem>
					<ListItem>
						Tu proyecto se habrá eliminado y serás redirigido al inicio
					</ListItem>
				</UnorderedList>
			</Box>
		</Container>
	);
};

export default Manual;
