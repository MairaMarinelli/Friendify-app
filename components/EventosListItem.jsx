import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function EventosListItem({ item }) {
  return (
    <Link href={`/${item.nombre}`} asChild>
      <Pressable style={styles.eventocontainer}>
        <Text style={styles.descripcion_evento}>{item.horario}</Text>
        <Text style={styles.nombre_evento}>{item.nombre}</Text>
        <Text style={styles.descripcion_evento}>{item.descripcion}</Text>
        <Text style={styles.participantes_evento}>
          {item.cant_personas} personas | {item.ubicacion}
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  eventocontainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
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
