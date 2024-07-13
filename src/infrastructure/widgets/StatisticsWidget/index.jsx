// -- core
import { useEffect, useState } from "react";

// -- model
import statisticsModel from "@models/statistics";

// -- organisms
import Statistics from "@organisms/Statistics";

const StatisticsWidget = () => {
	const [callStatisticsData, setCallStatisticsData] = useState(false);
	const [statisticsdata, setStatisticsData] = useState(null);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const cryptoCurrencies = document.getElementById("crypto-currencies");
		if (cryptoCurrencies) {
			const startScroll =
				cryptoCurrencies.offsetTop + cryptoCurrencies.clientHeight / 2;

			if (scrollTop > startScroll && !callStatisticsData) {
				setCallStatisticsData(true);
			}
		}
	};

	const handleStatisticsData = async () => {
		const { ready, data, error } = await statisticsModel.list();
		setStatisticsData(data?.data);
	};

	useEffect(() => {
		if (callStatisticsData) {
			handleStatisticsData();
		}
	}, [callStatisticsData]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		// cleaning even listener on component unmount
		return () => {
			window.addEventListener("scroll", handleScroll);
		};
	}, []);

	return <Statistics data={statisticsdata} />;
	// return <Statistics ready={ready} data={data?.data} error={error} />;
};

export default StatisticsWidget;
