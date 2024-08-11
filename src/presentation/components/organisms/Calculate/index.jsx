// -- core
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- utils
import animation from "@utils/animation";

// -- atoms
import FormControl from "@atoms/FormControl";
import Button from "@atoms/Button";

const Calculate = (props) => {
	const { ready, data, error } = props;
	const { slideUp } = animation;

	// if (error !== null) {
	// 	return <h2>{error.message}</h2>;
	// }

	// if (!ready) {
	// 	return (
	// 		<section className="sc-placeholder">
	// 			<div className="container">
	// 				<h2>Data sedang dimuat!</h2>
	// 			</div>
	// 		</section>
	// 	);
	// }

	return (
		<section className={style.calculate} id="calculate">
			<div className="container">
				<div className={style.head}>
					<motion.h2
						className={style.title}
						initial={slideUp.initial}
						whileInView={slideUp.whileInView}
						transition={slideUp.transition(0.8)}
						viewport={slideUp.viewport}
					>
						Check how much you can earn
					</motion.h2>
					<motion.p
						className={style.desc}
						initial={slideUp.initial}
						whileInView={slideUp.whileInView}
						transition={slideUp.transition(1)}
						viewport={slideUp.viewport}
					>
						Let’s check your hash rate to see how much you will earn today,
						Exercitation veniam consequat sunt nostrud amet.
					</motion.p>
				</div>
				<motion.div
					className={style.box}
					initial={slideUp.initial}
					whileInView={slideUp.whileInView}
					transition={slideUp.transition(1)}
					viewport={slideUp.viewport}
				>
					<div className={style.form}>
						<div className={style.row}>
							<FormControl
								type="text"
								name="rate"
								placeholder="Enter your hash rate"
							/>
						</div>
						<div className={style.row}>
							<FormControl variant="select" name="date" list={data} />
						</div>
						<div className={style.row}>
							<Button type="button" variant="accent">
								Calculate
							</Button>
						</div>
					</div>
					<div className={style.result}>
						<h4 className={style.resultTitle}>ESTIMATED 24 HOUR REVENUE:</h4>
						<h3 className={style.resultRevenue}>
							<span id="value">0.055 130 59</span>
							<span id="unit">ETH</span>
							<span id="currency">($1275)</span>
						</h3>
						<p className={style.resultDesc}>
							Revenue will change based on mining difficulty and Ethereum price.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Calculate;
