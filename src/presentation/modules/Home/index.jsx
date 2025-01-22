"use client";

// -- core
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// -- states
import useStateHeader from "@states/header";

// -- widgets
import WhyCrappoWidget from "@widgets/WhyCrappoWidget";
import CalculateWidget from "@widgets/CalculateWidget";
import CryptoCurrenciesWidget from "@widgets/CryptoCurrenciesWidget";
import InvestSmartWidget from "@widgets/InvestSmartWidget";
import StatisticsWidget from "@widgets/StatisticsWidget";
import ProfitInvestmentsWidget from "@widgets/ProfitInvestmentsWidget";
import SubsribeWidget from "@widgets/SubscribeWidget";

// -- organisms
import HeroBanner from "@organisms/HeroBanner";
import Numbers from "@organisms/Numbers";

// -- molecules
import Preloader from "@molecules/preloader";

const Home = (props) => {
	// data
	const { ssrData } = props;
	const { heroBanner, numbers } = ssrData;

	// heroBanner
	const { data: heroBannerData, error: heroBannerError } = heroBanner;

	// numbers
	const { data: numbersData, error: numbersError } = numbers;

	// set menu
	const { setMenu } = useStateHeader();

	// loading
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setMenu("home");

		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();

			setTimeout(() => {
				setIsLoading(false);
				document.body.style.cursor = "default";
				window.scrollTo(0, 0);
			}, 1000);
		})();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<AnimatePresence mode="wait">
				{isLoading && <Preloader />}
			</AnimatePresence>
			{/* SSR */}
			<HeroBanner
				ready={true}
				data={heroBannerData.data}
				error={heroBannerError}
			/>
			<Numbers ready={true} data={numbersData.data} error={numbersError} />
			{/* CSR */}
			<WhyCrappoWidget />
			<CalculateWidget />
			<CryptoCurrenciesWidget />
			{/* OSC CSR */}
			<InvestSmartWidget />
			<StatisticsWidget />
			<ProfitInvestmentsWidget />
			{/* SUBMIT */}
			<SubsribeWidget />
		</>
	);
};

export default Home;
