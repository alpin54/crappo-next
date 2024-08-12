// -- core
import { useEffect, useState } from "react";

// -- model
import statisticsModel from "@models/statistics";

// -- organisms
import Statistics from "@organisms/Statistics";

const StatisticsWidget = () => {
	const [callStatisticsData, setCallStatisticsData] = useState(false);
	const [statisticsData, setStatisticsData] = useState(null);
	const [statisticsReady, setStatisticsReady] = useState(false);

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		const calculate = document.getElementById("calculate");
		if (calculate) {
			const startScroll =
				calculate.offsetTop + calculate.clientHeight / 2;

			if (scrollTop > startScroll && !callStatisticsData) {
				setCallStatisticsData(true);
			}
		}
	};

	const handleStatisticsData = async () => {
		const { ready, data, error } = await statisticsModel.list();
		setStatisticsData(data?.data);
		setStatisticsReady(ready);
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

	return <Statistics ready={statisticsReady} data={statisticsData} />;
	// return <Statistics ready={ready} data={data?.data} error={error} />;
};

export default StatisticsWidget;
