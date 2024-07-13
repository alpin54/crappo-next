// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = async () => {
	return await httpRequest({
		method: "get",
		url: ENDPOINT.STATISTICS,
	});
};

const statisticsModel = {
	list: handleList,
};

export default statisticsModel;
