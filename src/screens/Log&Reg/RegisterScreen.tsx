import React, { useState } from "react"
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Switch,
  useColorScheme,
} from "react-native"

import { HeaderSection } from "../Home/Sections"
import { globalStyles } from "../../styles/globalStyles"
import { handleRegister } from "../utils/handleRegister"
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import RegisterForm from "../utils/RegisterForm"

type RootStackParamList = {
  Dashboard: undefined
  LoginScreen: undefined
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>

const RegisterScreen = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [universidad, setUniversidad] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [password, setPassword] = useState("");

  const systemTheme = useColorScheme()
  const navigation = useNavigation<NavigationProp>()
  const [darkMode, setDarkMode] = useState(systemTheme === "dark")
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState<"estudiante" | "institucion">("estudiante")
  const [termsAccepted, setTermsAccepted] = useState(false)

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <ScrollView
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 24 }}
    >
      <HeaderSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> {/* Header con botón de modo oscuro */}

      {/* Tarjeta */}
      <View
        style={[
          globalStyles.card,
          {
            backgroundColor: darkMode ? "#1f2937" : "#fff",
            borderColor: darkMode ? "#374151" : "#e5e7eb",
          },
        ]}
      >
        <Text style={[globalStyles.cardTitle, { color: darkMode ? "#fff" : "#000" }]}>Crear Cuenta</Text>
        <Text style={[globalStyles.cardSubtitle, { color: darkMode ? "#cbd5e1" : "#6b7280" }]}>
          Regístrate para acceder a oportunidades de servicio social
        </Text>

        <RegisterForm
          darkMode={darkMode}
          userType={userType}
          setUserType={setUserType}
          nombre={nombre}
          setNombre={setNombre}
          apellido={apellido}
          setApellido={setApellido}
          email={email}
          setEmail={setEmail}
          universidad={universidad}
          setUniversidad={setUniversidad}
          institucion={institucion}
          setInstitucion={setInstitucion}
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          globalStyles={globalStyles}
        />


        {/* Términos y condiciones */}
        <View style={globalStyles.termsContainer}>
          <Switch value={termsAccepted} onValueChange={setTermsAccepted} />
          <Text style={{ color: darkMode ? "#cbd5e1" : "#000", marginLeft: 8 }}>
            Acepto los <Text style={{ color: "#3b82f6", fontWeight: "bold" }}>términos y condiciones</Text>
          </Text>
        </View>

        {/* Botón registro */}
        <Pressable 
          onPress={async () => {
            const exito = await handleRegister({
              nombre,
              apellido,
              email,
              password,
              universidad,
              institucion,
              userType,
              termsAccepted,
            });

            if (exito) {
              navigation.navigate("Dashboard");
            }
          }}
          style={[
            globalStyles.registerButton,
            { backgroundColor: darkMode ? "#1d4ed8" : "#2563eb" },
          ]}
        >
          <Text style={globalStyles.registerButtonText}>Registrarse</Text>
        </Pressable>

        <Text style={{ textAlign: "center", marginTop: 16, color: darkMode ? "#cbd5e1" : "#6b7280" }}>
          ¿Ya tienes una cuenta?{" "}
          <Pressable onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={{ color: darkMode ? "#60a5fa" : "#2563eb", fontWeight: "bold" }}>
              Iniciar Sesión
            </Text>
          </Pressable>
          
        </Text>
      </View>
    </ScrollView>
  )
}


export default RegisterScreen
