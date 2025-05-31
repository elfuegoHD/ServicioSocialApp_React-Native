import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  useColorScheme,
  ScrollView,
  Switch,
  Alert,
  Platform,
} from "react-native";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { globalStyles } from "../../styles/globalStyles";
import { HeaderSection } from "../Home/Sections";

type RootStackParamList = {
  Dashboard: undefined
  RegisterScreen: undefined
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const PasswordInput = ({
  value,
  onChangeText,
  showPassword,
  setShowPassword,
  darkMode,
}: {
  value: string;
  onChangeText: (text: string) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  darkMode: boolean;
}) => (
  <View style={globalStyles.inputGroup}>
    <Text style={[globalStyles.label, { color: darkMode ? "#fff" : "#000" }]}>Contraseña</Text>
    <View style={globalStyles.passwordContainer}>
      <TextInput
        placeholder="••••••••"
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={darkMode ? "#9ca3af" : "#6b7280"}
        style={[
          globalStyles.input,
          {
            flex: 1,
            backgroundColor: darkMode ? "#374151" : "#f9fafb",
            color: darkMode ? "#fff" : "#000",
          },
        ]}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
      />
      <Pressable onPress={() => setShowPassword(!showPassword)} style={globalStyles.eyeIcon}>
        {showPassword ? (
          <EyeOffIcon size={18} color={darkMode ? "#cbd5e1" : "#6b7280"} />
        ) : (
          <EyeIcon size={18} color={darkMode ? "#cbd5e1" : "#6b7280"} />
        )}
      </Pressable>
    </View>
  </View>
);

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const systemTheme = useColorScheme();
  const [darkMode, setDarkMode] = useState(systemTheme === "dark");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLogin = () => {
    if (!email || !password) {
      if (Platform.OS === "web") {
        window.alert("Por favor, completa todos los campos.");
      } else {
        Alert.alert("Campos vacíos", "Por favor, completa todos los campos.");
      }
      return;
    }

    navigation.navigate("Dashboard");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 24 }}
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
    >
      <HeaderSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <View
        style={[
          globalStyles.card,
          {
            backgroundColor: darkMode ? "#1f2937" : "#fff",
            borderColor: darkMode ? "#374151" : "#e5e7eb",
          },
        ]}
      >
        <Text style={[globalStyles.cardTitle, { color: darkMode ? "#fff" : "#000" }]}>Iniciar Sesión</Text>
        <Text style={[globalStyles.cardSubtitle, { color: darkMode ? "#cbd5e1" : "#6b7280" }]}>
          Ingresa tus credenciales para acceder a tu cuenta
        </Text>

        {/* Email */}
        <View style={globalStyles.inputGroup}>
          <Text style={[globalStyles.label, { color: darkMode ? "#fff" : "#000" }]}>Correo Electrónico</Text>
          <TextInput
            placeholder="tu@ejemplo.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={darkMode ? "#9ca3af" : "#6b7280"}
            style={[
              globalStyles.input,
              {
                backgroundColor: darkMode ? "#374151" : "#f9fafb",
                color: darkMode ? "#fff" : "#000",
              },
            ]}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
          />
        </View>

        {/* Password */}
        <PasswordInput
          value={password}
          onChangeText={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          darkMode={darkMode}
        />

        {/* Recordarme */}
        <View style={globalStyles.row}>
          <View style={globalStyles.rememberContainer}>
            <Switch value={rememberMe} onValueChange={setRememberMe} />
            <Text style={{ marginLeft: 8, color: darkMode ? "#e5e7eb" : "#000" }}>Recordarme</Text>
          </View>
        </View>

        {/* Botón Iniciar Sesión */}
        <Pressable
          style={[
            globalStyles.loginButton,
            { backgroundColor: darkMode ? "#1d4ed8" : "#2563eb" },
          ]}
          onPress={handleLogin}
        >
          <Text style={globalStyles.loginButtonText}>Iniciar Sesión</Text>
        </Pressable>

        {/* Registro */}
        <Text style={{ textAlign: "center", marginTop: 16, color: darkMode ? "#cbd5e1" : "#6b7280" }}>
          ¿No tienes una cuenta?{" "}
          <Pressable onPress={() => navigation.navigate("RegisterScreen")}>
            <Text style={{ color: darkMode ? "#60a5fa" : "#2563eb", fontWeight: "bold" }}>
              Regístrate
            </Text>
          </Pressable>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
