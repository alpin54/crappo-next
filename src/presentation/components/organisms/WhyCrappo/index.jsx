// -- core
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const WhyCrappo = (props) => {
	const { ready, data, error } = props;
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
					<div className={style.img}>
						<Image
							width={568}
							height={448}
							className={style.el}
							src={data.image}
							alt={data.title}
						/>
					</div>
					<div className={style.text}>
						<h2 className={style.title}>{data.title}</h2>
						<p className={style.desc}>{data.description}</p>
						<Button
							variant="accent"
							category="icon"
							href={data.button.to}
							icon="chevron-right"
						>
							{data.button.text}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyCrappo;
