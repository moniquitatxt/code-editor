import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

const Header = () => {
	return (
		<Box
			bg="blue.500"
			px={8}
			py={4}
			color="white"
			boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
		>
			<Flex alignItems="center">
				<Heading as="h2" size="md">
					Code Editor
				</Heading>
				<Spacer />
			</Flex>
		</Box>
	);
};

export default Header;
