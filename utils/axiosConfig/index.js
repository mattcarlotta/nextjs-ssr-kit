import get from "lodash/get";
import axios from "axios";

// const { baseURL } = process.env;

export const app = axios.create({
	baseURL: "http://localhost:5000/api",
});

app.interceptors.response.use(
	response => response,
	error => {
		const err = get(error, ["response", "data", "err"]);

		return Promise.reject(err || error.message);
	},
);

export default app;
