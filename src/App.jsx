import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { Router as Routes } from "./routes/Router";

//como se está utilizando la librería chakra hay que envolver todos los componentes en el proveedor de chakra
//El proveedor del router pasa por props las rutas de las páginas creadas en el archivo Router y las renderiza
function App() {
	return (
		<ChakraProvider>
			<RouterProvider router={Routes} />
		</ChakraProvider>
	);
}

export default App;
