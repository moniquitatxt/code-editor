//Este archivo tiene las funciones que contienen las peticiones correspondientes para el CRUD de los usuarioss

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
		alert("Registro exitoso");
		return response;
	} catch (error) {
		alert(error.message);
	}
};

// Una función que recibe una función `callback` como parámetro y realiza una solicitud HTTP GET para obtener todos los usuarios registrados en el sistema
export const getUsers = async (callback) => {
	const response = await fetch(`${url}users`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});

	const data = await response.json();

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
		console.log(response);
	} catch (error) {
		console.log(error.message);
	}
};
