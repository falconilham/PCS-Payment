import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Notifications } from './src';
import IconFontAwesome from '@react-native-vector-icons/fontawesome';
import IconMaterialDesign from '@react-native-vector-icons/material-design-icons';
import IconIonicons from '@react-native-vector-icons/ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const EmptyComponent = () => null;

const screens = [
  {
    name: 'Home',
    component: Home,
    iconName: 'home',
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Attendance',
    component: EmptyComponent,
    iconName: 'calendar-check',
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Check Out',
    component: EmptyComponent,
    iconName: 'exit-outline',
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Form',
    component: EmptyComponent,
    iconName: 'document-text-outline',
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Settings',
    component: EmptyComponent,
    iconName: 'settings-outline',
  },
];



const TabBarIconFontAweSome = ({ iconName, color, size }) => <IconFontAwesome name={iconName} color={color} size={size} />;
const TabBarIconMaterialDesign = ({ iconName, color, size }) => <IconMaterialDesign name={iconName} color={color} size={size} />;
const TabBarIconIonicons = ({ iconName, color, size }) => <IconIonicons name={iconName} color={color} size={size} />;

const ConditionalTabBarIcon = ({ iconName, color, size, isCheckOut }) => {
  const list = {
    'home': <TabBarIconFontAweSome iconName={iconName} color={color} size={size} />,
    'calendar-check': <TabBarIconMaterialDesign iconName={iconName} color={color} size={size} />,
    'exit-outline': <TabBarIconIonicons iconName={iconName} color="white" size={40} />,
    'document-text-outline': <TabBarIconIonicons iconName={iconName} color={color} size={size} />,
    'settings-outline': <TabBarIconIonicons iconName={iconName} color={color} size={size} />,
  };
  if (isCheckOut) {
    return (
      <View style={styles.wrapperExit}>
        {list[iconName]}
      </View>
    );
  } else {
    return list[iconName];
  }
};

function TabNavigator() {
  return (
    <Tab.Navigator>
      {screens.map(({ name, component, iconName, options }) => {
        const isCheckOut = name === 'Check Out';
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={({ route, ...props }) => {
              return {
                ...options,
                tabBarActiveTintColor: '#F82C16',
                tabBarInactiveTintColor: '#A0A0A0',
                tabBarIcon: ({ color, size }) => <ConditionalTabBarIcon iconName={iconName} color={color} size={size} isCheckOut={isCheckOut} />,
              };
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

function RootStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          statusBarAnimation: 'slide',
          headerLeft: () => (
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <IconIonicons name="arrow-back" size={25} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: 'Notifications',
          headerTitleStyle: {
            color: '#F82C16',
            fontWeight: 'bold',
          },
        }}
      />
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

const styles = StyleSheet.create({
  wrapperExit: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -40,
    backgroundColor: '#F82C16',
    borderRadius: 30,
    width: 60,
    height: 60,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  backButton: {
    marginRight: 10,
  },
});

export default App;
