import {View, Text, StyleSheet } from "react-native"
export default function events() {
  return (
    <View style={styles.container}>
        <Text>This is the events tab</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"blue"
    }
})