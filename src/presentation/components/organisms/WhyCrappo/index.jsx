// -- core
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const WhyCrappo = (props) => {
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

	if (!ready) {
		return (
			<section className={style.crappo} id="why-crappo">
				<div className="container">
					<div className={style.inner}>
						<div className={`${style.img} placeholder`}></div>
						<div className={style.text}>
							<h2 className={`${style.title} placeholder`}></h2>
							<p className={`${style.desc} placeholder`}></p>
							<div className={`${style.btn} placeholder`}></div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	// if (error !== null) {
	// 	return <h2>{error.message}</h2>;
	// }

	return (
		<section className={style.crappo} id="why-crappo">
			<div className="container">
				<div className={style.inner}>
					<motion.div className={style.img} {...animate}>
						<LazyLoadImage
							width={568}
							height={448}
							className={style.el}
							src={data.image}
							alt={data.title}
						/>
					</motion.div>
					<div className={style.text}>
						<motion.h2 className={style.title} {...animate}>
							{data.title}
						</motion.h2>
						<motion.p className={style.desc} {...animate}>
							{data.description}
						</motion.p>
						<motion.div {...animate}>
							<Button
								variant="accent"
								category="icon"
								href={data.button.to}
								icon="chevron-right"
							>
								{data.button.text}
							</Button>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyCrappo;
