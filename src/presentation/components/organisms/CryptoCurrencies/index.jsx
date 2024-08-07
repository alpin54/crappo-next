// -- core
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- atoms
import CryptoItem from "@molecules/CryptoItem";

const CryptoCurrencies = (props) => {
	const { ready, data, error } = props;

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
						duration: 1,
					}}
					viewport={{ once: true, amount: 0.8 }}
				>
					{data?.title}
				</motion.h2>
				<div className={style.list}>
					{data?.list.map((val, idx) => {
						return (
							<motion.div
								className={style.item}
								key={`ci-${idx}`}
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
