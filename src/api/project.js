//Este archivo tiene las funciones que contienen las peticiones correspondientes para el CRUD de los proyectos
//Leyenda los "response = await fetch" son peticiones a la API con su correspondiente método y ruta

// Se define la URL base para las solicitudes a la API
const url = `https://code-editor-service.onrender.com/api/`;

/* Esta función hace una solicitud POST a la API para crear un
 nuevo proyecto asociado a un usuario específico. Si la solicitud es exitosa, 
 se muestra un mensaje de alerta y se registran los datos del proyecto en la consola. 
 Si la solicitud no es exitosa, se lanza un error con el mensaje correspondiente.*/
export const createProject = async (uid, project) => {
	try {
		const response = await fetch(`${url}users/${uid}/projects`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(project),
		});

		if (!response.ok) {
			const error = await response.json();
			console.log(response);
			throw new Error(error.message);
		}

		alert("El proyecto ha sido creado exitosamente");

		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error.message);
	}
};
/* Una función que recibe el ID del usuario y una función `callback` como parámetros, y realiza una solicitud HTTP GET para obtener todos los proyectos asociados a ese usuario*/
export const getProjects = async (uid, callback) => {
	const response = await fetch(`${url}users/${uid}/projects`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	const data = await response.json();
	console.log(data);
	callback(data);
};

/*  Una función que recibe el ID del usuario y el ID del proyecto como parámetros y realiza una solicitud HTTP GET para obtener los datos del proyecto especificado*/
export const getProject = async (uid, projectId) => {
	const response = await fetch(`${url}users/${uid}/projects/${projectId}`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	const project = await response.json();
	console.log(project);
	return project;
};

/*una función que recibe el ID del usuario, el ID del proyecto y el código actualizado como parámetros y realiza una solicitud HTTP PUT para actualizar el código del proyecto especificado */

export const updateProject = async (uid, projectId, code) => {
	try {
		const response = await fetch(`${url}users/${uid}/projects/${projectId}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(code),
		});
		if (!response.ok) {
			const error = await response.json();
			console.log(response);
			throw new Error(error.message);
		}

		alert("El proyecto ha sido actualizado exitosamente");

		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error.message);
	}
};

/* una función que recibe el ID del usuario y el ID del proyecto como parámetros, y realiza una solicitud HTTP DELETE para eliminar el proyecto especificado */
export const deleteProject = async (uid, projectId) => {
	try {
		console.log("hola");

		const response = await fetch(`${url}users/${uid}/projects/${projectId}`, {
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
