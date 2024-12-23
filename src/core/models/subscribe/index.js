// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleSubmit = async (formData) => {
	return await httpRequest({
		method: "post",
		url: ENDPOINT.SUBSCRIBE,
		data: {
			email: formData.email,
		},
	});
};

const subscribeModel = {
	submit: handleSubmit,
};

export default subscribeModel;
