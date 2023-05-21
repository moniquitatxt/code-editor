import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { Router as Routes } from "./routes/Router";
import Header from "./components/Header";

function App() {
	return (
		<ChakraProvider>
			<RouterProvider router={Routes} />
		</ChakraProvider>
	);
}

export default App;
