// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "@atoms/SystemIcon";

const NumbersItem = (props) => {
	return (
		<div className={style.item}>
			<div className={style.icon}>
				<SystemIcon name={props.icon_font} />
			</div>
			<div className={style.text}>
				<h4 className={style.title}>{props.title}</h4>
				<p className={style.desc}>{props.description}</p>
			</div>
		</div>
	);
};

export default NumbersItem;
