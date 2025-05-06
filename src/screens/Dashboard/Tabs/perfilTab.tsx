import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { User, FileText } from "lucide-react-native";
import { DashStyle } from '../../../styles/DashboardStyle';

interface ProfileProps {
  darkMode: boolean;
}

const ProfileTab: React.FC<ProfileProps> = ({ darkMode }) => {
  // Obtenemos los estilos del archivo externo
  const styles = DashStyle(darkMode);

  return (
    <View style={styles.tabContent}>
      <Text style={styles.sectionTitle}>Mi Perfil</Text>

      <View style={styles.profileCard}>
        <View style={styles.profileContent}>
          <View style={styles.profileLeft}>
            <View style={styles.profileAvatar}>
              <User color="#3B82F6" size={64} />
            </View>
            <Text style={styles.profileName}>Juan Pérez</Text>
            <Text style={styles.profileRole}>Estudiante de Ingeniería</Text>
            <TouchableOpacity style={styles.editProfileButton}>
              <Text style={styles.editProfileButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileRight}>
            <View style={styles.profileSection}>
              <Text style={styles.profileSectionTitle}>Información Personal</Text>
              <View style={styles.profileGrid}>
                <View style={styles.profileField}>
                  <Text style={styles.profileFieldLabel}>Correo Electrónico</Text>
                  <Text style={styles.profileFieldValue}>juan.perez@ejemplo.com</Text>
                </View>
                <View style={styles.profileField}>
                  <Text style={styles.profileFieldLabel}>Teléfono</Text>
                  <Text style={styles.profileFieldValue}>+52 55 1234 5678</Text>
                </View>
                <View style={styles.profileField}>
                  <Text style={styles.profileFieldLabel}>Universidad</Text>
                  <Text style={styles.profileFieldValue}>Universidad Nacional Autónoma de México</Text>
                </View>
                <View style={styles.profileField}>
                  <Text style={styles.profileFieldLabel}>Carrera</Text>
                  <Text style={styles.profileFieldValue}>Ingeniería en Sistemas Computacionales</Text>
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