// -- core
import Image from "next/image";
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- utils
import animation from "@utils/animation";

// -- atoms
import Button from "@atoms/Button";

const WhyCrappo = (props) => {
	const { ready, data, error } = props;
	const { slideUp } = animation;
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
					<motion.div
						className={style.img}
						initial={slideUp.initial}
						whileInView={slideUp.whileInView}
						transition={slideUp.transition(0.2)}
						viewport={slideUp.viewport}
					>
						<Image
							width={568}
							height={448}
							className={style.el}
							src={data.image}
							alt={data.title}
						/>
					</motion.div>
					<div className={style.text}>
						<motion.h2
							className={style.title}
							initial={slideUp.initial}
							whileInView={slideUp.whileInView}
							transition={slideUp.transition(0.5)}
							viewport={{ once: true, amount: 0.8 }}
						>
							{data.title}
						</motion.h2>
						<motion.p
							className={style.desc}
							initial={slideUp.initial}
							whileInView={slideUp.whileInView}
							transition={slideUp.transition(1)}
							viewport={{ once: true, amount: 0.8 }}
						>
							{data.description}
						</motion.p>
						<motion.div
							initial={slideUp.initial}
							whileInView={slideUp.whileInView}
							transition={slideUp.transition(1.5)}
							viewport={{ once: true, amount: 0.8 }}
						>
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
