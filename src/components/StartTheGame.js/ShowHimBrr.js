import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import GameDataContext from "../../context/GameDataContext";
import Button from "../Button";

const ShowHimBrr = ({ player, onPress }) => {
  const [game, setGame] = useContext(GameDataContext);
  return (
    <View>
      {player.isBra ? (
        <Text>ShowHimBrr you are bra? try to understand, {game.category}</Text>
      ) : (
        <Text>
          ShowHimBrr you are in the salfa and the salfa is {game.topic}
        </Text>
      )}

      <Button title={"Next"} onPress={onPress} />
    </View>
  );
};

export default ShowHimBrr;

const styles = StyleSheet.create({});
