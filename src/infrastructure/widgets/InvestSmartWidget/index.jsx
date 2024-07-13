// -- core
import { useEffect, useState } from "react";

// -- model
import investSmartModel from "@models/investSmart";

// -- organisms
import InvestSmart from "@organisms/InvestSmart";

const InvestSmartWidget = () => {
	const [callInvestData, setCallInvestData] = useState(false);
	const [investdata, setInvestData] = useState(null);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const calculate = document.getElementById("calculate");
		if (calculate) {
			const startScroll = calculate.offsetTop + calculate.clientHeight / 2;

			if (scrollTop > startScroll && !callInvestData) {
				setCallInvestData(true);
			}
		}
	};

	const handleInvestData = async () => {
		const { ready, data, error } = await investSmartModel.list();
		setInvestData(data?.data);
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

	return <InvestSmart data={investdata} />;
};

export default InvestSmartWidget;
