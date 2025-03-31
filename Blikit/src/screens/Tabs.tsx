import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './tabs/Home/Home';
import Account from './tabs/Account';
import Cart from './tabs/Cart';
import Explore from './tabs/Explore/Explore';
import Favourite from './tabs/Favourite';
import {tabIcons} from '../helpers/Icons';
import EStyleSheet from 'react-native-extended-stylesheet';

const {Navigator, Screen} = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          switch (route.name) {
            case Home.name:
              return <tabIcons.ShopIcon color={color} />;
            case Account.name:
              return <tabIcons.PersonIcon color={color} />;
            case Cart.name:
              return <tabIcons.CartIcon color={color} />;
            case Explore.name:
              return <tabIcons.ExploreSearchIcon color={color} />;
            case Favourite.name:
              return <tabIcons.HeartIcon color={color} />;
            default:
              return <tabIcons.ShopIcon color={color} />;
          }
        },
      
        activeTintColor: '#53B175',
        inactiveTintColor: '#1  81725',
        labelStyle: style.tabBarLabelStyle,
      })}>
      <Screen name = "Home" component={Home} />
      <Screen name="Explore" component={Explore} />
      <Screen name="Cart" component={Cart} />
      <Screen name="Favourite" component={Favourite} />
      <Screen name="Account" component={Account} />
    </Navigator>
  );
};

const style = EStyleSheet.create({
  tabBarLabelStyle: {
    fontFamily: '$gilroyNormal600',
    fontWeight: '600',
    fontSize: '0.75rem',
  },
});

export default Tabs;
