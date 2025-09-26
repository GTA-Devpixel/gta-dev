import {View, Text, StyleSheet } from "react-native"
export default function menu() {
  return (
    <View style={styles.container}>
        <Text>This is the menu tab</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"yellow"
    }
})