// -- core
import Image from "next/image";
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- utils
import animation from "@utils/animation";

// -- atoms
import Button from "@atoms/Button";

const ProfitInvestments = (props) => {
	const { ready, data, error } = props;
	const { slideUp } = animation;
	// if (error !== null) {
	// 	return <h2>{error.message}</h2>;
	// }

	if (!ready) {
		return (
			<section className={style.profit} id="profit-investments">
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
		<section className={style.profit} id="profit-investments">
			<div className="container">
				<div className={style.inner}>
					<motion.div
						className={style.img}
						initial={slideUp.initial}
						whileInView={slideUp.whileInView}
						transition={slideUp.transition(0.2)}
						viewport={slideUp.viewport}
					>
						{data?.image && (
							<Image
								className={style.el}
								src={data?.image}
								alt={data?.title}
								width={660}
								height={340}
							/>
						)}
					</motion.div>
					<div className={style.text}>
						<div className={style.wrapper}>
							<motion.h2
								className={style.textTitle}
								initial={slideUp.initial}
								whileInView={slideUp.whileInView}
								transition={slideUp.transition(0.3)}
								viewport={slideUp.viewport}
							>
								{data?.title}
							</motion.h2>
							<motion.p
								className={style.textDesc}
								initial={slideUp.initial}
								whileInView={slideUp.whileInView}
								transition={slideUp.transition(0.5)}
							>
								{data?.description}
							</motion.p>
							<motion.div
								initial={slideUp.initial}
								whileInView={slideUp.whileInView}
								transition={slideUp.transition(0.8)}
								viewport={slideUp.viewport}
							>
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

export default ProfitInvestments;
