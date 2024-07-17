// -- core
import Image from "next/image";

// -- style
import style from "./style.module.scss";

// -- atom
import Button from "@atoms/Button";

// asset image
import imageBg from "core/assets/img/bg/not-found-bg.png";

const NotFoundSection = () => {
	return (
		<section className={style.notfound}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.img}>
						<Image src={imageBg} width={600} height={400} alt="not found" />
					</div>
					<div className={style.text}>
						<h2 className={style.title}>Oops! Page is unavailable :(</h2>
						<p className={style.desc}>
							But don&apos;t be sad #ThereIsAlwaysAWay for you!
						</p>
						<Button variant="outline" href="/">
							<span data-title="Back to homepage">Back to homepage</span>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFoundSection;
