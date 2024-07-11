import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigations/MainNavigation";
import PlayersContext from "./src/context/PlayersContext";
import { useState } from "react";
import GameDataContext from "./src/context/GameDataContext";
import categories from "./src/gameData";

export default function App() {
  const [players, setPlayers] = useState([]);
  const [game, setGame] = useState({
    categories: categories,
    category: "",
    tpoic: "",
    players: [],
    bra: "",
    braTpoic: "",
  });
  const [fontsLoaded] = useFonts({
    Arabic: require("./assets/fonts/TIDO R.otf"),
    ArabicBold: require("./assets/fonts/TIDO B.otf"),
    ArabicLight: require("./assets/fonts/TIDO L.otf"),
    ArabicEmoji: require("./assets/fonts/TIDO Emoji.otf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <GameDataContext.Provider value={[game, setGame]}>
      <PlayersContext.Provider value={[players, setPlayers]}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.05 }} />
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </View>
      </PlayersContext.Provider>
    </GameDataContext.Provider>
  );
}
