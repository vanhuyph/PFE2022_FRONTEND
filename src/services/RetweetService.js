import axios from "axios";
import { BASE_URL } from '@env'
const baseUrl = `${BASE_URL}/retweets`;

const addRetweet = (userToken, newObject) => {
    const request = axios.post(baseUrl, newObject, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const deleteRetweet = (userToken, newObject) => {
    const request = axios.delete(baseUrl + '?user=' + newObject.user + '&post=' + newObject.post, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const getAllRetweet = (userID, userToken) => {
    const request = axios.get(baseUrl + `/all/${userID}`, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const existRetweet = (newObject, userToken) => {
    const request = axios.get(baseUrl + '/exist?user=' + newObject.user + '&post=' + newObject.post, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

export default {
    addRetweet,
    deleteRetweet,
    getAllRetweet,
    existRetweet
};