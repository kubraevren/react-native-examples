
import {
  SafeAreaView,

} from 'react-native-safe-area-context';
import { Navigation } from './Navigation';
import { faker } from '@faker-js/faker';

import { Button, FlatList, Image, View } from 'react-native';
interface Resource {
  url: string
  id: string
}

function App() {
  const images = Array<number>(20).fill(0).map<Resource>(() => ({
    id: faker.string.uuid(),
    url: faker.image.urlPicsumPhotos()
  } as Resource))

 

  return (
    <Navigation>
      <SafeAreaView>
       

        <FlatList
          data={images}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={{ uri: item.url }}
              style={{ width: 300, height: 300,margin:10 ,borderRadius:20}} />
          )}
        />


      </SafeAreaView>
    </Navigation>
  );
}



export default App;
