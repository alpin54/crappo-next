"use client";

// -- core
import { useEffect, useState, useRef } from "react";
import {
	useScroll,
	AnimatePresence,
	motion,
	useTransform,
} from "framer-motion";
import Lenis from "lenis";

// -- states
import useStateHeader from "core/states/header";

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

	// scroll parallax
	const container = useRef();
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

	useEffect(() => {
		setMenu("");

		const lenis = new Lenis();

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();

			setTimeout(() => {
				setIsLoading(false);
				document.body.style.cursor = "default";
				window.scrollTo(0, 0);
			}, 1000);
		})();
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
			<div ref={container} className="main-section">
				<InvestSmartWidget />
				<StatisticsWidget />
				<ProfitInvestmentsWidget />
			</div>
			{/* SUBMIT */}
			<SubsribeWidget />
		</>
	);
};

export default Home;
