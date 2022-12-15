import axios from "axios";
//import { BASE_URL } from '@env'
import { BASE_URL } from '../config'
const baseUrl = `${BASE_URL}/posts/`;

const getAllPost = (userToken) => {
    const request = axios.get(baseUrl, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const getPostByUserID = (id, userToken) => {
    const request = axios.get(baseUrl + `user/${id}`, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const addPost = (userToken, newObject) => {
    const request = axios.post(baseUrl, newObject, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const getAllFollowingPost = (userId, userToken) => {
    const request = axios.get(baseUrl + `subscription/${userId}`, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};


export default {
    getAllPost,
    getPostByUserID,
    addPost,
    getAllFollowingPost
};