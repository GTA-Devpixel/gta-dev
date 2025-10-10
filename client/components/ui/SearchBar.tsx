import { Colors } from "@/theme/color"; // <-- use your color theme
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metrics";

interface SearchBarProps extends TextInputProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Search", ...props }: SearchBarProps) {
  return (
    <View style={styles.container}>
      {/* Icon */}
      <MaterialIcons
        name="search"
        size={moderateScale(20)}
        color={Colors.gray400}
        style={styles.icon}
      />
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
    borderRadius: moderateScale(24),
    borderWidth: 1,
    borderColor: Colors.gray200,
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(8),
    marginVertical: verticalScale(8),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.08,
    shadowRadius: moderateScale(4),
    elevation: 2, // Android shadow
  },
  icon: {
    marginRight: horizontalScale(8),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(14),
    color: Colors.gray800,
  },
});
