const url = `http://localhost:9000/api/`;

export const getProjects = async (uid, callback) => {
	const response = await fetch(`${url}users/${uid}/projects`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	const data = await response.json();
	console.log(data);
	callback(data);
};
