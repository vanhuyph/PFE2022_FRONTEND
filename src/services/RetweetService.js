import axios from "axios";
import { BASE_URL } from '@env'
const baseUrl = `${BASE_URL}/retweets/`;
console.log(baseUrl);

const addRetweet = (userToken, newObject) => {
    const request = axios.post(baseUrl+'create/', newObject, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const deleteRetweet = (userToken, newObject) => {
    const request = axios.delete(baseUrl+'delete/', newObject, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

export default {
    addRetweet,
    deleteRetweet
};