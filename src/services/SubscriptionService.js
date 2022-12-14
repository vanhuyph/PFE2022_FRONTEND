import axios from "axios";
//import { BASE_URL } from '@env'
import { BASE_URL } from '../config'
const baseUrl = `${BASE_URL}/subscriptions`;

const createSubscription = (newObject, userToken) => {
    const request = axios.post(baseUrl, newObject, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const deleteSubscription = (newObject, userToken) => {
    const request = axios.delete(baseUrl + '?user=' + newObject.user + '&subscription=' + newObject.subscription, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

const existSubscription = (newObject, userToken) => {
    const request = axios.get(baseUrl + 'exist/' + newObject.user + "/" + newObject.subscription, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

export default {
    createSubscription,
    deleteSubscription,
    existSubscription
};