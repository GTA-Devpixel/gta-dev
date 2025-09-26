
import { View, Text, StyleSheet } from "react-native"
export default function index() {
  return (
    <View style={styles.container}>
        <Text>GTA</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red"
    }
})