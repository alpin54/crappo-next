// -- model
import calculateModel from "@models/calculate";

// -- hooks
import useFirstLoad from "@hooks/useFirstLoad";

// -- organisms
import Calculate from "@organisms/Calculate";

const CalculateWidget = () => {
	const { ready, data, error } = useFirstLoad(calculateModel.list());

	return <Calculate ready={ready} data={data?.data} error={error} />;
};

export default CalculateWidget;
