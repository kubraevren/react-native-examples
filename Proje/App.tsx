
import { Text } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Navigation } from './Navigation';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
}


export default App;
