// -- utils
import metaTag, { MetaTagDefault } from "@utils/metaTag";

// -- style
import "@styles/app.scss";

// -- metadata
const metadata = metaTag.data();

// -- viewport
const viewport = metaTag.viewport();

// -- RootLayout --
const RootLayout = (props) => {
	const { children } = props;

	return (
		<html lang="en">
			{/* -- THE HEAD -- */}
			<head>
				<MetaTagDefault />
			</head>

			{/* -- THE HEAD -- */}
			<body>{children}</body>
		</html>
	);
};

export { metadata, viewport };
export default RootLayout;
