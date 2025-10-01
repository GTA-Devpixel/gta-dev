import { Colors } from "@/theme/color";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  type?: "primary" | "secondary" | "tertiary" | "delete" | "neutral";
  size?: "large" | "medium" | "small";
  variant?: "filled" | "outlined";
  icon?: string;
  disabled?: boolean;
  onPress: () => void;
}

export default function Button({
  title,
  type = "primary",
  size = "medium",
  variant = "filled",
  icon,
  disabled = false,
  onPress,
}: ButtonProps) {
  const backgroundColor =
    variant === "filled" && !disabled ? getButtonColor(type) : Colors.white;
  const borderColor = getButtonColor(type);
  const textColor =
    variant === "filled" ? Colors.white : getButtonColor(type);

  const sizeStyles = getSizeStyles(size);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.base,
        { backgroundColor, borderColor, opacity: disabled ? 0.5 : 1 },
        sizeStyles.button,
        variant === "outlined" && { borderWidth: 1 },
      ]}
    >
      {icon && (
        <MaterialIcons
          name={icon as any}
          size={sizeStyles.iconSize}
          color={textColor}
          style={{ marginRight: 6 }}
        />
      )}
      <Text style={[styles.text, { color: textColor }, sizeStyles.text]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 0,
    margin: 4,
  },
  text: {
    fontWeight: "600",
  },
});

function getButtonColor(type: string) {
  switch (type) {
    case "primary":
      return Colors.red500;
    case "secondary":
      return Colors.yellow500;
    case "tertiary":
      return Colors.gray500;
    case "delete":
      return Colors.red600;
    case "neutral":
      return Colors.gray200;
    default:
      return Colors.gray500;
  }
}

function getSizeStyles(size: "large" | "medium" | "small") {
  switch (size) {
    case "large":
      return {
        button: { paddingVertical: 14, paddingHorizontal: 24 },
        text: { fontSize: 16 },
        iconSize: 20,
      };
    case "small":
      return {
        button: { paddingVertical: 6, paddingHorizontal: 12 },
        text: { fontSize: 12 },
        iconSize: 14,
      };
    default:
      return {
        button: { paddingVertical: 10, paddingHorizontal: 20 },
        text: { fontSize: 14 },
        iconSize: 16,
      };
  }
}
