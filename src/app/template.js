"use client";
// -- core
import { useEffect } from "react";

// -- widgets
import HeaderWidget from "@widgets/HeaderWidget";
import FooterWidget from "@widgets/FooterWidget";

const Template = (props) => {
	const { children } = props;
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<HeaderWidget />
			<main className="main">{children}</main>
			<FooterWidget />
		</>
	);
};

export default Template;
