import axios from "axios";
import { BASE_URL } from '@env'
const baseUrl = `${BASE_URL}/posts/`;

const getAllPost = (userToken) => {
    const request = axios.get(baseUrl, {
        headers: {
            "Access-Control-Allow-Origin" : "*",
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const getPostBydID = (id) => {
    const request = axios.get(baseUrl + `/${id}`, {
        headers: {
            "Access-Control-Allow-Origin" : "*",
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const addPost = (newObject) => {
    const request = axios.post(baseUrl, newObject, {
        headers: {
            "Access-Control-Allow-Origin" : "*",
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};


export default {
    getAllPost,
    getPostBydID,
    addPost,
};