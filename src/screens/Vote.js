import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import PlayersContext from "../context/PlayersContext";
import { shuffleArray } from "../gameData/utils";
import Button from "../components/Button";
import GameDataContext from "../context/GameDataContext";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "../navigations";

const Vote = () => {
  const [players, setPlayers] = useContext(PlayersContext);
  const [game, setGame] = useContext(GameDataContext);
  const [votePlayers, setVotePlayers] = useState(shuffleArray(players) || []);
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  return (
    <View>
      {!show ? (
        <>
          {counter != votePlayers.length ? (
            <>
              <Text>{votePlayers[counter]} vote</Text>
              {votePlayers.map((p, index) => {
                if (index != counter) {
                  return (
                    <Button
                      title={p}
                      onPress={() => {
                        setGame({
                          ...game,
                          players: [
                            ...game.players,
                            { name: votePlayers[counter], votedOn: p },
                          ],
                        });
                        setCounter(counter + 1);
                      }}
                    />
                  );
                }
              })}
            </>
          ) : (
            <>
              <Text>You ready to know who is bra alsaaalfa</Text>
              <Button title={"LEEESGOOO"} onPress={() => setShow(true)} />
            </>
          )}
        </>
      ) : (
        <>
          <Text>
            Bra alsalfa is {game.bra}. Now try to know what was the tpoic
          </Text>
          {game.categories
            .find((c) => c.category == game.category)
            .topics.map((t) => {
              return (
                <Button
                  title={t}
                  onPress={() => {
                    setGame({ ...game, braTopic: t });
                    navigation.navigate(SCREENS.RESULTS);
                  }}
                />
              );
            })}
        </>
      )}
    </View>
  );
};

export default Vote;

const styles = StyleSheet.create({});
