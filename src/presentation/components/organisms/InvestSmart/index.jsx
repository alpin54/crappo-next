// -- core
import Image from "next/image";
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- utils
import animation from "@utils/animation";

// -- atoms
import Button from "@atoms/Button";

const InvestSmart = (props) => {
	const { ready, data } = props;
	const { slideUp } = animation;

	if (!ready) {
		return (
			<section className={style.invest} id="invest-smart">
				<div className="container">
					<div className={style.head}>
						<h2 className={`${style.title} placeholder`}></h2>
					</div>
					<div className={style.body}>
						<div className={`${style.img} placeholder`}></div>
						<div className={style.text}>
							<h2 className={`${style.textTitle} placeholder`}></h2>
							<p className={`${style.textDesc} placeholder`}></p>
							<div className={`${style.textBtn} placeholder`}></div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className={style.invest} id="invest-smart">
			<div className="container">
				<div className={style.head}>
					<motion.h2
						className={style.title}
						initial={slideUp.initial}
						whileInView={slideUp.whileInView}
						transition={slideUp.transition(0.5)}
						viewport={slideUp.viewport}
					>
						{data?.title}
					</motion.h2>
				</div>
				<div className={style.body}>
					<motion.div
						className={style.img}
						initial={slideUp.initial}
						whileInView={slideUp.whileInView}
						transition={slideUp.transition(0.2)}
						viewport={slideUp.viewport}
					>
						{data?.section.images.map(
							(val, idx) =>
								val && (
									<Image
										src={val}
										alt={data?.section.title}
										key={`img-${idx}`}
										width={idx == 0 ? 600 : 180}
										height={idx == 0 ? 300 : 164}
									/>
								)
						)}
					</motion.div>
					<div className={style.text}>
						<motion.h2
							className={style.textTitle}
							initial={slideUp.initial}
							whileInView={slideUp.whileInView}
							transition={slideUp.transition(0.3)}
							viewport={slideUp.viewport}
						>
							{data?.section.title}
						</motion.h2>
						<motion.p
							className={style.textDesc}
							initial={slideUp.initial}
							whileInView={slideUp.whileInView}
							transition={slideUp.transition(0.5)}
							viewport={slideUp.viewport}
						>
							{data?.section.description}
						</motion.p>
						<motion.div
							initial={slideUp.initial}
							whileInView={slideUp.whileInView}
							transition={slideUp.transition(0.8)}
							viewport={slideUp.viewport}
						>
							<Button variant="accent" href={data?.section.button.to}>
								{data?.section.button.text}
							</Button>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InvestSmart;
