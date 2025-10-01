import { Colors } from "@/theme/color"; // <-- use your color theme
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
} from "react-native";

interface SearchBarProps extends TextInputProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Search", ...props }: SearchBarProps) {
  return (
    <View style={styles.container}>
      {/* Icon */}
      <MaterialIcons name="search" size={20} color={Colors.gray400} style={styles.icon} />
      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray400}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.gray200,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2, // Android shadow
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: Colors.gray800,
  },
});
