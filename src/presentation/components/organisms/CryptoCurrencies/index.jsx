// -- style
import style from "./style.module.scss";

// -- atoms
import CryptoItem from "@molecules/CryptoItem";

const CryptoCurrencies = (props) => {
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
		<section className={style.crypto} id="crypto-currencies">
			<div className="container">
				<h2 className={style.title}>{props.data?.title}</h2>
				<div className={style.list}>
					{props?.data?.list.map((val, idx) => {
						return (
							<div className={style.item} key={`ci-${idx}`}>
								<CryptoItem {...val} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default CryptoCurrencies;
