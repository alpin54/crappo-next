// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = async () => {
	return await httpRequest({
		method: "get",
		url: ENDPOINT.WHY_CRAPPO,
	});
};

const whyCrappoModel = {
	list: handleList,
};

export default whyCrappoModel;
