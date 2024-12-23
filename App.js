import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Notifications } from './src';

const screens = [
  {
    name: 'Home',
    component: Home,
    screenOptions: {
      headerShown: false,
    },
  },
  {
    name: 'Notifications',
    component: Notifications,
  },
];

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      {screens?.map(({ name, screenOptions, component }) => (
        <Stack.Screen
          options={screenOptions}
          key={name}
          name={name}
          component={component}
        />
      ))}
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;

