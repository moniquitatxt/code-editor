// Se define la URL base para las solicitudes a la API
//Leyenda los "response = await fetch" son peticiones a la API con su correspondiente método y ruta

const url = `https://code-editor-service.onrender.com/api/`;

// Se define una función asincrónica que realiza una solicitud de inicio de sesión a la API
export const login = async (logData) => {
	try {
		const response = await fetch(`${url}login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(logData),
		});

		if (!response.ok) {
			const error = await response.json();
			console.log(error);
			throw new Error(error.message);
		}

		const data = await response.json();

		return {
			title: "Inicio de sesión",
			description: "Has iniciado sesión correctamente",
			status: "success",
			duration: 5000,
			isClosable: true,
		};
	} catch (error) {
		// Si ocurre algún error durante la ejecución de la función, se muestra un mensaje de alerta con el mensaje de error correspondiente
		return {
			title: "Error",
			description: error.message,
			status: "error",
			duration: 5000,
			isClosable: true,
		};
	}
};
