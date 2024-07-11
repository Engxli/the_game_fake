import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import TextCustom from "./Text";

const Button = ({
  title,
  onPress = () => {},
  style = "primary" || "secondary",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: style == "primary" ? "#B93C4E" : "#177E86",
        borderRadius: 22,
        height: 74,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextCustom style={{ color: "white" }}>{title}</TextCustom>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
