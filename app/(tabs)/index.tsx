import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
  const {toggleDarkMode} = useTheme();

  // const todos = useQuery(api.todos.getTodos)
  // console.log(todos)

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Edit appindex.tsx to edit this screen.</Text>
      <Text>hey</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
         <Text>Toggle the mode</Text>
         </TouchableOpacity>

      
  
    </View>
  );
}
