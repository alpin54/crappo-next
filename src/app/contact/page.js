// -- model
import heroBannerModel from "@models/heroBanner";
import numbersModel from "@models/numbers";

// -- utils
import metaTag from "@utils/metaTag";
import schema from "@utils/schema";

// -- modules
import Contact from "@modules/Contact";

// -- metadata
const metadata = metaTag.dynamic({
	page: "Contact",
	link: "https://asteroid-destroyer.shop/contact",
});

// -- schemadata
const schemadata = schema.dynamic({
	page: "Contact",
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

	return <Contact {...props} />;
};

export { metadata, schemadata };
export default ProductPage;
