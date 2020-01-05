import {
	FaInfo,
	FaCheck,
	FaExclamationCircle,
	FaExclamationTriangle,
	FaBug,
} from "react-icons/fa";
import { displayIcon } from "../index";

const style = { marginTop: 9 };

describe("Toast Message", () => {
	it("renders a success icon message", () => {
		const message = displayIcon("success");

		expect(message).toEqual(<FaCheck style={style} />);
	});

	it("renders a info icon message", () => {
		const message = displayIcon("info");

		expect(message).toEqual(<FaInfo />);
	});

	it("renders an error icon message", () => {
		const message = displayIcon("error");

		expect(message).toEqual(<FaExclamationCircle />);
	});

	it("renders a warning icon message", () => {
		const message = displayIcon("warning");

		expect(message).toEqual(<FaExclamationTriangle style={style} />);
	});

	it("renders a default bug icon message", () => {
		const message = displayIcon("");

		expect(message).toEqual(<FaBug style={style} />);
	});
});
