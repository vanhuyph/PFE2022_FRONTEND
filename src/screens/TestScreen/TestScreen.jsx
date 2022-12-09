import * as React from 'react';
import { Button, View } from 'react-native';

const TestScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('TestScreen2')}
          title="Go to TestScreen2"
        />
      </View>
    );
  }

export default TestScreen