// -- core
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- molecule
import NumbersItem from "@molecules/NumbersItem";

const Numbers = (props) => {
	const { ready, data, error } = props;
	if (!ready) {
		return (
			<section className="sc-placeholder">
				<div className="container">
					<h2>Data sedang dimuat!</h2>
				</div>
			</section>
		);
	}

	// if (error !== null) {
	// 	return <h2>{error.message}</h2>;
	// }

	return (
		<section className={style.numbers} id="numbers">
			<div className="container">
				<div className={style.list}>
					{data.map((val, idx) => {
						return (
							<motion.div
								className={style.item}
								key={`f-${idx}`}
								initial={{
									y: "24px",
									opacity: 0,
								}}
								whileInView={{
									y: "0",
									opacity: 1,
								}}
								transition={{
									type: "spring",
									duration: 1 * (1 + idx),
								}}
								viewport={{ once: true, amount: 0.8 }}
							>
								<NumbersItem data={val} />
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Numbers;
