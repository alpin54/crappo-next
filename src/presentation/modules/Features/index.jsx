"use client";

// -- core
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// -- states
import useStateHeader from "@states/header";

// -- widgets
import WhyCrappoWidget from "@widgets/WhyCrappoWidget";
import SubsribeWidget from "@widgets/SubscribeWidget";

// -- organisms
import HeroBanner from "@organisms/HeroBanner";
import Numbers from "@organisms/Numbers";

// -- molecules
import Preloader from "@molecules/preloader";

const Features = (props) => {
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
		setMenu("");

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
			{/* SUBMIT */}
			<SubsribeWidget />
		</>
	);
};

export default Features;
