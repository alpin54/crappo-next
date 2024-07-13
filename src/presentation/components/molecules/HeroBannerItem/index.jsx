// -- core
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- atom
import Button from "@atoms/Button";

const HeroBannerItem = (props) => {
	const { data, id } = props;

	return (
		<div className={style.banner}>
			<div className={style.img}>
				<img
					width={600}
					height={600}
					className={style.el}
					src={data.img ? data.img : ""}
					alt={data.title ? data.title : ""}
				/>
			</div>
			<div className={style.text}>
				<div className={style.sale}>
					<p className={style.saleTitle}>{data.sale.title}</p>
					<p className={style.saleDesc}>{data.sale.desc}</p>
				</div>
				{id > 0 ? (
					<h2 className={style.title}>{data.title}</h2>
				) : (
					<h1 className={style.title}>{data.title}</h1>
				)}
				<p className={style.desc}>{data.desc}</p>
				<div className={style.btn}>
					<Button
						variant="accent"
						category="icon"
						href={data.btn.to}
						icon="chevron-right"
					>
						{data.btn.text}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HeroBannerItem;
