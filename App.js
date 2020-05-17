import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SignIn, CreateAccount, Todos, Profile } from './src/screens';
import  TodoDetail  from './src/listElementDetail';
import { AuthContext } from './src/authContext';
import  {ScreenContext}  from './src/screenContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './src/colors';



const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} options={{title: 'Sign In'}} />
    <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{title: 'Create Account'}}/>
    </AuthStack.Navigator>
  );
}

const TodoStack = createStackNavigator();

const TodoStackScreen = ({navigation}) => {
  const { screen, setScreen } = React.useContext(ScreenContext);
  if (screen == 0) {
    navigation.setOptions({ tabBarVisible: true })
  } else {
    navigation.setOptions({ tabBarVisible: false })
  }
  return(
    <TodoStack.Navigator initialRouteName="Todos"
      screenOptions={{gestureEnabled: true, headerBackTitleVisible: false}} headerMode="float" >
      <TodoStack.Screen 
        name="Todos" 
        component={Todos} 
        options={{headerShown: false}} />
      <TodoStack.Screen 
        name="TodoDetail" 
        component={TodoDetail}
        options={({ route }) => ({
          title: route.params.item.list.name
        })}
       />
    </TodoStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const Tabs = createBottomTabNavigator();

const TabScreen = () => {
  return(
    <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: colors.blue,
      inactiveTintColor: colors.gray
    }}>
      <Tabs.Screen 
        name="Todos" 
        component={TodoStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={colors.blue} size={28} />
          ),
        }} />
      <Tabs.Screen 
        name="Profile" 
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={colors.gray} size={28} />
          ),
        }} />
    </Tabs.Navigator>
  );
}

const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen name="App" component={TabScreen} />
    ) : 
    (
      <RootStack.Screen name="Auth" component={AuthStackScreen} />
    )}
  </RootStack.Navigator>
);

function App () {

  const [userToken, setUserToken] = React.useState(null);
  const [screen, setScreen] = React.useState(0);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setUserToken('asdf');
      },
      signUp: () => {
        setUserToken('asdf');
      },
      signOut: () => {
        setUserToken(null);
      }
    };
  }, []);
    
  return (
    <AuthContext.Provider value={authContext}>
      <ScreenContext.Provider value={{screen, setScreen}}>
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </ScreenContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;