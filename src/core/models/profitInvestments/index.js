// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

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
