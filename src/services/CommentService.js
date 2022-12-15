import axios from "axios";
import { BASE_URL } from '@env'
const baseUrl = `${BASE_URL}/posts/`;

const addComment = (userToken, newObject, postID) => {
    const request = axios.post(baseUrl + `comments/${postID}`, newObject, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const deleteComment = (userToken, newObject) => {
    const request = axios.delete(baseUrl + 'delete/', newObject, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const getAllCommentsFromPostID = (userToken, userID, postID) => {
    const request = axios.get(baseUrl + `comments?user=${userID}&post=${postID}`, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

export default {
    addComment,
    deleteComment,
    getAllCommentsFromPostID
};