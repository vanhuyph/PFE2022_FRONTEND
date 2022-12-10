import { useState } from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import PostComponent from '../PostComponent/PostComponent';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const FirstRoute = () => <PostComponent />;

const SecondRoute = () => <PostComponent />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function ProfileTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Posts' },
    { key: 'second', title: 'Likes' },
  ]);

  return (
    <>
      <ProfileCard />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{
          marginTop: StatusBar.currentHeight,
        }}
      />
    </>
  );
}
