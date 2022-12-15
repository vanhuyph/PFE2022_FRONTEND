import axios from "axios";
import { BASE_URL } from '@env'
const baseUrl = `${BASE_URL}/users/`;

const getAllUser = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};

const getUserBydID = (id, userToken) => {
    const request = axios.get(baseUrl + `${id}`, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const registerUser = (newObject) => {
    const request = axios.post(baseUrl + 'signup/', newObject);
    return request.then((response) => response.data);
}

const loginUser = (newObject) => {
    const request = axios.post(baseUrl + 'login/', newObject);
    return request.then((response) => response.data);
}

const searchUser = (id, username, userToken) => {
    const request = axios.get(baseUrl + 'search?user=' + id + '&search=' + username, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
}

export default {
    getAllUser,
    getUserBydID,
    registerUser,
    loginUser,
    searchUser
};