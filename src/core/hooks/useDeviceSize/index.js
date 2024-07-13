// -- core
import { useEffect, useState } from "react";

const useDeviceSize = () => {
	let _rtime;
	let _timeout = false;
	let _delta = 200;

	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	// eslint-disable-next-line
	const [holdTransition, setholdTransition] = useState(false);

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
		setholdTransition(handleResize);
	};

	const handleResize = () => {
		_rtime = new Date();
		if (_timeout === false) {
			_timeout = true;
			document.querySelector("body")?.classList.add("hold-transition");
			setTimeout(handleResizeEnd, _delta);
		}
	};

	const handleResizeEnd = () => {
		if (new Date() - _rtime < _delta) {
			setTimeout(handleResizeEnd, _delta);
		} else {
			_timeout = false;
			document.querySelector("body")?.classList.remove("hold-transition");
		}
	};

	useEffect(() => {
		// component is mounted and window is available
		handleWindowResize();
		window.addEventListener("resize", handleWindowResize);
		// unsubscribe from the event on component unmount
		return () => window.removeEventListener("resize", handleWindowResize);
		// eslint-disable-next-line
	}, []);

	return [width, height];
};

export default useDeviceSize;
