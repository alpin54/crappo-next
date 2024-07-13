// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = async () => {
	return await httpRequest({
		method: "get",
		url: ENDPOINT.FOOTER,
	});
};

const footerModel = {
	list: handleList,
};

export default footerModel;
