import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/Details/HomeScreen';
import HomeDetailSrceen from './src/Details/HomeDetailScreen';
import HotelsScreen from './src/Details/HotelsScreen';
import HotelsDetailScreen from './src/Details/HotelsDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: '返回',
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="中南部三日遊" component={HomeScreen} />
      <Stack.Screen name="HomeDetail" component={HomeDetailSrceen} options={{ title: 'Travel Detail' }} />
    </Stack.Navigator>
  )

}

function MyHotelsStack() {
  return (
    <Stack.Navigator
      initialRouteName='Hotels'
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: '返回2',
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="Hotels" component={HotelsScreen} />
      <Stack.Screen name="HotelDetail" component={HotelsDetailScreen} options={{ title: 'Hotel Detail' }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='中南部三日遊'
      screenOptions={({route})=> ({
        tabBarIcon:({focused,color, size}) => {
          let iconName;
            if (route.name === 'Journey') {
              iconName = focused
                ? 'car'
                : 'car-outline';
            } else if (route.name === 'Hotels') {
              iconName = focused ? 'home' : 'home-outline';
            }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
      })}>
        <Tab.Screen name="Journey" component={MyHomeStack} />
        <Tab.Screen name="Hotels" component={MyHotelsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
