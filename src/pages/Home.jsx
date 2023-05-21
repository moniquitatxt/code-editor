import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectModal from "../components/ProjectModal";
import { useParams } from "react-router";
import { getProjects } from "../api/project";
import { getUser } from "../api/user";
import ProjectCard from "../components/ProjectCard";

//Este elemento es la página de inicio del usuario ordinario (todo aquel que no es el administrador)
//Aquí el usuario podrá ver los ProjectCard (ver componente) con la info de cada proyecto
const Home = () => {
	//Por parámetros de la url extrae el nombre del usuario logeado
	const { username } = useParams();
	//Usa variables de estado y su método set para el id del usuario y el arreglo de los proyectos del usuario
	const [userId, setUserId] = useState();
	const [projects, setProjects] = useState([]);
	//Usa variables de estado para manejar el abrir y cerrar del projectModal (vease componente)
	//por defecto al entrar en la página está en falso, es decir cerrado
	const [isOpenModal, setIsOpenModal] = useState(false);

	//Funciones de abrir y cerrar el modal
	const handleOpenModal = () => {
		setIsOpenModal(true);
	};
	const handleCloseModal = () => {
		setIsOpenModal(false);
		//Refrescar la página
		window.location.reload();
	};

	useEffect(() => {
		//Declaración de función que envuelve a la función de obtener usuario
		//Se hace esto para poder utilizar el await y esperar por la petición
		//Debido a que tiene que ser una función asyncrona lo cual no es useEffect
		//Aquí se obtiene toda la información del usuario a través de su nombre de usuario
		//Luego se utiliza el id del usuario en una función callback que recibe por parámetros
		const getUserWrap = async (callback) => {
			const data = await getUser(username);
			callback(data._id);
		};
		//Se ejecuta la función envoltorio para obtener el usuario junto a su función callback
		//El callback asigna el id del usuario a la variable de estado userId
		//Obtiene los proyectos del usuario y los asigna al arreglo de proyectos de la variable de estado projects
		getUserWrap((uid) => {
			setUserId(uid);
			getProjects(uid, (projects) => {
				setProjects(projects);
			});
		});
	}, []);

	return (
		<Box p={8}>
			<Flex justifyContent="space-between" alignItems="center" mb={8}>
				{/* Mensaje de bienvenida con el nombre del programador*/}
				<Heading
					as="h1"
					fontSize={["2xl", "3xl"]}
					fontWeight="bold"
					color="blue.500"
					fontFamily="Montserrat, sans-serif"
					textShadow="1px 1px #E2E8F0"
				>
					{`¡Bienvenido Programador ${username}!`}
				</Heading>
				{/* Botón que abre el modal para crear un proyecto */}
				<Button
					onClick={handleOpenModal}
					variant="solid"
					mt={20}
					colorScheme="green"
				>
					Crear nuevo proyecto
				</Button>
				{/* Modal para crear un proyecto */}
				<ProjectModal
					userId={userId}
					isOpen={isOpenModal}
					onClose={handleCloseModal}
				/>
			</Flex>
			{/* Grid que muestra en columnas los cards con la información de los proyectos */}
			<SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
				{
					//Por cada proyecto del arreglo de proyectos definidos en el useEffect, devuelve una card que muestre la información de ese proyecto
					//Hacer esto con cada uno de los proyectos

					projects.map((project, index) => (
						<ProjectCard
							key={index}
							project={project}
							uid={userId}
							username={username}
						/>
					))
				}
			</SimpleGrid>
		</Box>
	);
};

export default Home;
