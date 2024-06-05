/** @format */

import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_API_URL,
	headers: {
		Referer:
			"https://bigspy.com/iframe/adspy/facebook/?app_type=3&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsYW4iOiJlbiIsInZlciI6ImJzIiwidGltZXN0YW1wIjoxNzE3NjA3OTg1LCJleHBpcmUiOjE3MTc4NjcxODUsInVzZXJfaWQiOiJRbFJzVEY5V2FRPT0iLCJhcHBuYW1lIjoiQmlnU3B5IiwidXNlcl9uYW1lIjoicWtudyBiYSIsInN1YnNjcmlwdGlvbiI6eyJjb2RlIjoiYmlnc3B5X21vbnRobHlfOTlfdjIiLCJhZHNfcGVybWlzc2lvbiI6eyJzZWFyY2giOjEsImV4Y2x1ZGVfc2VhcmNoIjoxLCJmaWx0ZXIiOjEsInBhZ2VfbGltaXQiOjAsInF1ZXJ5X251bSI6MzAwMCwiZG93bmxvYWRfbnVtIjoyNTB9LCJuZXR3b3JrcyI6eyJmYWNlYm9vayI6MSwiaW5zdGFncmFtIjoxLCJ0d2l0dGVyIjoxLCJhZG1vYiI6MCwicGludGVyZXN0IjoxLCJ5YWhvbyI6MSwieW91dHViZSI6MCwidGlrdG9rIjowLCJ1bml0eSI6MH0sInRyYWNrX3Blcm1pc3Npb24iOnsiZmVhdHVyZV9hZHMiOjEsInBlb3BsZV9hZHMiOjEsIm15X3RyYWNrIjoxLCJ0cmFja19udW0iOjI1MCwicGFnZV9hbmFseXNpcyI6MSwicGFnZV90cmFja19udW0iOjIwfSwibW9kdWxlX3Blcm1pc3Npb24iOnsicGFnZV9hbmFseXNpcyI6MSwiZmVhdHVyZV9hZHMiOjIsInBsYXlhYmxlIjowLCJhZHNweSI6MSwibGFuZGluZ19wYWdlIjoxfSwidGVhbV9pbmZvIjp7ImlkIjowLCJuZXdfdGVhbV9wb3B1cCI6MCwidGVhbV9yZXF1ZXN0IjowfSwiaW5kdXN0cnlfaW5mbyI6eyJ0b3RhbF9pbmR1c3RyeV9jb3VudCI6MywicmVtYWluX2luZHVzdHJ5X2NvdW50IjozLCJwZXJtaXNzaW9uX2FwcF90eXBlIjpbMSwyLDNdLCJsYXN0X2FwcF90eXBlIjozfSwidXNlcl9zdGF0dXMiOjMsImlzX2FkbWluIjowfSwiY29tcGFueV9pZCI6MCwiZW1haWwiOiJub2Jpbm9iaW5uMDI0QGdtYWlsLmNvbSJ9._rQnsmGVaG9e4GupRmoLkyn95cflYsga3H7Hg8R1QUQ",
	},
	timeout: 5000,
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
