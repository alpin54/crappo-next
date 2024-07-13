// -- core
import { useState } from "react";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";
import FormControl from "@atoms/FormControl";

const Subscribe = (props) => {
	const [email, setEmail] = useState("");
	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = () => {
		props.onSubmit(email);
	};

	return (
		<section className={style.start} id="subscribe">
			<div className="container">
				<div className={style.box}>
					<div className={style.text}>
						<h3 className={style.ttl}>Start mining now</h3>
						<p className={style.desc}>
							Join now with CRAPPO to get the latest news and start mining now
						</p>
					</div>
					<form className={style.form} autoComplete="off">
						<div className={style.row}>
							<FormControl
								color="white"
								type="text"
								name="subscribe"
								id="email"
								placeholder="Enter your email"
								required="required"
								onChange={handleChange}
							/>
						</div>
						<div className={style.row}>
							<Button type="button" variant="white" onClick={handleSubmit}>
								Subscribe
							</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
