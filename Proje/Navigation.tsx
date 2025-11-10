import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Screens/Home';
import { TodoList } from './Screens/TodoList';
import { Home as HomeIcon, ListChecks } from 'lucide-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { User } from 'lucide-react-native';
import React from 'react';
import { Login } from './Screens/Login';
import { NotebookPen } from 'lucide-react-native';
import { Signup } from './Screens/Signup';
import { useSelector } from 'react-redux';
import { RootState } from './store'; // Update this import path according to your store file location

const Tab = createBottomTabNavigator();


// Home Sekmesi
const HomeSayfasi = (
    <Tab.Screen
        key="Home"
        name="Home"
        component={Home}
        options={{
            tabBarIcon: ({ color, size }) => (<HomeIcon color={color} size={size} />),
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'grey',
            headerShown: false
        }}
    />
);

const TodoListSayfasi = (
    <Tab.Screen
        key="TodoList"
        name="TodoList"
        component={TodoList}
        options={{
            tabBarIcon: ({ color, size }) => (<ListChecks color={color} size={size} />),
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'grey',
            headerShown: false
        }}
    />
);


const LoginSayfasi = (
    <Tab.Screen
        key="Login"
        name="Login"
        component={Login}
        options={{
            tabBarIcon: ({ color, size }) => (<User color={color} size={size} />),
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'grey',
            headerShown: false
        }}
    />
);

// Signup Sekmesi
const SignupSayfasi = (
    <Tab.Screen
        key="Signup"
        name="Signup"
        component={Signup}
        options={{
            tabBarIcon: ({ color, size }) => (<NotebookPen color={color} size={size} />),
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'grey',
            headerShown: false
        }}
    />
);


export const Navigation = () => {
    const isAuthenticated = useSelector((state: RootState) => state.AuthSlice.isAuthenticated);
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={isAuthenticated ? "Home" : "Login"}
            >
                {isAuthenticated ? (
                    <>
                        {HomeSayfasi}
                        {TodoListSayfasi}
                        {LoginSayfasi}
                        {SignupSayfasi}
                    </>
                ) : (
                    <>
                        {LoginSayfasi}
                        {SignupSayfasi}
                    </>
                )}
            </Tab.Navigator>
        </NavigationContainer>
    );
}