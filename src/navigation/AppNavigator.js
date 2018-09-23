import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import LoginScreen from '../containers/LoginScreen'
import HomeScreen from '../containers/HomeScreen'
import Screen2 from '../containers/Screen2'
import LogoutScreen from '../containers/LogoutScreen'

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const menuButton = (navigation) => <Icon name="menu" size={35} onPress={() => navigation.openDrawer()} />

const homeScreenStack = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            initialRouteName: 'HomeScreen',
            headerTitle: 'Home',
            headerLeft: menuButton(navigation)
        }),
    }
);

const secondScreenStack = createStackNavigator(
    {
        SecondScreen: {
            screen: Screen2,
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            initialRouteName: 'SecondScreen',
            headerTitle: 'Stackoverflow',
            headerLeft: menuButton(navigation)
        }),
    }
);

const logoutScreenStack = createStackNavigator(
    {
        LogoutScreen: {
            screen: LogoutScreen,
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            initialRouteName: 'LogoutScreen',
            headerTitle: 'Log out',
            headerLeft: menuButton(navigation)
        }),
    }
);

const DrawerNavigator = createDrawerNavigator({
    HomeScreen: {
        screen: homeScreenStack,
        navigationOptions: {
            drawerLabel: 'Home',
        },
    },
    SecondScreen: {
        screen: secondScreenStack,
        navigationOptions: {
            drawerLabel: 'Stackoverflow',
        },
    },
    LogoutScreen: {
        screen: logoutScreenStack,
        navigationOptions: {
            drawerLabel: 'Log out',
        },
    },
}, {
        headerMode: 'screen',
        drawerPosition: 'left',
        initialRouteName: 'HomeScreen',
    });

const RootNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Drawer: { screen: DrawerNavigator },
}, {
        headerMode: 'none'
    });

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };