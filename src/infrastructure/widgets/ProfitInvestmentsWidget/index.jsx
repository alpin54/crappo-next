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
		const investSmart = document.getElementById("invest-smart");
		if (investSmart) {
			const startScroll = investSmart.offsetTop + investSmart.clientHeight / 2;

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
