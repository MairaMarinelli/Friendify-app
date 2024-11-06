import { Text, View, StyleSheet, FlatList } from "react-native";
import eventos from "../../assets/data/events.json";
import EventosListItem from "../../components/EventosListItem.jsx";

export default function Search() {
  return (
    <View style={styles.container}>
      <FlatList
        data={eventos}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item, index }) => <EventosListItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    justifyContent: "center",
    padding: 10,
    paddingTop: 70,
  },
});
