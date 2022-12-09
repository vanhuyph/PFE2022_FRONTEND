import { useState, useCallback } from 'react';
import {
  RefreshControl,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import PostComponent from '../PostComponent/PostComponent';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const MainScreen = () => {
  const [refresh, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(5000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={onRefresh}
        ></RefreshControl>
      }
    >
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
  );
};

export default MainScreen;
