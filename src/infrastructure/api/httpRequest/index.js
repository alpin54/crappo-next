// --- library
import axios from "axios";

// --- httpRequest
const httpRequest = async (param) => {
	let config = { ...param };

	if (param.token) {
		config = {
			...param,
			headers: {
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
		};
	}

	return await axios(config)
		.then((response) => {
			return { data: response.data, ready: true, error: false };
		})
		.catch((error) => {
			if (error.response !== undefined) {
				return {
					data: null,
					ready: false,
					error: {
						status: error.response.status,
						type: error.name,
						message: error.message,
					},
				};
			} else {
				return {
					data: null,
					ready: false,
					error: {
						status: 410,
						type: "Gone",
						message:
							"The requested resource is no longer available at the server.",
					},
				};
			}
		});
};

export default httpRequest;
