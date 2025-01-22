// -- core
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const Statistics = (props) => {
	const { ready, data, error } = props;
	const animate = {
		initial: {
			y: "20%",
			opacity: 0,
		},
		whileInView: {
			y: 0,
			opacity: 1,
		},
		transition: {
			type: "spring",
			duration: 1.5,
		},
		viewport: { once: true },
	};

	// if (error !== null) {
	// 	return <h2>{error.message}</h2>;
	// }

	if (!ready) {
		return (
			<section className={style.statistics} id="statistics">
				<div className="container">
					<div className={style.inner}>
						<div className={`${style.img} placeholder`}></div>
						<div className={style.text}>
							<div className={style.wrapper}>
								<h2 className={`${style.textTitle} placeholder`}></h2>
								<p className={`${style.textDesc} placeholder`}></p>
								<div className={`${style.textBtn} placeholder`}></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className={style.statistics} id="statistics">
			<div className="container">
				<div className={style.inner}>
					<motion.div className={style.img} {...animate}>
						{data?.image && (
							<LazyLoadImage
								className={style.el}
								src={data?.image}
								alt={data?.title}
								width={720}
								height={480}
							/>
						)}
					</motion.div>
					<div className={style.text}>
						<div className={style.wrapper}>
							<motion.h2 className={style.textTitle} {...animate}>
								{data?.title}
							</motion.h2>
							<motion.p className={style.textDesc} {...animate}>
								{data?.description}
							</motion.p>
							<motion.div {...animate}>
								<Button variant="accent" href={data?.button.to}>
									{data?.button.text}
								</Button>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Statistics;
