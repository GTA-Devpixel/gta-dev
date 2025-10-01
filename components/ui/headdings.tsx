import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
        padding:16
    },
    title:{
        fontSize:16,
        fontWeight:800,
        color:"#000"
    },
    subtitle:{
        fontSize:14,
        fontWeight:800,
        color:"grey"
    }
})