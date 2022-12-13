import axios from "axios";
import { BASE_URL } from '@env'
const baseUrl = `${BASE_URL}/likes/`;

const getLikedListByUserID = (userID, userToken) => {
    const request = axios.get(baseUrl + `liked_list/${userID}`, {
        headers: {
            'Authorization': 'Token ' + userToken,
            'Content-Type': 'application/json',
        }
    });
    return request.then((response) => response.data);
};

export default {
    getLikedListByUserID
};