import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000/user',
});

/**
 * Getting the user info from API
 * @param {string} id User id
 * @returns {object} Response
 */
export const UserInfos = async (id) => {
	try {
		const response = await instance.get(`/${id}`);
		return response.data;
	} catch (e) {
 	}
};


/**
 * Getting average sessions from API
 * @param {string} id User id
 * @returns {object} Response
 */
 export const UserAverageSessions = async (id) => {
	try {
		const response = await instance.get(`/${id}/average-sessions`);
		return response.data;
	} catch (e) {
 	}
};

/**
 * Getting performance from api
 * @param {string} id User id
 * @returns {object} Response
 */
export const UserPerformance = async (id) => {
	try {
		const response = await instance.get(`/${id}/performance`);
		return response.data;
	} catch (e) {
 	}
};

/**
 * Getting activity from API
 * @param {string} id User id
 * @returns {object} Response
 */
export const UserActivity = async (id) => {
 	try {
		const response = await instance.get(`/${id}/activity`);
		return response.data;
	} catch (e) {
 	}
};

