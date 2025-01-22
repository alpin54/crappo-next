// -- style
import style from "./style.module.scss";

const FormControl = ({
	variant = "input",
	color = "black",
	list = [],
	...rest
}) => {
	if (variant === "select") {
		return (
			<select className={`${style.select} ${color}`} {...rest}>
				{list.map((val, idx) => (
					<option value={val.value} key={`op-${idx}`}>
						{val.unit}
					</option>
				))}
			</select>
		);
	}

	return <input className={`${style.input} ${color}`} {...rest} />;
};

export default FormControl;
