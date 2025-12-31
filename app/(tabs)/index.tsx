import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
  },
  content: {
    fontSize: 22,
  }
})


export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Edit appindex.tsx to edit this screen.</Text>
      <Text>hey</Text>

    </View>
  );
}
