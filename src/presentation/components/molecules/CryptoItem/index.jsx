import Link from "next/link";
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- atom
import Button from "@atoms/Button";

const CryptoItem = (props) => {
	const { data } = props;
	return (
		<div className={style.box}>
			<Link className={style.link} href={data?.button?.to}>
				{data.name}
			</Link>
			<div className={style.img}>
				{data?.icon && (
					<Image
						width={80}
						height={80}
						className={style.el}
						src={data.icon !== undefined ? data.icon : ""}
						alt={data.name}
					/>
				)}
			</div>
			<div className={style.text}>
				<h3 className={style.title}>
					{data.name} <span>{data.code}</span>
				</h3>
				<p className={style.desc}>{data.description}</p>
				<div className={style.btn}>
					<Button category="rounded" icon="chevron-right">
						{data.button.text}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CryptoItem;
