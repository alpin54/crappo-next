// -- model
import heroBannerModel from "@models/heroBanner";
import numbersModel from "@models/numbers";

// -- utils
import metaTag from "@utils/metaTag";
import schema from "@utils/schema";

// -- modules
import Features from "@modules/Features";

// -- metadata
const metadata = metaTag.dynamic({
	page: "Features",
	link: "https://crappo.com/features",
});

// -- schemadata
const schemadata = schema.dynamic({
	page: "Features",
});

// ==================
// ProductPage
// ==================

const ProductPage = async () => {
	const heroBanner = await heroBannerModel.list();
	const numbers = await numbersModel.list();

	const props = {
		ssrData: { heroBanner, numbers },
	};

	return <Features {...props} />;
};

export { metadata, schemadata };
export default ProductPage;
