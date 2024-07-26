/** @format */

import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_API_URL,
	timeout: 15000,
});

export const get = async (endpoint, data) => {
	try {
		let urlGet = endpoint + (Object.keys(data).length ? "?" + new URLSearchParams(data) : "");
		const res = await instance.get(urlGet);
		return res;
	} catch (err) {
		return err;
	}
};

export const post = async (endpoint, body, customInfo) => {
	try {
		const finalParam = customInfo || {};
		const res = await instance.post(endpoint, body, {
			...finalParam,
		});
		return res;
	} catch (err) {
		return err;
	}
};
