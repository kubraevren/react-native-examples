
import {
  SafeAreaView,

} from 'react-native-safe-area-context';
import { Navigation } from './Navigation';
import { faker } from '@faker-js/faker';

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

       


      </SafeAreaView>
    </Navigation>
  );
}



export default App;
