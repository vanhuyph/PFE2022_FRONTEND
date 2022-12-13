import * as React from 'react';
import { Button, View } from 'react-native';

const TestScreen = ({ navigation, route }) => {
  const {test} = route.params
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title={test}
        />
      </View>
    );
  }

export default TestScreen