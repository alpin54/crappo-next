// -- core
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";

const InvestSmart = (props) => {
	const { ready, data } = props;

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
					<h2 className={style.title}>{data?.title}</h2>
				</div>
				<div className={style.body}>
					<div className={style.img}>
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
					</div>
					<div className={style.text}>
						<h2 className={style.textTitle}>{data?.section.title}</h2>
						<p className={style.textDesc}>{data?.section.description}</p>
						<Button variant="accent" href={data?.section.button.to}>
							{data?.section.button.text}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InvestSmart;
