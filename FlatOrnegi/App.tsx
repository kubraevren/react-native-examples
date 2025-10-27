
import { FlatList, Image, ScrollView, View } from 'react-native';
import {
  SafeAreaProvider,

} from 'react-native-safe-area-context';
import { StoryList } from './components/StoryList';
import { PostList } from './components/PostList';




function App() {
  return (
    <SafeAreaProvider>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginVertical: 10 }}>
          <StoryList />
        </View>

        <View style={{ marginTop: 20 }}>
          <PostList />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default App;
