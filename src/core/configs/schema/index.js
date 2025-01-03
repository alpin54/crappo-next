// --- DefaultSchema
const DefaultSchema = {
	organization: {
		context: "http://schema.org",
		id: "https://www.crappo.com#organization",
		type: "Organization",
		name: "Crappo",
		url: "https://www.crappo.com",
		logo: "https://www.crappo.com/logo/logo.png",
		contactPoint: [
			{
				"@type": "ContactPoint",
				telephone: "+62-81380003385",
				contactType: "sales",
				areaServed: "ID",
			},
		],
		sameAs: [
			"https://www.instagram.com/crappo",
			"https://www.facebook.com/crappo",
			"https://www.tiktok.com/@crappo",
		],
	},
	website: {
		context: "http://schema.org",
		id: "https://www.crappo.com#website",
		type: "WebSite",
		url: "https://www.crappo.com",
		name: "Crappo",
	},
	webpage: {
		context: "http://schema.org",
		id: "https://www.crappo.com#webpage",
		type: "WebPage",
		url: "https://www.crappo.com",
		name: "Crappo",
	},
};

export default DefaultSchema;
