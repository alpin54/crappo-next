// -- model
import numbersModel from "@models/numbers";

// -- organisms
import Numbers from "@organisms/Numbers";

const numbersWidget = () => {
	const { ready, data, error } = numbersModel.list();

	return <Numbers ready={ready} data={data?.data} error={error} />;
};

export default numbersWidget;
