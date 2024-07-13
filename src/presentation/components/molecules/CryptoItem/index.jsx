import Link from "next/link";
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- atom
import Button from "@atoms/Button";

const CryptoItem = (props) => {
	return (
		<div className={style.box}>
			<Link className={style.link} href={props.button.to}></Link>
			<div className={style.img}>
				<img
					width={80}
					height={80}
					className={style.el}
					src={props.icon !== undefined ? props.icon : ""}
					alt={props.name}
				/>
			</div>
			<div className={style.text}>
				<h3 className={style.title}>
					{props.name} <span>{props.code}</span>
				</h3>
				<p className={style.desc}>{props.description}</p>
				<div className={style.btn}>
					<Button category="rounded" icon="chevron-right">
						{props.button.text}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CryptoItem;
