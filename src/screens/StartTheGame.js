import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import PlayersContext from "../context/PlayersContext";
import { getRandomIndex, selectPlayers, shuffleArray } from "../gameData/utils";
import GiveThePhoneTo from "../components/StartTheGame.js/GiveThePhoneTo";
import ShowHimBrr from "../components/StartTheGame.js/ShowHimBrr";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "../navigations";
import GameDataContext from "../context/GameDataContext";

const StartTheGame = () => {
  const [players, setPlayers] = useContext(PlayersContext);
  const [game, setGame] = useContext(GameDataContext);

  const [theInformationPlayer, setTheInformationPlayer] = useState([]);

  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // shuffle the array
    const shuffledPlayers = shuffleArray(players);
    // get random index
    const index_ = getRandomIndex(shuffledPlayers);
    // set the guy out side the salfa
    setGame({ ...game, bra: shuffledPlayers[index_] });
    setTheInformationPlayer(
      shuffledPlayers.map((p, index) => {
        return { name: p, isBra: index == index_ };
      })
    );
  }, []);

  return (
    <View>
      {counter != theInformationPlayer.length ? (
        <>
          {!show ? (
            <GiveThePhoneTo
              name={theInformationPlayer[counter].name}
              onPress={() => {
                setShow(true);
              }}
            />
          ) : (
            <ShowHimBrr
              player={theInformationPlayer[counter]}
              onPress={() => {
                setShow(false);
                setCounter(counter + 1);
              }}
            />
          )}
        </>
      ) : (
        <Button
          title={"Start the game"}
          onPress={() => {
            navigation.navigate(SCREENS.QUESTIONS_PHASE);
          }}
        />
      )}
    </View>
  );
};

export default StartTheGame;

const styles = StyleSheet.create({});
