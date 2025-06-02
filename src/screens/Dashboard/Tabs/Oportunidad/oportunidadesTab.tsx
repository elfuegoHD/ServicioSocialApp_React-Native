import React, { useEffect, useState } from "react"
import { View, Text, ScrollView, Pressable } from "react-native"
import axios from "../../../../axiosConfig"
import { MapPin, Clock } from "lucide-react-native"
import { lightStyles, darkStyles } from "./oportunidadesStyle"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

type RootStackParamList = {
  oportunidadScreen: { idPrograma: number }
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>

type Programa = {
  idprograma: number
  titulo: string
  descripcion: string
  validohasta: string
  ubicacion: string
  cupo: number
  dependencia: string
}

interface OportunidadesTabProps {
  darkMode: boolean
}

export const OportunidadesTab: React.FC<OportunidadesTabProps> = ({ darkMode }) => {
  const styles = darkMode ? darkStyles : lightStyles

  const [programas, setProgramas] = useState<Programa[]>([])
  const navigation = useNavigation<NavigationProp>()

  const handleVerDetalles = (id: number) => {
    localStorage.setItem("idProgramaSeleccionado", id.toString())
    navigation.navigate("oportunidadScreen", { idPrograma: id })
  }

  useEffect(() => {
    axios.get("/programas/")
      .then((res) => {
        const parsedData = typeof res.data === "string" ? JSON.parse(res.data) : res.data
        setProgramas(parsedData)
      })
      .catch((error) => {
        console.error("Error al obtener programas:", error)
      })
  }, [])

  return (
    <ScrollView style={styles.container} >
      <Text style={styles.title}>Oportunidades Recomendadas</Text>
      <View style={styles.cardGrid}>
        {programas.map((programa) => (
          <View key={programa.idprograma} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{programa.titulo}</Text>
              <Text style={styles.badge}>{programa.dependencia}</Text>
              <Text style={styles.cardDescription}>Cupo: {programa.cupo}</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.infoRow}>
                <MapPin size={16} color={darkMode ? '#aaa' : '#888'} style={styles.icon} />
                <Text style={styles.infoText}>{programa.ubicacion}</Text>
              </View>
              <View style={styles.infoRow}>
                <Clock size={16} color={darkMode ? '#aaa' : '#888'} style={styles.icon} />
                <Text style={styles.infoText}>
                  Válido hasta: {new Date(programa.validohasta).toLocaleDateString()}
                </Text>
              </View>
              <Text style={styles.descripcion}>{programa.descripcion}</Text>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  {
                    opacity: pressed ? 0.7 : 1,
                    backgroundColor: darkMode ? '#1e40af' : '#1e40af'
                  }
                ]}
                onPress={() => handleVerDetalles(programa.idprograma)}
              >
                <Text style={styles.buttonText}>Ver Detalles</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
