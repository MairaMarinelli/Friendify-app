import { Text, View, StyleSheet } from "react-native";

export default function EventosListItem({ item }) {
  return (
    <View style={styles.eventocontainer}>
      <Text style={styles.descripcion_evento}>{item.horario}</Text>
      <Text style={styles.nombre_evento}>{{ item }.item.nombre}</Text>
      <Text style={styles.descripcion_evento}>{item.descripcion}</Text>
      <Text style={styles.participantes_evento}>
        {item.cant_personas} personas | {item.ubicacion}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  eventocontainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  nombre_evento: {
    fontSize: 20,
    fontWeight: "500",
  },
  descripcion_evento: {
    color: "dimgray",
  },
  participantes_evento: {
    fontSize: 16,
    color: "dimgray",
  },
});
