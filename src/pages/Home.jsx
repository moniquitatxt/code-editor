import * as React from "react";
import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";

const Home = () => {
	const onSubmit = async () => {
		const url = "http://localhost:9000/api/users";
		const response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: "maria",
				age: 3,
				email: "maria@hotmail.com",
			}),
		});

		console.log(response);
	};

	return (
		<Box p={8}>
			<Heading
				as="h1"
				mb={8}
				fontSize={["3xl", "4xl"]}
				fontWeight="bold"
				color="blue.500"
				fontFamily="Montserrat, sans-serif"
				textShadow="1px 1px #E2E8F0"
			>
				¡Bienvenido Programador!
			</Heading>
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
			<Button onClick={onSubmit} variant="solid" mt={8} colorScheme="green">
				Create New Project
			</Button>
		</Box>
	);
};

export default Home;
