import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import eventos from "../../assets/data/events.json";
import { Stack } from "expo-router";
import { useState } from "react";

export default function EventoDetailScreen() {
  const params = useLocalSearchParams();
  const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);
  const evento = eventos.find((item) => item.nombre === params.nombre);

  if (!evento) {
    <Text>Evento no encontrado</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: evento.nombre }}></Stack.Screen>

      <View style={styles.panel}>
        <Text style={styles.descripcion_evento}>{evento.horario}</Text>
        <Text style={styles.nombre_evento}>{evento.nombre}</Text>
        <Text style={styles.participantes_evento}>
          {evento.cant_personas} personas | {evento.ubicacion}
        </Text>
        <Text
          style={styles.descripcion_evento}
          numberOfLines={isInstructionExpanded ? 0 : 3}
        >
          {evento.descripcion}
        </Text>
        <Text
          style={styles.verMas}
          onPress={() => setIsInstructionExpanded(!isInstructionExpanded)}
        >
          {isInstructionExpanded ? "Ver menos" : "Ver más..."}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
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
  verMas: {
    alignSelf: "center",
    padding: 5,
    fontWeight: "600",
    color: "lightblue",
  },
});
