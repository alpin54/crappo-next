// -- tag manager
import { GoogleTagManager } from "@next/third-parties/google";

// -- utils
import metaTag, { MetaTagDefault } from "@utils/metaTag";
import { SchemaDefault } from "@utils/schema";

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

			{/* -- THE TAG MANAGER -- */}
			<GoogleTagManager gtmId="G-LVTYY07QYD" />

			{/* -- THE HEAD -- */}
			<body className="hold-transition">
				{children}
				<SchemaDefault />
			</body>
		</html>
	);
};

export { metadata, viewport };
export default RootLayout;
