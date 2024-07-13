// -- core
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const WhyCrappo = (props) => {
	if (!props.ready) {
		return (
			<section className="sc-placeholder">
				<div className="container">
					<h2>Data sedang dimuat!</h2>
				</div>
			</section>
		);
	}

	// if (props.error !== null) {
	// 	return <h2>{props.error.message}</h2>;
	// }

	return (
		<section className={style.crappo} id="why-crappo">
			<div className="container">
				<div className={style.inner}>
					<div className={style.img}>
						<img
							width={704}
							height={568}
							className={style.el}
							src={props.data.image}
							alt={props.data.title}
						/>
					</div>
					<div className={style.text}>
						<h2 className={style.title}>{props.data.title}</h2>
						<p className={style.desc}>{props.data.description}</p>
						<Button
							variant="accent"
							category="icon"
							href={props.data.button.to}
							icon="chevron-right"
						>
							{props.data.button.text}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyCrappo;
