import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import GameDataContext from "../context/GameDataContext";

const Results = () => {
  const [game, setGame] = useContext(GameDataContext);
  useEffect(() => {
    setGame({
      ...game,
      players: game.players.map((p) => {
        p.score = 0;
        if (p.votedOn == game.bra) {
          if (game.topic != game.braTopic) {
            p.score = 100;
          }
        }
        if (p.name == game.bra) {
          if (game.braTopic == game.topic) {
            p.score = 200;
          }
        }
        return p;
      }),
    });
  }, []);
  console.log(game);
  return (
    <View>
      {game.players.map((p) => {
        return (
          <Text>
            {p.name}-{p.score}-{p.votedOn}
          </Text>
        );
      })}
      <Text>the real bra is {game.bra}</Text>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({});
