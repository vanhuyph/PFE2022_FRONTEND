import { useContext, useEffect, useState } from 'react';
import { useWindowDimensions, StatusBar, ActivityIndicator } from 'react-native';
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

export default function ProfileTabView({ navigation, route }) {
  const layout = useWindowDimensions();
  const bg = useColorModeValue('white', '#242526');
  const textColor = useColorModeValue('black', 'white');
  const userID = route.params.userID;
  const { userToken } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [likedPostsList, setLikedPostsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    UserService.getUserBydID(userID, userToken)
      .then((response) => setUser(response))
      .catch((error) => console.log(error));

    PostService.getPostByUserID(userID, userToken)
      .then((response) => setPosts(response))
      .catch((error) => console.log(error));

    LikeService.getLikedListByUserID(userID, userToken)
      .then((response) => setLikedPostsList(response))
      .catch((error) => console.log(error));
  }, []);


  const FirstRoute = () => {
    console.log(posts);
    return (
      <>
        {posts.length > 0 ? (
          <ScrollView>
            {posts.map((post) => (
              <PostComponent
                key={post.id}
                post={post}
                navigation={navigation}
              ></PostComponent>
            ))}
          </ScrollView>
        ) : (
          <Text>You didn't post yet...</Text>
        )}
      </>
    );
  };

  const SecondRoute = () => {
    return (
      <>
        {likedPostsList.length > 0 ? (
          <ScrollView>
            {likedPostsList.map((likedPost) => (
              <PostComponent
                key={likedPost.id}
                post={likedPost}
                navigation={navigation}
              ></PostComponent>
            ))}
          </ScrollView>
        ) : (
          <Center p={7}>You didn't like a post yet...</Center>
        )}
      </>
    );
  };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Posts' },
    { key: 'second', title: 'Likes' },
  ]);

  return (
    <>
      <NavBar navigation={navigation} title="Profile" />
      {user?<ProfileCard user={user.username}/> : null}
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
