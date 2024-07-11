import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../Button";

const GiveThePhoneTo = ({ name, onPress }) => {
  return (
    <View>
      <Text>GiveThePhoneTo {name}</Text>
      <Button title={"Next"} onPress={onPress} />
    </View>
  );
};

export default GiveThePhoneTo;

const styles = StyleSheet.create({});
