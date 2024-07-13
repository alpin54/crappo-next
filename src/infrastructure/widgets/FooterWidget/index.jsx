"use client";

// -- models
import footerModel from "@models/footer";

// -- hooks
import useFirstLoad from "@hooks/useFirstLoad";

// -- organisms
import Footer from "@organisms/Footer";

const FooterWidget = (props) => {
	const { ready, data, error } = useFirstLoad(footerModel.list());

	return <Footer ready={ready} data={data?.data} error={error} />;
};

export default FooterWidget;
