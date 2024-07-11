import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import PlayersContext from "../context/PlayersContext";
import { getRandomIndex } from "../gameData/utils";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "../navigations";

const Questions2 = () => {
  const [players, setPlayer] = useContext(PlayersContext);
  const navigation = useNavigation();
  const [askingPlayer, setAskingPlayer] = useState(
    players[getRandomIndex(players)]
  );

  const [theOneJustAsked, setTheOneJustAsked] = useState(null);
  const [show, setShow] = useState(true);
  return (
    <View>
      {show ? (
        <>
          <Text>Hey you {askingPlayer} ask one of these guys</Text>
          {players.map((player) => {
            if (player != askingPlayer && player != theOneJustAsked)
              return (
                <Button
                  title={player}
                  onPress={() => {
                    setTheOneJustAsked(askingPlayer);
                    setAskingPlayer(player);
                    setShow(false);
                  }}
                />
              );
            else return null;
          })}
          <Button
            title={"I know the sneekie peeke"}
            style="s"
            onPress={() => {
              navigation.navigate(SCREENS.VOTE);
            }}
          />
        </>
      ) : (
        <>
          <Text>
            Okay {theOneJustAsked} ask {askingPlayer}
          </Text>
          <Button
            title={"Done"}
            onPress={() => {
              setShow(true);
            }}
          />
        </>
      )}
    </View>
  );
};

export default Questions2;

const styles = StyleSheet.create({});
