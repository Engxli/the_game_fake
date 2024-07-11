import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import SCREENS from "../navigations";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        flex: 1,
      }}
    >
      <Button title={"Learn how to play"} style="secondary" />
      <Button
        title={"Start Game"}
        onPress={() => navigation.navigate(SCREENS.SELECT_CATEGORY)}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
