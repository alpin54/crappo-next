// -- config
import DefaultSEO from "@configs/SEO";

// -- metaTagDynamic
const metaTagDynamic = (data) => {
	return {
		title: data?.page
			? data?.page + " | " + DefaultSEO.title
			: DefaultSEO.title,
		description: data?.page
			? data?.page + " | " + DefaultSEO.description
			: DefaultSEO.description,
		keywords: data?.page
			? data?.page + " | " + DefaultSEO.keywords
			: DefaultSEO.keywords,
		alternates: {
			canonical: data?.link ? data?.link : DefaultSEO.siteURL,
		},
		...(DefaultSEO.openGraph.enable && {
			openGraph: {
				locale: DefaultSEO.openGraph.locale,
				type: DefaultSEO.openGraph.type,
				siteName: DefaultSEO.siteName,
				title: data?.page
					? data?.page + " | " + DefaultSEO.title
					: DefaultSEO.title,
				description: data?.page
					? data?.page + " | " + DefaultSEO.description
					: DefaultSEO.description,
				url: DefaultSEO.siteURL,
				images: [
					{
						url: data?.ogImage ? data?.ogImage : DefaultSEO.openGraph.image,
						alt: data?.title ? data?.title : DefaultSEO.title,
					},
				],
			},
		}),
		...(DefaultSEO.twitter.enable && {
			twitter: {
				card: DefaultSEO.twitter.card,
				site: DefaultSEO.twitter.username,
				siteId: DefaultSEO.twitter.username,
				creator: DefaultSEO.twitter.username,
				title: data?.page
					? data?.page + " | " + DefaultSEO.title
					: DefaultSEO.title,
				description: data?.page
					? data?.page + " | " + DefaultSEO.description
					: DefaultSEO.description,
				images: [
					data?.twitterImage ? data?.twitterImage : DefaultSEO.twitter.image,
				],
			},
		}),
	};
};

export default metaTagDynamic;
