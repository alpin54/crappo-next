// -- config
import DefaultSEO from "@configs/SEO";

// -- metaTagDynamic
const metaTagDynamic = () => {
	return {
		title: DefaultSEO.title,
		description: DefaultSEO.description,
		keywords: DefaultSEO.keywords,
		alternates: {
			canonical: DefaultSEO.siteURL,
		},
		...(DefaultSEO.openGraph.enable && {
			openGraph: {
				locale: DefaultSEO.openGraph.locale,
				type: DefaultSEO.openGraph.type,
				siteName: DefaultSEO.siteName,
				title: DefaultSEO.title,
				description: DefaultSEO.description,
				url: DefaultSEO.siteURL,
				images: [{ url: DefaultSEO.openGraph.image, alt: DefaultSEO.title }],
			},
		}),
		...(DefaultSEO.twitter.enable && {
			twitter: {
				card: DefaultSEO.twitter.card,
				site: DefaultSEO.twitter.username,
				siteId: DefaultSEO.twitter.username,
				creator: DefaultSEO.twitter.username,
				title: DefaultSEO.title,
				description: DefaultSEO.description,
				images: [DefaultSEO.twitter.image],
			},
		}),
	};
};

export default metaTagDynamic;
