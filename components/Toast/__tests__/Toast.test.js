import {
	FaInfo,
	FaCheck,
	FaTimes,
	FaExclamationTriangle,
	FaBug,
} from "react-icons/fa";
import { displayIcon } from "../index";

describe("Toast Message", () => {
	it("renders a success icon message", () => {
		const message = displayIcon("success");

		expect(message).toEqual(<FaCheck />);
	});

	it("renders a info icon message", () => {
		const message = displayIcon("info");

		expect(message).toEqual(<FaInfo />);
	});

	it("renders a error icon message", () => {
		const message = displayIcon("error");

		expect(message).toEqual(<FaTimes />);
	});

	it("renders a warning icon message", () => {
		const message = displayIcon("warning");

		expect(message).toEqual(<FaExclamationTriangle />);
	});

	it("renders a default bug icon message", () => {
		const message = displayIcon("");

		expect(message).toEqual(<FaBug />);
	});
});
