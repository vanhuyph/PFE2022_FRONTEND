import { useState, useCallback, useEffect, useContext } from 'react';
import { RefreshControl, ScrollView, } from 'react-native';
import PostComponent from '../PostComponent/PostComponent';
import NavBar from '../../components/NavBar/NavBar';
import { useColorModeValue } from 'native-base';
import PostService from '../../services/PostService';
import { AuthContext } from '../../contexts/AuthContext';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const MainScreen = ({ navigation }) => {
  const [refresh, setRefreshing] = useState(false);
  const { userToken } = useContext(AuthContext);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    PostService.getAllPost(userToken)
      .then((response) => {
        //console.log(response[0]);
        return response
      })
      .then(data => {
        setPosts(data)
      })
      .catch((error) => console.log(error))
  }, [refresh])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log("refresh");
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
        {
          posts.map(post =><PostComponent key={post.id} user={post.user} postText={post.content} commentCount={post.comment_count} likeCount={post.like_count} retweetCount={post.retweet_count}/>)
        }
      </ScrollView>
    </>
  );
};

export default MainScreen;
