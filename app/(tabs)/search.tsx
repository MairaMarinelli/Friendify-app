import { Text, View, StyleSheet } from "react-native";
import eventos from "../../assets/data/events.json";

export default function Search() {
  const evento = eventos[0];
  return (
    <View style={styles.container}>
      <View style={styles.eventocontainer}>
        <Text style={styles.descripcion_evento}>{evento.horario}</Text>
        <Text style={styles.nombre_evento}>{evento.nombre}</Text>
        <Text style={styles.descripcion_evento}>{evento.descripcion}</Text>
        <Text style={styles.participantes_evento}>
          {evento.cant_personas} personas | {evento.ubicacion}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    justifyContent: "center",
    padding: 10,
  },
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
