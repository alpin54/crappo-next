// -- model
import heroBannerModel from "@models/heroBanner";
import numbersModel from "@models/numbers";

// -- utils
import metaTag from "@utils/metaTag";

// -- modules
import Home from "@modules/Home";

// -- metadata
const metadata = metaTag.dynamic();

// ==================
// HomePage
// ==================

const HomePage = async () => {
	const heroBanner = await heroBannerModel.list();
	const numbers = await numbersModel.list();

	const props = {
		ssrData: { heroBanner, numbers },
	};

	return <Home {...props} />;
};

export { metadata };
export default HomePage;
