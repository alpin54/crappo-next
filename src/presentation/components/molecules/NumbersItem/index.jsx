// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "@atoms/SystemIcon";
import Placeholder from "@atoms/Placeholder";

const NumbersItem = (props) => {
	const { data, ready } = props;

	return (
		<div className={style.item}>
			<div className={style.icon}>
				{ready ? (
					<Placeholder circle={true} />
				) : (
					<SystemIcon name={data.icon_font} />
				)}
			</div>
			<div className={style.text}>
				<h4 className={style.title}>
					{!ready ? data.title : <Placeholder width={100} height={48} />}
				</h4>
				<p className={style.desc}>
					{!ready ? data.description : <Placeholder width={200} height={24} />}
				</p>
			</div>
		</div>
	);
};

export default NumbersItem;
