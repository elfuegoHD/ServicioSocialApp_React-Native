import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { User } from "lucide-react-native";
import { DashStyle } from '../../../styles/DashboardStyle';
import axios from '../../../axiosConfig'; // Ajusta la ruta

interface ProfileProps {
  darkMode: boolean;
}

interface Estudiante {
  idestudiante: number;
  nombre: string;
  apellidom: string;
  apellidop: string;
  escuela: string;
  nivel: string;
  estado: string;
  municipio: string;
  correo: string;
  curp: string;
  fecharegistro: string;
}

const ProfileTab: React.FC<ProfileProps> = ({ darkMode }) => {
  const styles = DashStyle(darkMode);

  const [loading, setLoading] = useState(true);
  const [estudiante, setEstudiante] = useState<Estudiante | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEstudiante = async () => {
      const userId = localStorage.getItem('user_id');
      if (!userId) {
        setError("Usuario no identificado.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`/estudiantes/${userId}`);
        if (response.data && response.data.length > 0) {
          setEstudiante(response.data[0]);
        } else {
          setError("No se encontró la información del estudiante.");
        }
      } catch (err) {
        setError("Error al cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchEstudiante();
  }, []);

  if (loading) {
    return (
      <View style={styles.tabContent}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.tabContent}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  if (!estudiante) {
    return null;
  }

  return (
    <View style={styles.tabContent}>
      <Text style={styles.sectionTitle}>Mi Perfil</Text>

      <View style={styles.profileCard}>
        <View style={styles.profileContent}>
          <View style={styles.profileLeft}>
            <View style={styles.profileAvatar}>
              <User color="#3B82F6" size={64} />
            </View>
            <Text style={styles.profileName}>{`${estudiante.nombre} ${estudiante.apellidop} ${estudiante.apellidom}`}</Text>
            <Text style={styles.profileRole}>{estudiante.nivel}</Text>
            <TouchableOpacity style={styles.editProfileButton}>
              <Text style={styles.editProfileButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileRight}>
            <View style={styles.profileSection}>
              <Text style={styles.profileSectionTitle}>Información Personal</Text>
              <View style={[styles.profileGrid, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }]}>
  <View style={{ width: '48%', marginBottom: 12 }}>
    <Text style={styles.profileFieldLabel}>Correo Electrónico</Text>
    <Text style={styles.profileFieldValue}>{estudiante.correo}</Text>
  </View>
  <View style={{ width: '48%', marginBottom: 12 }}>
    <Text style={styles.profileFieldLabel}>Municipio</Text>
    <Text style={styles.profileFieldValue}>{estudiante.municipio}</Text>
  </View>
 
  <View style={{ width: '48%', marginBottom: 12 }}>
    <Text style={styles.profileFieldLabel}>Nivel</Text>
    <Text style={styles.profileFieldValue}>{estudiante.nivel}</Text>
  </View>
  <View style={{ width: '48%', marginBottom: 12 }}>
    <Text style={styles.profileFieldLabel}>Estado</Text>
    <Text style={styles.profileFieldValue}>{estudiante.estado}</Text>
  </View>
   <View style={{ width: '48%', marginBottom: 12 }}>
    <Text style={styles.profileFieldLabel}>Escuela</Text>
    <Text style={styles.profileFieldValue}>{estudiante.escuela}</Text>
  </View>
  <View style={{ width: '48%', marginBottom: 12 }}>
    <Text style={styles.profileFieldLabel}>CURP</Text>
    <Text style={styles.profileFieldValue}>{estudiante.curp}</Text>
  </View>
</View>

            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileTab;
