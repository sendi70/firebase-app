import { createStackNavigator, createAppContainer } from "react-navigation";
import Loading from './Loading'
import Login from './Login'
import List from './List'
import Map from './components/Map'


const Root = createStackNavigator({
  s1: { screen: Loading },
  Login: { screen: Login },
  List: { screen: List },
  Map: { screen: Map }
});


const App = createAppContainer(Root);

export default App;