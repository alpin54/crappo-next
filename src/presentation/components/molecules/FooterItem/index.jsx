"use client";

// -- core
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

// -- style
import style from "./style.module.scss";

// -- hooks
import useDeviceSize from "@hooks/useDeviceSize";

const FooterItem = (props) => {
	const [width] = useDeviceSize();

	const [isActive, setIsActive] = useState(false);

	const [height, setHeight] = useState(0);
	const accRef = useRef(null);
	let showClass = "";
	let styleActive = {};

	// use  effect
	useEffect(() => {
		setHeight(accRef.current.offsetHeight);
	}, []);
	if (width < 767.98) {
		showClass = isActive ? "show" : "";
		styleActive = isActive ? { paddingBottom: height } : {};
	}

	return (
		<div
			className={`${style.column} ${showClass}`}
			onClick={() => setIsActive(!isActive)}
			style={styleActive}
		>
			<h3 className={style.title}>{props.title}</h3>
			<ul className={style.list} ref={accRef}>
				{props.list.map((val, idx) => {
					return (
						<li className={style.item} key={`fi-${idx}`}>
							<Link className={style.link} href={val.to}>
								{val.text}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default FooterItem;
