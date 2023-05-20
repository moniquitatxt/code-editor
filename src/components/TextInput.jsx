import { Input } from "@chakra-ui/react";
import React from "react";

const TextInput = ({ placeholder, onChange }) => {
	return (
		<Input
			placeholder={placeholder}
			onChange={onChange}
			size="lg"
			border="2px solid #3498DB"
			borderRadius="md"
			type="text"
		/>
	);
};

export default TextInput;
