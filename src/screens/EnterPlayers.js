import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import Button from "../components/Button";
import PlayersContext from "../context/PlayersContext";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "../navigations";

const EnterPlayers = () => {
  const [players, setPlayers] = useContext(PlayersContext);
  const navigation = useNavigation();
  const [playersInput, setPlayersInput] = useState([
    "player1",
    "player2",
    "player3",
  ]);
  return (
    <View style={{ flex: 1, gap: 10 }}>
      <View style={{ flex: 8 }}>
        <ScrollView contentContainerStyle={{ gap: 5 }}>
          {playersInput.map((player, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextInput
                  value={player}
                  onChangeText={(t) => {
                    playersInput[index] = t;
                    setPlayersInput([...playersInput]);
                  }}
                />

                <Button
                  title={"Remove"}
                  onPress={() => {
                    setPlayersInput(playersInput.filter((_, i) => i != index));
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View
        style={{
          flex: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          title={"Add a player"}
          style="secondary"
          onPress={() =>
            setPlayersInput([
              ...playersInput,
              `player ${playersInput.length + 1}`,
            ])
          }
        />
        <Button
          title={"Start the game"}
          onPress={() => {
            setPlayers(playersInput);
            navigation.navigate(SCREENS.START_GAME);
          }}
        />
      </View>
    </View>
  );
};

export default EnterPlayers;

const styles = StyleSheet.create({});
