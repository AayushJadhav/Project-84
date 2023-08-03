import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import FeedScreen from '../screens/Feed';
import CreatePostScreen from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            labeled={false}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === "Create Story") {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                }
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey'
            }}
        >
            <Tab.Screen name="Feed" component={FeedScreen}></Tab.Screen>
            <Tab.Screen name="Create Story" component={CreatePostScreen}></Tab.Screen>
        </Tab.Navigator >
    )
}