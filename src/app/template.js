// -- widgets
import HeaderWidget from "@widgets/HeaderWidget";
import FooterWidget from "@widgets/FooterWidget";

const Template = (props) => {
	const { children } = props;

	return (
		<>
			<HeaderWidget />
			<main className="main">{children}</main>
			<FooterWidget />
		</>
	);
};

export default Template;
