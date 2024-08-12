"use client";
// -- core
import { motion } from "framer-motion";
import Image from "next/image";

// -- utils
import animation from "@utils/animation";

// -- style
import style from "./style.module.scss";

const Preloader = () => {
	const { slideIn, slideOut } = animation;

	return (
		<motion.div
			className={style.preloader}
			variants={slideOut}
			initial="initial"
			exit="exit"
			key="LandingPage"
		>
			<motion.div
				className={style.logo}
				variants={slideIn}
				initial="initial"
				animate="enter"
				exit="exit"
			>
				<Image
					src="logo/crappo-text.svg"
					alt="Crappo"
					className={style.logoImg}
					width={134}
					height={40}
				/>
			</motion.div>
		</motion.div>
	);
};

export default Preloader;
