// -- style
import style from "./style.module.scss";

// -- molecule
import NumbersItem from "@molecules/NumbersItem";

const Numbers = (props) => {
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
		<section className={style.numbers} id="numbers">
			<div className="container">
				<div className={style.list}>
					{props.data.map((val, idx) => {
						return (
							<div className={style.item} key={`f-${idx}`}>
								<NumbersItem {...val} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Numbers;
