import { NavigationContainer } from "@react-navigation/native"
import { PropsWithChildren } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "./screens/home";
import { Profile } from "./screens/profile";
import { Listeleme } from "./screens/listeleme"

const Stack = createNativeStackNavigator();

export const Navigation = ({ children }: PropsWithChildren) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="profile" component={Profile} />
                <Stack.Screen name="listeleme" component={Listeleme} />
            </Stack.Navigator>
            {children}
        </NavigationContainer>
    )
}



// type NavigationProps=PropsWithChildren;

// export const Navigation=({children}:NavigationProps)=>{