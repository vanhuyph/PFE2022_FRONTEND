import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import UserService from "../services/UserService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (email, password) => {
        setIsLoading(true);
        let dataToSend = { email, password }
        console.log(dataToSend);
        UserService.loginUser(dataToSend).then((response) => {
            if (response.message.startsWith("Invalid")) {
                throw new Error('Invalid credentials')
            }
            let userInfo = response;
            setUserInfo(userInfo);
            setUserToken(userInfo.tokens);
            console.log('User token: ' + userInfo.tokens);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.tokens);
        }).catch((error) => {
            console.log(error);
            setIsLoading(false);
        })
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
            console.log("Token LoggedIn " +userToken);
            userInfo = JSON.parse(userInfo);
            if (userInfo) {
                console.log(userInfo);
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

    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken, userInfo }}>
            {children}
        </AuthContext.Provider>
    );
}