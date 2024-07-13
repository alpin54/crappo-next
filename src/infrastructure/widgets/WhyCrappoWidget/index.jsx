// -- model
import whyCrappoModel from "@models/whyCrappo";

// -- hooks
import useFirstLoad from "@hooks/useFirstLoad";

// -- organisms
import WhyCrappo from "@organisms/WhyCrappo";

const WhyCrappoWidget = () => {
	const { ready, data, error } = useFirstLoad(whyCrappoModel.list());

	return <WhyCrappo ready={ready} data={data?.data} error={error} />;
};

export default WhyCrappoWidget;
