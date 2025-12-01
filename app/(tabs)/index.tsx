import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen.222</Text>
      <Text>Hiii Naman</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    gap: 21
  },
  LinkStyle: {
    backgroundColor: "black",
    opacity: 1,
    color: "white",
    padding: 12,
    
}})
