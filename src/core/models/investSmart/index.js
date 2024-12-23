// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = async () => {
	return await httpRequest({
		method: "get",
		url: ENDPOINT.INVEST_SMART,
	});
};

const investSmartModel = {
	list: handleList,
};

export default investSmartModel;
