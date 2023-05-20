import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectModal from "../components/ProjectModal";
import { useParams } from "react-router";
import { getProjects } from "../api/project";
import { getUser } from "../api/user";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
	const { username } = useParams();
	const [userId, setUserId] = useState();
	const [projects, setProjects] = useState([]);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleOpenModal = () => {
		setIsOpenModal(true);
	};
	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	useEffect(() => {
		const getUserWrap = async (callback) => {
			const data = await getUser(username);
			callback(data._id);
		};

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
				<Heading
					as="h1"
					fontSize={["3xl", "4xl"]}
					fontWeight="bold"
					color="blue.500"
					fontFamily="Montserrat, sans-serif"
					textShadow="1px 1px #E2E8F0"
				>
					¡Bienvenido Programador!
				</Heading>
				<Button
					onClick={handleOpenModal}
					variant="solid"
					mt={20}
					colorScheme="green"
				>
					Crear nuevo proyecto
				</Button>
				<ProjectModal
					userId={userId}
					isOpen={isOpenModal}
					onClose={handleCloseModal}
				/>
			</Flex>
			<SimpleGrid columns={[1, 2, 3]} spacing={8}>
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</SimpleGrid>
		</Box>
	);
};

export default Home;
