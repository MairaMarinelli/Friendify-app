import { Text, View, StyleSheet } from "react-native";

export default function Create() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create your event here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
