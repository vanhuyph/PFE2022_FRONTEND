import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import PostComponent from '../PostComponent/PostComponent';

const MainScreen = () => {
    return (
        <ScrollView>
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
        </ScrollView>
    )
}

export default MainScreen