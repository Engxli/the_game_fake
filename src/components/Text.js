import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextCustom = ({ children, style }) => {
  return <Text style={{ fontFamily: "Arabic", ...style }}>{children}</Text>;
};

export default TextCustom;

const styles = StyleSheet.create({});
