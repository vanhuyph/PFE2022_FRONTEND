import { useState, useCallback } from 'react';
import { RefreshControl, ScrollView, } from 'react-native';
import PostComponent from '../PostComponent/PostComponent';
import NavBar from '../../components/NavBar/NavBar';
import { useColorModeValue } from 'native-base';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const MainScreen = ({ navigation }) => {
  const [refresh, setRefreshing] = useState(false);


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(5000).then(() => setRefreshing(false));
  }, []);

  return (
    <>
      <NavBar navigation={navigation} title="Home" />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={onRefresh}
            progressBackgroundColor={useColorModeValue('white', '#242526')}
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
    </>
  );
};

export default MainScreen;
