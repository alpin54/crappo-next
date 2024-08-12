// -- core
import { useEffect, useState } from "react";

// -- model
import profitInvestmentsModel from "@models/profitInvestments";

// -- organisms
import ProfitInvestments from "@organisms/ProfitInvestments";

const ProfitInvestmentsWidget = () => {
	const [callProfitInvestmentsData, setCallProfitInvestmentsData] =
		useState(false);
	const [profitInvestmentsData, setProfitInvestmentsData] = useState(null);
	const [profitInvestmentsReady, setProfitInvestmentsReady] = useState(false);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const cryptoCurrencies = document.getElementById("crypto-currencies");
		if (cryptoCurrencies) {
			const startScroll =
				cryptoCurrencies.offsetTop + cryptoCurrencies.clientHeight / 2;

			if (scrollTop > startScroll && !callProfitInvestmentsData) {
				setCallProfitInvestmentsData(true);
			}
		}
	};

	const handleProfitInvestmentsData = async () => {
		const { ready, data, error } = await profitInvestmentsModel.list();
		setProfitInvestmentsData(data?.data);
		setProfitInvestmentsReady(ready);
	};

	useEffect(() => {
		if (callProfitInvestmentsData) {
			handleProfitInvestmentsData();
		}
	}, [callProfitInvestmentsData]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// cleaning even listener on component unmount
		return () => {
			window.addEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<ProfitInvestments
			ready={profitInvestmentsReady}
			data={profitInvestmentsData}
		/>
	);
};

export default ProfitInvestmentsWidget;
