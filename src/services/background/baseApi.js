const apiVersion = "/v1";
const host = "https://exmaple.com";

const endpoints = {
	EXAMPLE_ENDPOINT: "/example",
};

const getEndPoint = (endpoint) => {
	return host + apiVersion + endpoint;
};

const getHeaders = async () => {
	return {
		"content-type": "application/json",
	};
};

export const __post = async (url, body = {}, params = {}) => {
	return await fetch(url + "?" + new URLSearchParams(params), {
		method: "POST",
		headers: await getHeaders(),
		body: JSON.stringify(body),
	});
};

export const __get = async (url, params = {}) => {
	const response = await fetch(host + url + "?" + new URLSearchParams(params), {
		method: "GET",
		headers: await getHeaders(),
	});
	if (response.ok) return response.json();
};

export const apiExample = async () => {
	return await __get(getEndPoint(endpoints.EXAMPLE_ENDPOINT));
};
