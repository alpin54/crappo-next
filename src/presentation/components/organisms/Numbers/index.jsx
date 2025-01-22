// -- core
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- molecule
import NumbersItem from "@molecules/NumbersItem";

const Numbers = (props) => {
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
			<section className={style.numbers}>
				<div className="container">
					<div className={style.list}>
						{[1, 2, 3].map((idx) => {
							return (
								<div className={style.item} key={`f-${idx}`}>
									<NumbersItem ready={true} />
								</div>
							);
						})}
					</div>
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
							<motion.div className={style.item} key={`f-${idx}`} {...animate}>
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
