// --- DefaultSEO
const DefaultSEO = {
	title: "Crappo",
	description: "Description Crappo",
	keywords: "crappo, jquery template, project website, bilik media",
	timeRefresh: 900,
	siteName: "crappo",
	siteDomain: "https://crappo-psi.vercel.app/",
	siteURL: "https://crappo-psi.vercel.app/",
	themeColor: "#0d0d2b",
	author: "Alpin",
	copyright: "2025 Crappo. All Right Reserved",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		enable: true,
		locale: "en_US",
		type: "website",
		image: "/default/og-facebook.jpg",
	},
	twitter: {
		enable: true,
		username: "@alphax_id",
		card: "summary_large_image",
		image: "/default/twitter-card.jpg",
	},
	manifest: "",
	viewport: {
		width: "device-width",
		initialScale: 1,
		userScalable: true,
	},
	icons: {
		// -- src
		src: "/homescreen/",

		// -- shortcut
		shortcut: "favicon.ico",

		// -- android
		android: [16, 32, 96, 144, 192],

		// -- microsoft
		microsoft: 144,

		// -- apple
		apple: {
			default: "apple-icon.png",
			items: [57, 60, 72, 76, 114, 120, 144, 152, 180],
		},
	},
};

export default DefaultSEO;
