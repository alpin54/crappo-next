// -- core
import { useState } from "react";
import { motion } from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "@atoms/Button";
import FormControl from "@atoms/FormControl";

const Subscribe = (props) => {
	const animate = {
		initial: {
			y: "20%",
			opacity: 0,
		},
		whileInView: {
			y: 0,
			opacity: 1,
		},
		transition: {
			type: "spring",
			duration: 1.5,
		},
		viewport: { once: true },
	};

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
				<motion.div className={style.box} {...animate}>
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
				</motion.div>
			</div>
		</section>
	);
};

export default Subscribe;
