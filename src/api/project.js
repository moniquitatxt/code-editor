const url = `http://localhost:9000/api/`;

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

export const getProjects = async (uid, callback) => {
	const response = await fetch(`${url}users/${uid}/projects`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	const data = await response.json();
	console.log(data);
	callback(data);
};

export const getProject = async (uid, projectId) => {
	const response = await fetch(`${url}users/${uid}/projects/${projectId}`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	const project = await response.json();
	console.log(project);
	return project;
};

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
