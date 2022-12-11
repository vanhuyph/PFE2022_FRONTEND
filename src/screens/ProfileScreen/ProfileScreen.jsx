import { useState } from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';
import { Text } from 'native-base';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PostComponent from '../PostComponent/PostComponent';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import NavBar from '../../components/NavBar/NavBar';
import { useColorModeValue } from 'native-base';

const FirstRoute = () => <PostComponent />;

const SecondRoute = () => <PostComponent />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function ProfileTabView({ navigation }) {
  const layout = useWindowDimensions();
  const bg = useColorModeValue('white', '#242526')
  const textColor = useColorModeValue('black', 'white')

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
          backgroundColor: bg
        }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            renderLabel={({ route, color }) => (
              <Text>{route.title}</Text>
            )}
            style={{ backgroundColor: bg }}
            indicatorStyle={{ backgroundColor: '#852ce6' }}
          />
        )}
      />
    </>
  );
}
