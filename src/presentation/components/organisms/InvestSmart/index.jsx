// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const InvestSmart = (props) => {
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
		<section className={style.invest} id="invest-smart">
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.data?.title}</h2>
				</div>
				<div className={style.body}>
					<div className={style.img}>
						{props.data?.section.images.map((val, idx) => (
							<img
								src={val}
								alt={props.data?.section.title}
								key={`img-${idx}`}
							/>
						))}
					</div>
					<div className={style.text}>
						<h2 className={style.textTitle}>{props.data?.section.title}</h2>
						<p className={style.textDesc}>{props.data?.section.description}</p>
						<Button variant="accent" href={props.data?.section.button.to}>
							{props.data?.section.button.text}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InvestSmart;
