import axios from "axios";
import { getEncrypted } from "../../pages/Extension_product/constants";

const baseURL = process.env.REACT_APP_API_URL;
const tokenURL = process.env.REACT_APP_TOKEN_URL;
const dropshipURL = process.env.REACT_APP_DROPSHIP_URL;

console.log({ baseURL });
console.log({ tokenURL });
const instance = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-Type": "application/json",
		"cache-control": "no-cache, no-store, must-revalidate",
		priority: "u=1, i",
		accept: "application/json",
		"accept-language": "en,vi;q=0.9,en-GB;q=0.8,en-US;q=0.7",
	},
	referrer: "https://app.dropship.io/",
	referrerPolicy: "strict-origin-when-cross-origin",
	mode: "cors",
	credentials: "include",
});
// const tokenURL = "https://api-dropship.onrender.com/account/access-token";
const getToken = async () => {
	let token = "";
	await axios.get(tokenURL).then((res) => {
		const data = res?.data?.data;
		token = data.accessToken;
	});
	return token;
};
export const getReq = async (endpoint, payload, callback = () => {}, errors = () => {}) => {
	// const accessToken = await getToken()
	console.log({ payload });
	const url = dropshipURL + endpoint;
	// const encryptedCode = getEncrypted(payload);
	// const data = {encrypted: encryptedCode};
	const data = {
		url: url,
		method: "POST",
		payload: { ...payload },
		is_encode: true,
	};
	return instance.post(baseURL, data);
	// .then((response) => {
	//   console.log({response});
	//   callback(response.data);
	// })
	// .catch((error) => {
	//   errors(error);
	//   // console.error("Error fetching data:", error);
	// });
};
export const getChartReq = async (endpoint, callback = () => {}, errors = () => {}) => {
	// const accessToken = await getToken()

	const url = dropshipURL + endpoint;
	const data = {
		url: url,
		method: "GET",
		is_encode: true,
	};
	instance
		.post(baseURL, data)
		.then((response) => {
			console.log({ response });
			callback(response.data);
		})
		.catch((error) => {
			errors(error);
			// console.error("Error fetching data:", error);
		});
};
