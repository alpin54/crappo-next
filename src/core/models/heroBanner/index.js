// -- api
import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

const handleList = async () => {
	return await httpRequest({
		method: "get",
		url: ENDPOINT.HERO_BANNER,
		transformResponse: [
			(data) => {
				const respo = JSON.parse(data);
				const transformData = respo.data.map((val) => ({
					img: val.image,
					title: val.title,
					sale: {
						title: val.label.badge,
						desc: val.label.description,
					},
					desc: val.description,
					btn: {
						to: val.button.to,
						text: val.button.text,
					},
				}));

				return {
					...respo,
					data: transformData,
				};
			},
		],
	});
};

const heroBannerModel = {
	list: handleList,
};

export default heroBannerModel;
