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
