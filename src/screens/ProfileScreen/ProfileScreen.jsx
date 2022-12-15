import { useContext, useEffect, useState, useCallback } from 'react';
import {
  useWindowDimensions,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { ScrollView, Text, Center } from 'native-base';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PostComponent from '../PostComponent/PostComponent';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import NavBar from '../../components/NavBar/NavBar';
import { useColorModeValue } from 'native-base';
import UserService from '../../services/UserService';
import { AuthContext } from '../../contexts/AuthContext';
import PostService from '../../services/PostService';
import LikeService from '../../services/LikeService';
import RetweetService from '../../services/RetweetService';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function ProfileTabView({ navigation, route }) {
  const layout = useWindowDimensions();
  const bg = useColorModeValue('white', '#242526');
  const textColor = useColorModeValue('black', 'white');
  const { userToken, userInfo } = useContext(AuthContext);
  let followed = false
  let userID;
  if (route.params !== undefined) {
    userID = route.params.user.user.id;
    followed = route.params.user.followed
  } else {
    userID = userInfo.id;
  }
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [retweetsList, setRetweetsList] = useState([]);
  const [likedPostsList, setLikedPostsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefreshing] = useState(false);
  const colorRefresh = useColorModeValue('black', 'white');

  useEffect(() => {
    UserService.getUserBydID(userID, userToken)
      .then((response) => {
        setUser(response)
      })
      .catch((error) => console.log(error));

    PostService.getPostByUserID(userID, userToken)
      .then((response) => {
        setPosts(response)
      })
      .catch((error) => console.log(error));

    LikeService.getLikedListByUserID(userID, userToken)
      .then((response) => {
        setLikedPostsList(response)
      })
      .catch((error) => console.log(error));

    RetweetService.getAllRetweet(userID, userToken)
      .then((response) => {
        setRetweetsList(response)
      })
      .catch((error) => console.log(error));


  }, [refresh]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log('refresh');
    wait(3000).then(() => setRefreshing(false));
  }, []);

  const FirstRoute = () => {
    return (
      <ScrollView
        bg={bg}
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
        {posts.length > 0 ? (

          posts.map((post) => (
            <PostComponent
              key={post.post.id}
              post={post}
              navigation={navigation}
            ></PostComponent>
          ))

        ) : (
          <Center p={7}>You didn't post yet...</Center>
        )}
      </ScrollView>
    );
  };

  const SecondRoute = () => {
    return (
      <ScrollView
        bg={bg}
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
        {likedPostsList.length > 0 ? (

          likedPostsList.map((likedPost) => (
            <PostComponent
              key={likedPost.post.id}
              post={likedPost}
              navigation={navigation}
            ></PostComponent>
          ))


        ) : (
          <Center p={7}>You didn't like a post yet...</Center>
        )}
      </ScrollView>
    );
  };

  const ThirdRoute = () => {
    return (
      <ScrollView
        bg={bg}
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
        {retweetsList.length > 0 ?

          retweetsList.map((rt) => (
            <PostComponent
              key={rt.post.id}
              post={rt}
              navigation={navigation}
            ></PostComponent>
          )

          ) : (
            <Center p={7}>You didn't repost yet...</Center>
          )}
      </ScrollView>
    );
  };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Posts' },
    { key: 'second', title: 'Likes' },
    { key: 'third', title: 'Reposts' },
  ]);

  return (
    <>
      <NavBar navigation={navigation} title="Profile" user={userID} />
      {user ? <ProfileCard user={user} followed={followed} /> : <ActivityIndicator size="large" />}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{
          backgroundColor: bg,
        }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            renderLabel={({ route, color }) => <Text>{route.title}</Text>}
            style={{ backgroundColor: bg }}
            indicatorStyle={{ backgroundColor: '#852ce6' }}
          />
        )}
      />
    </>
  );
}
