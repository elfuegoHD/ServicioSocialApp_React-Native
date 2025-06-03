import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Appearance,
  Switch,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Card } from "react-native-paper";
import { Moon, Sun } from "lucide-react-native";
import axios from "../../axiosConfig";
import estados from "../../estados-municipios.json";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"


type RootStackParamList = {
  LoginScreen: undefined
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<NavigationProp>()
  const [userType, setUserType] = useState("estudiante");
  const [darkMode, setDarkMode] = useState(false);
  const [estadosh, setEstadosh] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidop: "",
    apellidom: "",
    escuela: "",
    nivel: "",
    estado: "",
    municipio: "",
    correo: "",
    curp: "",
    contrasena: "",
    razonsocial: "",
    ciudad: "",
    calle: "",
    numeroext: "",
    capacidad: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    handleChange(name, value);
    if (name === "estado") {
      const selectedMunicipios = estados[value] || [];
      setMunicipios(selectedMunicipios);
      handleChange("municipio", ""); // Reset municipio when estado changes
    }
  };

  const handleSubmit = async () => {
    if (userType === "estudiante") {
      try {
        const response = await axios.post("/estudiantes", formData);
        if (response.status === 200) {
          Alert.alert("Éxito", "Registro exitoso");
          window.alert("Éxito: Registro exitoso");
          navigation.navigate("LoginScreen");
        }
      } catch (error) {
        Alert.alert("Error", error.response?.data?.mensaje || "Ocurrió un error");
        console.log(error);
      }
    } else if (userType === "institucion") {
      Alert.alert("Info", "Agregar lógica de registro para instituciones");
    }
  };

  useEffect(() => {
    const nomEstados = Object.keys(estados);
    setEstadosh(nomEstados);

    // Check system color scheme
    const colorScheme = Appearance.getColorScheme();
    setDarkMode(colorScheme === "dark");
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Styles based on dark mode
  const styles = StyleSheet.create({
    container: {
      backgroundColor: darkMode ? "#111827" : "#f9fafb",
      padding: 16,
    },
    darkModeButton: {
      position: "absolute",
      top: 16,
      right: 16,
      zIndex: 10,
      backgroundColor: darkMode ? "rgba(31, 41, 55, 0.5)" : "rgba(255, 255, 255, 0.1)",
      borderRadius: 20,
      padding: 8,
      flexDirection: "row",
      alignItems: "center",
    },
    card: {
      width: "100%",
      maxWidth: 500,
      alignSelf: "center",
      backgroundColor: darkMode ? "#1f2937" : "white",
      borderColor: darkMode ? "#374151" : "#e5e7eb",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 8,
      color: darkMode ? "white" : "black",
    },
    description: {
      textAlign: "center",
      marginBottom: 24,
      color: darkMode ? "#d1d5db" : "#6b7280",
    },
    radioGroup: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 16,
    },
    radioOption: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 12,
    },
    radioLabel: {
      marginLeft: 8,
      color: darkMode ? "white" : "black",
    },
    label: {
      marginBottom: 8,
      color: darkMode ? "white" : "black",
    },
    input: {
      backgroundColor: darkMode ? "#374151" : "white",
      borderColor: darkMode ? "#4b5563" : "#d1d5db",
      borderWidth: 1,
      borderRadius: 6,
      padding: 12,
      marginBottom: 16,
      color: darkMode ? "white" : "black",
    },
    picker: {
      backgroundColor: darkMode ? "#374151" : "white",
      borderColor: darkMode ? "#4b5563" : "#d1d5db",
      borderWidth: 1,
      borderRadius: 6,
      marginBottom: 16,
      color: darkMode ? "white" : "black",
      height: 40,
    },
    passwordContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    passwordInput: {
      flex: 1,
      backgroundColor: darkMode ? "#374151" : "white",
      borderColor: darkMode ? "#4b5563" : "#d1d5db",
      borderWidth: 1,
      borderRadius: 6,
      padding: 12,
      color: darkMode ? "white" : "black",
    },
    eyeButton: {
      position: "absolute",
      right: 12,
    },
    button: {
      backgroundColor: darkMode ? "#1d4ed8" : "#2563eb",
      padding: 14,
      borderRadius: 6,
      alignItems: "center",
      marginBottom: 16,
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
    },
    loginText: {
      textAlign: "center",
      color: darkMode ? "white" : "black",
    },
    loginLink: {
      color: "#3b82f6",
      fontWeight: "bold",
    },
    checkboxContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },
    checkbox: {
      marginRight: 8,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    gridItem: {
      width: "48%",
    },
    gridItemFull: {
      width: "100%",
    },
    gridItemTwoThirds: {
      width: "65%",
    },
    gridItemOneThird: {
      width: "30%",
    },

  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={toggleDarkMode} style={styles.darkModeButton}>
        {darkMode ? (
          <Sun size={24} color="white" />
        ) : (
          <Moon size={24} color="black" />
        )}
      </TouchableOpacity>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Crear Cuenta</Text>
          <Text style={styles.description}>
            Regístrate para acceder a oportunidades de servicio social
          </Text>

          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => setUserType("estudiante")}
            >
              <MaterialCommunityIcons
                name={userType === "estudiante" ? "radiobox-marked" : "radiobox-blank"}
                size={24}
                color={darkMode ? "white" : "black"}
              />
              <Text style={styles.radioLabel}>Estudiante</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => setUserType("institucion")}
            >
              <MaterialCommunityIcons
                name={userType === "institucion" ? "radiobox-marked" : "radiobox-blank"}
                size={24}
                color={darkMode ? "white" : "black"}
              />
              <Text style={styles.radioLabel}>Institución</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <View style={styles.gridItem}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput
                style={styles.input}
                placeholder="Juan"
                value={formData.nombre}
                onChangeText={(text) => handleChange("nombre", text)}
                placeholderTextColor="#BABBBE"
              />
            </View>

            <View style={styles.gridItem}>
              <Text style={styles.label}>Apellido Paterno</Text>
              <TextInput
                style={styles.input}
                placeholder="Pérez"
                value={formData.apellidop}
                onChangeText={(text) => handleChange("apellidop", text)}
                placeholderTextColor="#BABBBE"

              />
            </View>

            <View style={styles.gridItem}>
              <Text style={styles.label}>Apellido Materno</Text>
              <TextInput
                style={styles.input}
                placeholder="García"
                value={formData.apellidom}
                onChangeText={(text) => handleChange("apellidom", text)}
                placeholderTextColor="#BABBBE"

              />
            </View>
          </View>

          <Text style={styles.label}>Correo Electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="tu@ejemplo.com"
            keyboardType="email-address"
            value={formData.correo}
            onChangeText={(text) => handleChange("correo", text)}
            placeholderTextColor="#BABBBE"

          />

          {userType === "estudiante" && (
            <>
              <Text style={styles.label}>CURP</Text>
              <TextInput
                style={styles.input}
                placeholder="ABCD123456EFGHIJK78"
                maxLength={18}
                value={formData.curp}
                onChangeText={(text) => handleChange("curp", text)}
                placeholderTextColor="#BABBBE"

              />
              <Text style={[styles.description, { fontSize: 12, marginBottom: 16 }]}>
                Clave Única de Registro de Población (18 caracteres)
              </Text>

              <Text style={styles.label}>Universidad/Institución</Text>
              <TextInput
                style={styles.input}
                placeholder="Universidad Nacional Autónoma de México"
                value={formData.escuela}
                onChangeText={(text) => handleChange("escuela", text)}
                placeholderTextColor="#BABBBE"

              />

              <Text style={styles.label}>Nivel Educativo</Text>
              <Picker
                selectedValue={formData.nivel}
                onValueChange={(itemValue) => handleChange("nivel", itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Seleccionar nivel" value="" />
                <Picker.Item label="Licenciatura" value="licenciatura" />
                <Picker.Item label="Maestría" value="maestria" />
                <Picker.Item label="Doctorado" value="doctorado" />
                <Picker.Item label="Técnico Superior" value="tecnico" />
              </Picker>

              <View style={styles.grid}>
                <View style={styles.gridItem}>
                  <Text style={styles.label}>Estado</Text>
                  <Picker
                    selectedValue={formData.estado}
                    onValueChange={(itemValue) => handleSelectChange("estado", itemValue)}
                    style={styles.picker}
                  >
                    <Picker.Item label="Seleccionar estado" value="" />
                    {estadosh.map((estado) => (
                      <Picker.Item key={estado} label={estado} value={estado} />
                    ))}
                  </Picker>
                </View>

                <View style={styles.gridItem}>
                  <Text style={styles.label}>Municipio</Text>
                  <Picker
                    selectedValue={formData.municipio}
                    onValueChange={(itemValue) => handleChange("municipio", itemValue)}
                    style={styles.picker}
                    enabled={!!formData.estado}
                  >
                    <Picker.Item label="Seleccionar municipio" value="" />
                    {municipios.map((municipio) => (
                      <Picker.Item key={municipio} label={municipio} value={municipio} />
                    ))}
                  </Picker>
                </View>
              </View>
            </>
          )}

          {userType === "institucion" && (
            <>
              <Text style={styles.label}>Razón Social</Text>
              <TextInput
                style={styles.input}
                placeholder="Secretaría de Educación Pública"
                value={formData.razonsocial}
                onChangeText={(text) => handleChange("razonsocial", text)}
                placeholderTextColor="#BABBBE"

              />

              <View style={styles.grid}>
                <View style={styles.gridItem}>
                  <Text style={styles.label}>Estado</Text>
                  <Picker
                    selectedValue={formData.estado}
                    onValueChange={(itemValue) => handleSelectChange("estado", itemValue)}
                    style={styles.picker}
                  >
                    <Picker.Item label="Seleccionar estado" value="" />
                    {estadosh.map((estado) => (
                      <Picker.Item key={estado} label={estado} value={estado} />
                    ))}
                  </Picker>
                </View>

                <View style={styles.gridItem}>
                  <Text style={styles.label}>Municipio</Text>
                  <Picker
                    selectedValue={formData.municipio}
                    onValueChange={(itemValue) => handleChange("municipio", itemValue)}
                    style={styles.picker}
                    enabled={!!formData.estado}
                  >
                    <Picker.Item label="Seleccionar municipio" value="" />
                    {municipios.map((municipio) => (
                      <Picker.Item key={municipio} label={municipio} value={municipio} />
                    ))}
                  </Picker>
                </View>
              </View>

              <Text style={styles.label}>Ciudad</Text>
              <TextInput
                style={styles.input}
                placeholder="Ciudad"
                value={formData.ciudad}
                onChangeText={(text) => handleChange("ciudad", text)}
                placeholderTextColor="#BABBBE"

              />

              <View style={styles.grid}>
                <View style={styles.gridItemTwoThirds}>
                  <Text style={styles.label}>Calle</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Nombre de la calle"
                    value={formData.calle}
                    onChangeText={(text) => handleChange("calle", text)}
                    placeholderTextColor="#BABBBE"

                  />
                </View>

                <View style={styles.gridItemOneThird}>
                  <Text style={styles.label}>Número Ext.</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="123"
                    value={formData.numeroext}
                    onChangeText={(text) => handleChange("numeroext", text)}
                    placeholderTextColor="#BABBBE"

                  />
                </View>
              </View>

              <Text style={styles.label}>Capacidad de Estudiantes</Text>
              <TextInput
                style={styles.input}
                placeholder="50"
                keyboardType="numeric"
                value={formData.capacidad}
                onChangeText={(text) => handleChange("capacidad", text)}
                placeholderTextColor="#BABBBE"
              />
              <Text style={[styles.description, { fontSize: 12, marginBottom: 16 }]}>
                Número máximo de estudiantes que puede recibir su institución
              </Text>
            </>
          )}

          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="••••••••"
              secureTextEntry={!showPassword}
              value={formData.contrasena}
              onChangeText={(text) => handleChange("contrasena", text)}
              placeholderTextColor="#BABBBE"

            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color={darkMode ? "white" : "black"}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.checkboxContainer}>
            <Switch
              value={true}
              onValueChange={() => { }}
              style={styles.checkbox}
              trackColor={{ false: "#767577", true: "#3b82f6" }}
              thumbColor="#ffffff"
            />
            <Text style={styles.label}>
              Acepto los{" "}
              <Text
                style={styles.loginLink}
              /*onPress={() => navigation.navigate("Terms")}*/
              >
                términos y condiciones
              </Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            ¿Ya tienes una cuenta?{" "}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              Iniciar Sesión
            </Text>
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default RegisterPage;