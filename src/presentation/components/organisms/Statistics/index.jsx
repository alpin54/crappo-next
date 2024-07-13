// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const Statistics = (props) => {
	// if (props.error !== null) {
	// 	return <h2>{props.error.message}</h2>;
	// }

	// if (!props.ready) {
	// 	return (
	// 		<section className="sc-placeholder">
	// 			<div className="container">
	// 				<h2>Data sedang dimuat!</h2>
	// 			</div>
	// 		</section>
	// 	);
	// }

	return (
		<section className={style.statistics} id="statistics">
			<div className="container">
				<div className={style.inner}>
					<div className={style.img}>
						<img
							className={style.el}
							src={props.data?.image}
							alt={props.data?.title}
						/>
					</div>
					<div className={style.text}>
						<div className={style.wrapper}>
							<h2 className={style.textTitle}>{props.data?.title}</h2>
							<p className={style.textDesc}>{props.data?.description}</p>
							<Button variant="accent" href={props.data?.button.to}>
								{props.data?.button.text}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Statistics;
