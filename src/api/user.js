const url = `http://localhost:9000/api/`;

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

export const getUsers = async (callback) => {
	const response = await fetch(`${url}users`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});

	const data = await response.json();

	callback(data);
};

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
