// -- core
import { useState, useEffect } from "react";
import Slider from "react-slick";

// -- style carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// -- style
import style from "./style.module.scss";

// -- molecule
import HeroBannerItem from "@molecules/HeroBannerItem";

const HeroBanner = (props) => {
	const [showSingle, setShowSingle] = useState(false);

	useEffect(() => {
		let timer = setTimeout(() => setShowSingle(true), 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	const settings = {
		dots: true,
		arrows: false,
		fade: true,
		infinite: false,
		autoplay: true,
		pauseOnHover: true,
		speed: 1000,
		autoplaySpeed: 8000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	if (!props.ready) {
		return (
			<section className="placeholder">
				<div className="container">
					<div className="placeholder-inner">
						<div className="placeholder-img">
							<div className="placeholder-line"></div>
						</div>
						<div className="placeholder-text">
							<div className="placeholder-badge">
								<div className="placeholder-line"></div>
							</div>
							<div className="placeholder-title">
								<div className="placeholder-line"></div>
								<div className="placeholder-line"></div>
								<div className="placeholder-line"></div>
							</div>
							<div className="placeholder-desc">
								<div className="placeholder-line"></div>
							</div>
							<div className="placeholder-btn">
								<div className="placeholder-line"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	// if (props.error !== null) {
	// 	return <h2>{props.error.message}</h2>;
	// }

	let classNameSingle = style.banner;
	if (props.ready && props.error !== null) {
		if (props.data.length === 1) {
			if (showSingle) {
				classNameSingle += " banner-single";
			}
		}
	}

	if (props.data.length === 1) {
		return (
			<section className={classNameSingle} id="hero-banner">
				{props.data.map((val, idx) => {
					return (
						<div className={style.item} key={`hb-${idx}`}>
							<div className={style.middleAlign}>
								<div className="container">
									<HeroBannerItem {...val} />
								</div>
							</div>
						</div>
					);
				})}
			</section>
		);
	}

	return (
		<section className={classNameSingle} id="hero-banner">
			<Slider {...settings}>
				{props.data.map((val, idx) => {
					return (
						<div className={style.item} key={`hb-${idx}`}>
							<div className={style.middleAlign}>
								<div className="container">
									<HeroBannerItem data={val} id={idx} />
								</div>
							</div>
						</div>
					);
				})}
			</Slider>
		</section>
	);
};

export default HeroBanner;
