import * as React from "react";
import { Box, Button, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

const Home = () => {
	const onSubmit = async () => {};

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
				<Button onClick={onSubmit} variant="solid" mt={20} colorScheme="green">
					Crear nuevo proyecto
				</Button>
			</Flex>
			<SimpleGrid columns={[1, 2, 3]} spacing={8}>
				<Box
					borderWidth="1px"
					borderRadius="lg"
					p={4}
					bg="white"
					boxShadow="md"
				>
					<Heading
						as="h2"
						size="md"
						mb={4}
						color="blue.500"
						fontFamily="Montserrat, sans-serif"
					>
						Project 1
					</Heading>
					<Button colorScheme="blue">Ver Proyecto</Button>
				</Box>
				<Box
					borderWidth="1px"
					borderRadius="lg"
					p={4}
					bg="white"
					boxShadow="md"
				>
					<Heading
						as="h2"
						size="md"
						mb={4}
						color="blue.500"
						fontFamily="Montserrat, sans-serif"
					>
						Project 2
					</Heading>
					<Button colorScheme="blue">Open Project</Button>
				</Box>
				<Box
					borderWidth="1px"
					borderRadius="lg"
					p={4}
					bg="white"
					boxShadow="md"
				>
					<Heading
						as="h2"
						size="md"
						mb={4}
						color="blue.500"
						fontFamily="Montserrat, sans-serif"
					>
						Project 3
					</Heading>
					<Button colorScheme="blue">Open Project</Button>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default Home;
