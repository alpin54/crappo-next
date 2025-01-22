// -- style
import style from "./style.module.scss";

const Placeholder = ({ circle = false, width, height }) => {
	return (
		<span
			className={`${style.placeholder} ${circle ? style.circle : ""}`}
			style={{
				"--width": width ? `${width}px` : undefined,
				"--height": height ? `${height}px` : undefined,
			}}
		></span>
	);
};

export default Placeholder;
