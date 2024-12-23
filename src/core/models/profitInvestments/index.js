// -- api
import httpRequest from "@api/httpRequest";
import ENDPOINT from "@api/endPoint";

const handleList = async () => {
	return await httpRequest({
		method: "get",
		url: ENDPOINT.PROFIT_INVESTMENTS,
	});
};

const profitInvestmentsModel = {
	list: handleList,
};

export default profitInvestmentsModel;
