import { useState, useEffect } from "react";

function useScroll() {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		function handleScroll() {
			setScrollPosition(window.pageYOffset);
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return scrollPosition;
}
export default useScroll;
