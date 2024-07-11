import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import GameDataContext from "../context/GameDataContext";
import Button from "../components/Button";
import { getRandomIndex } from "../gameData/utils";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "../navigations";

const SelectCategories = () => {
  const [game, setGame] = useContext(GameDataContext);
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {game.categories.map((c, index) => {
          return (
            <Button
              title={c.category}
              onPress={() => {
                const rIndex = getRandomIndex(game.categories[index].topics);
                setGame({
                  ...game,
                  category: c.category,
                  topic: game.categories[index].topics[rIndex],
                });

                navigation.navigate(SCREENS.ENTER_PLAYERS);
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SelectCategories;

const styles = StyleSheet.create({});
