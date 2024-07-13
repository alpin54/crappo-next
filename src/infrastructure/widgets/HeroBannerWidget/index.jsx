// -- models
import heroBannerModel from "@models/heroBanner";

// -- organisms
import HeroBanner from "@organisms/HeroBanner";

const HeroBannerWidget = () => {
	const { ready, data, error } = heroBannerModel.list();

	return <HeroBanner ready={ready} data={data?.data} error={error} />;
};

export default HeroBannerWidget;
