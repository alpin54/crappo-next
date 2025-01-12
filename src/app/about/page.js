// -- model
import heroBannerModel from "@models/heroBanner";
import numbersModel from "@models/numbers";

// -- utils
import metaTag from "@utils/metaTag";
import schema from "@utils/schema";

// -- modules
import About from "@modules/About";

// -- metadata
const metadata = metaTag.dynamic({
	page: "About",
	link: "https://asteroid-destroyer.shop/about",
});

// -- schemadata
const schemadata = schema.dynamic({
	page: "About",
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

	return <About {...props} />;
};

export { metadata, schemadata };
export default ProductPage;
