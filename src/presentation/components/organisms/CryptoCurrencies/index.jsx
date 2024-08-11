// -- core
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- utils
import animation from "@utils/animation";

// -- atoms
import CryptoItem from "@molecules/CryptoItem";

const CryptoCurrencies = (props) => {
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
		<section className={style.crypto} id="crypto-currencies">
			<div className="container">
				<motion.h2
					className={style.title}
					initial={slideUp.initial}
					whileInView={slideUp.whileInView}
					transition={slideUp.transition(0.5)}
					viewport={slideUp.viewport}
				>
					{data?.title}
				</motion.h2>
				<div className={style.list}>
					{data?.list.map((val, idx) => {
						return (
							<motion.div
								className={style.item}
								key={`ci-${idx}`}
								initial={slideUp.initial}
								whileInView={slideUp.whileInView}
								transition={slideUp.transition(0.5 * idx)}
								viewport={slideUp.viewport}
							>
								<CryptoItem data={val} />
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default CryptoCurrencies;
