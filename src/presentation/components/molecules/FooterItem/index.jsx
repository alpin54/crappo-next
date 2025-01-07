"use client";

// -- core
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

// -- style
import style from "./style.module.scss";

const FooterAccordion = ({ data, isActive, onToggle, isMobile }) => {
	const columnClass = classNames(style.column, {
		show: isActive && isMobile,
	});

	return (
		<div className={columnClass} onClick={isMobile ? onToggle : undefined}>
			<h3 className={style.title}>{data.title}</h3>

			{/* AnimatePresence is used to manage the transition when the list is added or removed */}
			<AnimatePresence initial={false}>
				{isActive && isMobile && (
					<motion.ul
						className={style.list}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.35 }}
					>
						{data.list.map((val, idx) => (
							<li className={style.item} key={`fi-${idx}`}>
								<Link
									className={style.link}
									href={
										val.text.toLowerCase() === "home"
											? "/"
											: `/${val.text.toLowerCase()}`
									}
								>
									{val.text}
								</Link>
							</li>
						))}
					</motion.ul>
				)}
				{!isMobile && (
					<ul className={style.list}>
						{data.list.map((val, idx) => (
							<li className={style.item} key={`fi-${idx}`}>
								<Link
									className={style.link}
									href={
										val.text.toLowerCase() === "home"
											? "/"
											: `/${val.text.toLowerCase()}`
									}
								>
									{val.text}
								</Link>
							</li>
						))}
					</ul>
				)}
			</AnimatePresence>
		</div>
	);
};

const FooterItem = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(null);
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	const toggleAccordion = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the current active index
	};

	return (
		data?.length > 0 &&
		data.map((value, index) => (
			<FooterAccordion
				key={index}
				data={value}
				isActive={activeIndex === index}
				onToggle={() => toggleAccordion(index)}
				isMobile={isMobile}
			/>
		))
	);
};

export default FooterItem;
