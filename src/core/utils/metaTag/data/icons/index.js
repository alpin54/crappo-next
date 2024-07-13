// -- config
import DefaultSEO from "@configs/SEO";

// -- metaTagIcons
const metaTagIcons = () => {
	// -- shortcut
	const shortcut = `${DefaultSEO.icons.src}${DefaultSEO.icons.shortcut}`;

	// -- icon
	const iconSizes = DefaultSEO.icons.android;
	const icon = iconSizes.map((val, idx) => ({
		url: `${DefaultSEO.icons.src}favicon-${val}x${val}.png`,
		sizes: `${val}x${val}`,
		type: "image/png",
	}));

	// -- apple
	const appleSizes = DefaultSEO.icons.apple.items;
	const apple = appleSizes.map((val, idx) => ({
		url: `${DefaultSEO.icons.src}apple-icon-${val}x${val}.png`,
		sizes: `${val}x${val}`,
	}));
	apple.unshift({
		url: `${DefaultSEO.icons.src}${DefaultSEO.icons.apple.default}`,
	});

	// -- other
	const other = [
		{
			rel: "apple-touch-startup-image",
			url: `${DefaultSEO.icons.src}${DefaultSEO.icons.apple.default}`,
		},
	];

	return {
		shortcut,
		icon,
		apple,
		other,
	};
};

export default metaTagIcons;
