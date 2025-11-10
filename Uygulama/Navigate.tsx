import { createStackNavigator } from '@react-navigation/stack';
import Giris from './Screens/Giris';
import Kayit from './Screens/Kayit';
import { Karsilama } from './Screens/Karsilama';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './Screens/Home';
import { ProductDetails } from './Screens/ProductDetails';

const Stack = createStackNavigator();

function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Karsilama" component={Karsilama}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="Giris" component={Giris}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="Kayit" component={Kayit}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="Home" component={Home}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="ProductDetails" component={ProductDetails}
                    options={{
                        headerShown: false,
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigate;

// ❗ RootStackParamList doğru tanımlanmış. Home.tsx'e bu tipi aktarıyoruz.
export type RootStackParamList = {
    Karsilama: undefined;
    Giris: undefined;
    Kayit: undefined;
    Home: undefined;

    // Parametre tipi 'path' ile aynı olmalı
    ProductDetails: {
        productId: number;
    };
}