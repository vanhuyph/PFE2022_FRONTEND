import { useState } from 'react';
import { useWindowDimensions, StatusBar, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PostComponent from '../PostComponent/PostComponent';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import NavBar from '../../components/NavBar/NavBar';

const FirstRoute = () => <PostComponent />;

const SecondRoute = () => <PostComponent />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function ProfileTabView({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Posts' },
    { key: 'second', title: 'Likes' },
  ]);

  return (
    <>
      <NavBar navigation={navigation} title="Profile" />
      <ProfileCard />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{
          marginTop: StatusBar.currentHeight,
        }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            renderLabel={({ route, color }) => (
              <Text style={{ color: 'white', margin: 8 }}>{route.title}</Text>
            )}
            style={{ backgroundColor: 'purple' }}
            indicatorStyle={{ backgroundColor: 'blue' }}
          />
        )}
      />
    </>
  );
}
