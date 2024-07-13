// -- models
import headerModel from "@models/header";

// -- organisms
import Header from "@organisms/Header";

const HeaderWidget = async () => {
	const { data, error } = await headerModel.list();

	return <Header data={data?.data} error={error} />;
};

export default HeaderWidget;
