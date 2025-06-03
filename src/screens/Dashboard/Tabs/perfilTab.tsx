import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, Modal, TextInput, ScrollView } from "react-native";
import { User } from "lucide-react-native";
import { DashStyle } from '../../../styles/DashboardStyle';
import axios from '../../../axiosConfig';

interface ProfileProps {
  darkMode: boolean;
}

interface Estudiante {
  idEstudiante: number;
  nombre: string;
  apellidom: string;
  apellidop: string;
  escuela: string;
  nivel: string;
  estado: string;
  municipio: string;
  correo: string;
  curp: string;
  contrasena: string;
  fecharegistro: string;
}

const ProfileTab: React.FC<ProfileProps> = ({ darkMode }) => {
  const styles = DashStyle(darkMode);

  const [loading, setLoading] = useState(true);
  const [estudiante, setEstudiante] = useState<Estudiante | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState<Partial<Estudiante>>({});
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    fetchEstudiante();
  }, []);

  const handleUpdate = async () => {
  const idEstudiante = parseInt(localStorage.getItem("user_id") || "0");

  if (!idEstudiante || !estudiante) {
    alert("ID del estudiante no disponible.");
    return;
  }

  const payload = {
    idEstudiante,
    nombre: formData.nombre || estudiante.nombre,
    apellidoP: formData.apellidop || estudiante.apellidop,
    apellidoM: formData.apellidom || estudiante.apellidom,
    escuela: formData.escuela || estudiante.escuela,
    nivel: formData.nivel || estudiante.nivel,
    estado: formData.estado || estudiante.estado,
    municipio: formData.municipio || estudiante.municipio,
    correo: formData.correo || estudiante.correo,
    curp: formData.curp || estudiante.curp,
    contrasena: formData.contrasena || estudiante.contrasena,
  };

  console.log("Payload enviado al backend:", payload);

  try {
    await axios.put("/estudiantes/", payload, {
      withCredentials: true,
    });

    setModalVisible(false);
    alert("Perfil actualizado correctamente");
    setLoading(true);
    await fetchEstudiante();
  } catch (error: any) {
    console.error("Error al actualizar el perfil:", error);
    alert(
      "Error al actualizar: " +
        (error.response?.data?.error || error.message || "Error desconocido")
    );
  }
};


  if (loading) {
    return (
      <View style={styles.tabContent}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  if (error || !estudiante) {
    return (
      <View style={styles.tabContent}>
        <Text style={{ color: 'red' }}>{error || "Error desconocido"}</Text>
      </View>
    );
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
            <TouchableOpacity
              style={styles.editProfileButton}
              onPress={() => {
                setFormData(estudiante);
                setModalVisible(true);
              }}
            >
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
                  <Text style={styles.profileFieldLabel}>Escuela</Text>
                  <Text style={styles.profileFieldValue}>{estudiante.escuela}</Text>
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
                  <Text style={styles.profileFieldLabel}>Municipio</Text>
                  <Text style={styles.profileFieldValue}>{estudiante.municipio}</Text>
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

      {/* Modal de edición */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={{ flex: 1, backgroundColor: "#000000aa", justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: '90%', backgroundColor: darkMode ? "#1f2937" : "#ffffff", padding: 20, borderRadius: 10 }}>
            <ScrollView>
              <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                {[
                  { label: 'Nombre', key: 'nombre' },
                  { label: 'Apellido Paterno', key: 'apellidop' },
                  { label: 'Apellido Materno', key: 'apellidom' },
                  { label: 'Escuela', key: 'escuela' },
                  { label: 'Nivel', key: 'nivel' },
                  { label: 'Estado', key: 'estado' },
                  { label: 'Municipio', key: 'municipio' },
                  { label: 'Correo', key: 'correo' },
                  { label: 'CURP', key: 'curp' },
                  { label: 'Contraseña', key: 'contrasena' },
                ].map(({ label, key }) => (
                  <View key={key} style={{ width: '48%', marginBottom: 12 }}>
                    <Text style={{ color: darkMode ? "#fff" : "#000", marginBottom: 5 }}>{label}</Text>
                    <TextInput
                      style={{
                        backgroundColor: "#e5e7eb",
                        padding: 8,
                        borderRadius: 6,
                        color: "#000"
                      }}
                      secureTextEntry={key === 'contrasena'}
                      value={formData[key as keyof Estudiante] !== undefined ? String(formData[key as keyof Estudiante]) : ''}
                      onChangeText={(text) => setFormData({ ...formData, [key]: text })}
                    />
                  </View>
                ))}
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                <TouchableOpacity style={{ padding: 10, backgroundColor: "#3B82F6", borderRadius: 8 }} onPress={handleUpdate}>
                  <Text style={{ color: "#fff" }}>Modificar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10, backgroundColor: "#6b7280", borderRadius: 8 }} onPress={() => setModalVisible(false)}>
                  <Text style={{ color: "#fff" }}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileTab;
