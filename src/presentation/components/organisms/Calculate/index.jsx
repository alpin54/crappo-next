// -- core
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- atoms
import FormControl from "@atoms/FormControl";
import Button from "@atoms/Button";

const Calculate = (props) => {
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
					<motion.h2 className={style.title} {...animate}>
						Check how much you can earn
					</motion.h2>
					<motion.p className={style.desc} {...animate}>
						Let’s check your hash rate to see how much you will earn today,
						Exercitation veniam consequat sunt nostrud amet.
					</motion.p>
				</div>
				<motion.div className={style.box} {...animate}>
					<div className={style.form}>
						<div className={style.row}>
							<label htmlFor="rate">rate</label>
							<FormControl
								type="text"
								name="rate"
								id="rate"
								placeholder="Enter your hash rate"
							/>
						</div>
						<div className={style.row}>
							<label htmlFor="date">date</label>
							<FormControl variant="select" name="date" id="date" list={data} />
						</div>
						<div className={style.row}>
							<Button type="button" variant="accent">
								Calculate
							</Button>
						</div>
					</div>
					<div className={style.result}>
						<h2 className={style.resultTitle}>ESTIMATED 24 HOUR REVENUE:</h2>
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
