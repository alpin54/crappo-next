// -- model
import heroBannerModel from "@models/heroBanner";
import numbersModel from "@models/numbers";

// -- utils
import metaTag from "@utils/metaTag";
import schema from "@utils/schema";

// -- modules
import Products from "@modules/Products";

// -- metadata
const metadata = metaTag.dynamic({
	page: "Products",
	link: "https://crappo.com/products",
});

// -- schemadata
const schemadata = schema.dynamic({
	page: "Products",
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

	return <Products {...props} />;
};

export { metadata, schemadata };
export default ProductPage;
