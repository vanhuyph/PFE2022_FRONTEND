import axios from "axios";
import { BASE_URL } from '@env'
const baseUrl = `${BASE_URL}/posts/`;

const addComment = (userToken, newObject) => {
    const request = axios.post(baseUrl+'create/', newObject, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const deleteComment = (userToken, newObject) => {
    const request = axios.delete(baseUrl+'delete/', newObject, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

export default {
    addComment,
    deleteComment
};