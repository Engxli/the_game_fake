import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { selectPlayers, shuffleArray } from "../gameData/utils";
import PlayersContext from "../context/PlayersContext";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "../navigations";

const Questions = () => {
  const [players, setPlayers] = useContext(PlayersContext);
  const [theInformationPlayer, setTheInformationPlayer] = useState([[]]);
  const [counter, setCounter] = useState(0);
  const navigation = useNavigation();
  useEffect(() => {
    // shuffle
    const shuffledArray = shuffleArray(players);
    // get the order
    setTheInformationPlayer(selectPlayers(shuffledArray));
  }, []);
  console.log(theInformationPlayer);
  return (
    <View>
      {counter != theInformationPlayer.length ? (
        <>
          <Text>
            {theInformationPlayer[counter][0]} ASK
            {theInformationPlayer[counter][1]}
          </Text>
          <Button
            title={"Next"}
            onPress={() => {
              setCounter(counter + 1);
            }}
          />
        </>
      ) : (
        <Button
          title={"Phase 2 of questions ready?"}
          onPress={() => navigation.navigate(SCREENS.QUESTIONS_PHASE_2)}
        />
      )}
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({});
