// -- core
import Link from "next/link";

// -- style
import style from "./style.module.scss";

// -- molecules
import FooterItem from "@molecules/FooterItem";
import Image from "next/image";

const Footer = (props) => {
	const { ready, data, error } = props;

	return (
		<footer className={style.footer}>
			<div className="container">
				<div className={style.top}>
					{/* Logo */}
					<div className={style.logo}>
						<Link
							href={data?.brand.to !== undefined ? data?.brand.to : "/"}
							className={style.logoLink}
						>
							<Image
								src={data?.brand.logo ? data?.brand.logo : "/"}
								alt={data?.brand.name ? data?.brand.name : "logo"}
								className={style.logoImg}
								width={134}
								height={40}
							/>
						</Link>
					</div>
					{/* Menu */}
					<div className={style.menu}>
						{data?.menu.map((val, idx) => {
							return <FooterItem data={val} key={`fc-${idx}`} />;
						})}
						<div className={style.payment}>
							<h2 className={style.paymentTitle}>{data?.payments.title}</h2>
							<ul className={style.paymentList}>
								{data?.payments.list.map((val, idx) => (
									<li className={style.paymentItem} key={`fp-${idx}`}>
										<a
											href={val.to}
											className={style.paymentLink}
											target="blank"
										>
											<Image
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
					<p className={style.copyright}>{data?.copyright}</p>
					<ul className={style.sosmed}>
						{data?.social_media.map((val, idx) => (
							<li className={style.sosmedItem} key={`fs-${idx}`}>
								<Link
									href={val.to}
									className={`${style.sosmedLink} ${val.name.toLowerCase()}`}
								>
									<Image
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
