// index.js veya App.js dosyasının en üstüne
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true); // Tüm sarı kutu uyarılarını gizler
import { StyleSheet, Text } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Karsilama } from './Screens/Karsilama';
import Navigate from './Navigate';
import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigate />
      </Provider>    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
