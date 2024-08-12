// -- core
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- utils
import animation from "@utils/animation";

// -- molecule
import NumbersItem from "@molecules/NumbersItem";

const Numbers = (props) => {
	const { ready, data, error } = props;
	const { slideUp } = animation;
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
								initial={slideUp.initial}
								whileInView={slideUp.whileInView}
								transition={slideUp.transition(1 * idx)}
								viewport={slideUp.viewport}
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
