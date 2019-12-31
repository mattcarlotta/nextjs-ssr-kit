import get from "lodash/get";
import axios from "axios";
import getConfig from "next/config";

const { baseURL } = getConfig().publicRuntimeConfig;

export const app = axios.create({
	baseURL,
});

app.interceptors.response.use(
	response => response,
	error => {
		const err = get(error, ["response", "data", "err"]);

		return Promise.reject(err || error.message);
	},
);

export default app;
