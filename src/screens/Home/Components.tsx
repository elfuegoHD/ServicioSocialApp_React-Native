import React from "react";

import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

export const FilterBox = ({ //Filtro de búsqueda
  //define la estructura del filtro de búsqueda
  icon,
  label,
  darkMode,
}: {
  icon: React.ReactNode;
  label: string;
  darkMode: boolean;
}) => (
  <View
    style={[
      globalStyles.filterBox,
      {
        backgroundColor: darkMode ? "#404F5D" : "#fff",
        borderColor: darkMode ? "#374151" : "#B8C5DC",
        borderWidth: 1
      },
    ]}
  >
    {icon}
    <Text style={{ marginLeft: 8, color: darkMode ? "#fff" : "#000" }}>{label}</Text>
  </View>
);

export const FeatureCard = ({ //buscador de oportunidades
  icon,
  title,
  description,
  darkMode,
}: { //define la estructura de la tarjeta
  icon: React.ReactNode;
  title: string;
  description: string;
  darkMode: boolean;
}) => (
  <View //define el estilo de la tarjeta
    style={[globalStyles.featureCard, { backgroundColor: darkMode ? "#1e293b" : "#fff", }]}
  >
    <View style={{ alignSelf: "center", marginBottom: 8 }}>{icon}</View>
    <Text
      style={{
        color: darkMode ? "#fff" : "#000",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 4,
      }}
    >
      {title}{ }
    </Text>
    <Text style={{ color: darkMode ? "#cbd5e1" : "#4b5563", textAlign: "center" }}>{description}</Text>
  </View>
);

export const Card = ({ children, style }: { children: React.ReactNode; style?: object }) => {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
});