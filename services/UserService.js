import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/users/api";

const getAllUser = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};

const getUserBydID = (id) => {
    const request = axios.get(baseUrl + `/${id}`);
    return request.then((response) => response.data);
};

const addUser = (newObject) => {
    const request = axios.post(baseUrl, newObject);
    return request.then((response) => response.data);
};

const updateUser = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then((response) => response.data);
};

const deleteUser = (id) => {
    const request = axios.delete(baseUrl + `/${id}`);
    return request.then((response) => response.data);
};

export default {
    getAllUser,
    getUserBydID,
    addUser,
    updateUser,
    deleteUser
  };