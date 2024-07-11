import { createStackNavigator } from "@react-navigation/stack";
import SCREENS from ".";
import Home from "../screens/Home";
import EnterPlayers from "../screens/EnterPlayers";
import StartTheGame from "../screens/StartTheGame";
import Questions from "../screens/Questions";
import Vote from "../screens/Vote";
import Results from "../screens/Results";
import Questions2 from "../screens/Questions2";
import SelectCategories from "../screens/SelectCategories";

const Stack = createStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.HOME} component={Home} />
      <Stack.Screen
        name={SCREENS.SELECT_CATEGORY}
        component={SelectCategories}
      />
      <Stack.Screen name={SCREENS.ENTER_PLAYERS} component={EnterPlayers} />
      <Stack.Screen name={SCREENS.START_GAME} component={StartTheGame} />
      <Stack.Screen name={SCREENS.QUESTIONS_PHASE} component={Questions} />
      <Stack.Screen name={SCREENS.QUESTIONS_PHASE_2} component={Questions2} />
      <Stack.Screen name={SCREENS.VOTE} component={Vote} />
      <Stack.Screen name={SCREENS.RESULTS} component={Results} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
