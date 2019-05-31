import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Login from './screens/Login';
import Ongs from './screens/Ongs';
import Categoria from './screens/Categoria';
import Favorito from './screens/Favorito';
import Inicio from './screens/Inicio';
import Icon from 'react-native-vector-icons/FontAwesome';



const Tab = createBottomTabNavigator({
  Inicio:{
    screen: Inicio,
    navigationOptions:{
     tabBarLabel: 'Inicio',
     tabBarIcon: ({tintColor}) =>( <Icon name="home" color={tintColor} size={25} /> )
    }
  },
  Ongs:{
   screen: Ongs,
   navigationOptions:{
    tabBarLabel: 'Ongs',
    tabBarIcon: ({tintColor}) =>( <Icon name="institution" color={tintColor} size={20} /> ),
   }
 },
 Categoria:{
   screen: Categoria,
   navigationOptions:{
    tabBarLabel: 'Categoria',
    tabBarIcon: ({tintColor}) =>( <Icon name="th-large" color={tintColor} size={20} /> ),
   }
 },
 Favorito:{
   screen: Favorito,
   navigationOptions:{
    tabBarLabel: 'Favorito',
    tabBarIcon: ({tintColor}) =>( <Icon name="heart" color={tintColor} size={20} /> ),
   }
 },

},{
 tabBarOptions:{
   inactiveTintColor: '#828282',
   activeTintColor: '#c0392b',
   indicatorStyle:{
     backgroundColor: '#fff'
   }
 }
});


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
      header:null
    }
  },
  Tab: {
    screen: Tab,
    navigationOptions:{
      header:null
    }
  }

},{
  initialRouteName: 'Tab',
});




export default createAppContainer(AppNavigator);