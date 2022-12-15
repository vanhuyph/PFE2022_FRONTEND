import { useState, useCallback, useEffect, useContext } from 'react';
import { RefreshControl } from 'react-native';
import PostComponent from '../PostComponent/PostComponent';
import NavBar from '../../components/NavBar/NavBar';
import { useColorModeValue, ScrollView, Text, Center } from 'native-base';
import PostService from '../../services/PostService';
import { AuthContext } from '../../contexts/AuthContext';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const MainScreen = ({ navigation }) => {
  const [refresh, setRefreshing] = useState(false);
  const { userToken } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const bg = useColorModeValue('primary.50', 'primary.1000')
  const colorRefresh = useColorModeValue('black', 'white')
  useEffect(() => {
    PostService.getAllFollowingPost(userInfo.id, userToken)
      .then((response) => {
        return response;
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.log(error));
  }, [refresh]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(3000).then(() => setRefreshing(false));
  }, []);

  return (
    <>
      <NavBar navigation={navigation} title="Home" />
      <ScrollView bg={bg}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={onRefresh}
            progressBackgroundColor={useColorModeValue('white', '#242526')}
            colors={[colorRefresh]}
            tintColor={colorRefresh}
          ></RefreshControl>
        }
      >
        {posts.length > 0 ? posts.map((post) => (
          //<Center key={post.id} p={4}>Test</Center>
          <PostComponent key={post.post.id} post={post} navigation={navigation} />
      )) : <Center p={4}>Start following someone to fill your feed</Center>}
      </ScrollView>
    </>
  );
};

export default MainScreen;
