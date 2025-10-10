import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { horizontalScale, moderateScale } from "../../theme/Metrics";

interface titleProps{
    title:string,
    subtitle:string
}

export default function headdings({title, subtitle}:titleProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: horizontalScale(16),
    },
    title:{
        fontSize: moderateScale(16),
        fontWeight: "800",
        color:"#000"
    },
    subtitle:{
        fontSize: moderateScale(14),
        fontWeight: "800",
        color:"grey"
    }
})
