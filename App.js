import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Home from './src/pages/Home';
import Store from './src/Store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Store>
            <Home />
          </Store>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
