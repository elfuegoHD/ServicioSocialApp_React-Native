
import React from "react"
import { View, Text, StyleSheet } from "react-native"

interface ProcesoPostulacionProps {
  darkMode: boolean
}

export const ProcesoPostulacion: React.FC<ProcesoPostulacionProps> = ({ darkMode }) => {
  const styles = getStyles(darkMode)

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.sectionTitle}>Proceso de Postulación</Text>

      {[
        {
          numero: "1",
          titulo: "Envía tu postulación",
          descripcion: "Completa el formulario de postulación y adjunta los documentos requeridos.",
        },
        {
          numero: "2",
          titulo: "Revisión de documentos",
          descripcion: "La institución revisará tu perfil y documentos (tiempo estimado: 5 días hábiles).",
        },
        {
          numero: "3",
          titulo: "Entrevista (si aplica)",
          descripcion: "Podrías ser contactado para una entrevista presencial o virtual.",
        },
        {
          numero: "4",
          titulo: "Confirmación",
          descripcion: "Recibirás una notificación con el resultado de tu postulación.",
        },
      ].map((step) => (
        <View key={step.numero} style={styles.processStep}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>{step.numero}</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>{step.titulo}</Text>
            <Text style={styles.stepDescription}>{step.descripcion}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

const getStyles = (darkMode: boolean) =>
  StyleSheet.create({
    cardContainer: {
      padding: 16,
      borderRadius: 12,
      backgroundColor: darkMode ? "#1f2937" : "#ffffff",
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 12,
      color: darkMode ? "#ffffff" : "#1e293b",
    },
    processStep: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 16,
    },
    stepNumber: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: darkMode ? "#0862B6" : "#cbd5e1",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },
    stepNumberText: {
      color: "#ffffff",
      fontWeight: "bold",
    },
    stepContent: {
      flex: 1,
    },
    stepTitle: {
      fontWeight: "bold",
      fontSize: 16,
      color: darkMode ? "#ffffff" : "#1e293b",
    },
    stepDescription: {
      fontSize: 14,
      color: darkMode ? "#ffffff" : "#1e293b",
    },
  })
