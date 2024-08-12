// -- core
import { useEffect, useState } from "react";

// -- model
import investSmartModel from "@models/investSmart";

// -- organisms
import InvestSmart from "@organisms/InvestSmart";

const InvestSmartWidget = () => {
	const [callInvestData, setCallInvestData] = useState(false);
	const [investData, setInvestData] = useState(null);
	const [investReady, setInvestReady] = useState(false);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const whyCrappo = document.getElementById("why-crappo");
		if (whyCrappo) {
			const startScroll = whyCrappo.offsetTop + whyCrappo.clientHeight / 2;

			if (scrollTop > startScroll && !callInvestData) {
				setCallInvestData(true);
			}
		}
	};

	const handleInvestData = async () => {
		const { ready, data, error } = await investSmartModel.list();
		setInvestData(data?.data);
		setInvestReady(ready);
	};

	useEffect(() => {
		if (callInvestData) {
			handleInvestData();
		}
	}, [callInvestData]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// cleaning even listener on component unmount
		return () => {
			window.addEventListener("scroll", handleScroll);
		};
	}, []);

	return <InvestSmart ready={investReady} data={investData} />;
};

export default InvestSmartWidget;
