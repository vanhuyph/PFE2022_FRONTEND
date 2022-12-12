import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from '@env'

const baseUrl = `${BASE_URL}/users/`;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (email, password) => {
        console.log(email);
        console.log(password);
        setIsLoading(true);
        axios.post(baseUrl + 'login/', {
            email, password
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(res.data.tokens);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', res.data.tokens);
        }).catch(e => {
            console.log(e);
        })
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');
            userInfo = JSON.parse(userInfo);
            if (userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(`${error}`);
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (<AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
        {children}
    </AuthContext.Provider>)
}