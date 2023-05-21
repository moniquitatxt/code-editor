import React from "react";
import { Box, Flex, Heading, IconButton, Tooltip } from "@chakra-ui/react";
import { FaArrowLeft, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
	return (
		<Box
			bg="blue.500"
			px={8}
			py={4}
			boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
		>
			<Flex alignItems="center" justifyContent="space-between">
				<Heading color="white" as="h2" size="md" mx="auto">
					Code Editor
				</Heading>
				<Tooltip label="Cerrar Sesión">
					<IconButton
						bg="blue.500"
						color="white"
						aria-label="Cerrar sesión"
						icon={<FaSignOutAlt />}
						onClick={() => {}}
						mr={2}
					/>
				</Tooltip>
			</Flex>
		</Box>
	);
};

export default Header;
