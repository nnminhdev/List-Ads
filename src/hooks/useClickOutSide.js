import { useEffect } from "react";
const listClassOptions = ["style_input__option__", "style_input__custom__content", "row_options"];
const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
		const listener = (event) => {
			const valueElement = event.target.getAttribute("class");
			if (
				!ref.current ||
				ref.current.contains(event.target) ||
				valueElement.indexOf(listClassOptions[0]) >= 0 ||
				valueElement.indexOf(listClassOptions[1]) >= 0 ||
				valueElement.indexOf(listClassOptions[2]) >= 0
			) {
				return;
			}
			handler(event);
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
};

export default useOnClickOutside;
