const url = `http://localhost:9000/api/`;

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
		alert("Inicio exitoso");

		console.log(data);
		return response;
	} catch (error) {
		alert(error.message);
	}
};
