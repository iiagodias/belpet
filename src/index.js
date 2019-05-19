import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './screens/Login';


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
      header:null
    }
  }
});

export default createAppContainer(AppNavigator);