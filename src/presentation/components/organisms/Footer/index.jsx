// -- core
import Link from "next/link";

// -- style
import style from "./style.module.scss";

// -- molecules
import FooterItem from "@molecules/FooterItem";
import Image from "next/image";

const Footer = (props) => {
	return (
		<footer className={style.footer}>
			<div className="container">
				<div className={style.top}>
					{/* Logo */}
					<div className={style.logo}>
						<Link
							href={
								props.data?.brand.to !== undefined ? props.data?.brand.to : "/"
							}
							className={style.logoLink}
						>
							<img
								src={props.data?.brand.logo ? props.data?.brand.logo : "/"}
								alt={props.data?.brand.name ? props.data?.brand.name : "logo"}
								className={style.logoImg}
								width={134}
								height={40}
							/>
						</Link>
					</div>
					{/* Menu */}
					<div className={style.menu}>
						{props.data?.menu.map((val, idx) => {
							return <FooterItem {...val} key={`fc-${idx}`} />;
						})}
						<div className={style.payment}>
							<h2 className={style.paymentTitle}>
								{props.data?.payments.title}
							</h2>
							<ul className={style.paymentList}>
								{props.data?.payments.list.map((val, idx) => (
									<li className={style.paymentItem} key={`fp-${idx}`}>
										<a
											href={val.to}
											className={style.paymentLink}
											target="blank"
										>
											<img
												className={style.paymentIcon}
												src={val.icon}
												alt={val.name}
												width={40}
												height={40}
											/>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className={style.bottom}>
					<p className={style.copyright}>{props.data?.copyright}</p>
					<ul className={style.sosmed}>
						{props.data?.social_media.map((val, idx) => (
							<li className={style.sosmedItem} key={`fs-${idx}`}>
								<Link
									href={val.to}
									className={`${style.sosmedLink} ${val.name.toLowerCase()}`}
								>
									<img
										className={style.sosmedIcon}
										src={val.icon}
										alt={val.name}
										width={24}
										height={24}
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
