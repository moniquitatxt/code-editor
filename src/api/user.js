//Este archivo tiene las funciones que contienen las peticiones correspondientes para el CRUD de los usuarios
//Leyenda los "response = await fetch" son peticiones a la API con su correspondiente método y ruta

// Se define la URL base para las solicitudes a la API
const url = `https://code-editor-service.onrender.com/api/`;

// Una función que recibe un objeto `user` como parámetro y realiza una solicitud HTTP POST para crear un nuevo usuario en la API
export const createUser = async (user) => {
	try {
		const response = await fetch(`${url}users`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.message);
		}

		const data = await response.json();

		return {
			title: "Cuenta creada",
			description: "Tu cuenta ha sido creada exitosamente",
			status: "success",
			duration: 5000,
			isClosable: true,
		};
	} catch (error) {
		return {
			title: "Error",
			description: error.message,
			status: "error",
			duration: 5000,
			isClosable: true,
		};
	}
};

// Una función que recibe una función `callback` como parámetro y realiza una solicitud HTTP GET para obtener todos los usuarios registrados en el sistema
export const getUsers = async (callback) => {
	const response = await fetch(`${url}users`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});

	const data = await response.json();

	//la función callback será una que tome como parametro el arreglo de usuarios y lo pase por una función setUsers dentro de un useEffect
	callback(data);
};

//Una función que recibe el nombre de usuario como parámetro y realiza una solicitud HTTP GET para obtener los datos del usuario especificado
export const getUser = async (username) => {
	const response = await fetch(`${url}users/${username}`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});

	const user = await response.json();

	return user;
};

// Una función que recibe un parámetro "uid" que representa el ID del usuario que se quiere eliminar
export const deleteUser = async (uid) => {
	try {
		const response = await fetch(`${url}users/${uid}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			const error = await response.json();
			console.log(response);
			throw new Error(error.message);
		}
		return {
			title: "Usuario eliminado",
			description: "El usuario ha sido eliminado correctamente",
			status: "success",
			duration: 5000,
			isClosable: true,
		};
	} catch (error) {
		return {
			title: "Error",
			description: error.message,
			status: "error",
			duration: 5000,
			isClosable: true,
		};
	}
};
