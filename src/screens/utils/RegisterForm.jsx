import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";

const RegisterForm = ({
  darkMode,
  userType,
  setUserType,
  nombre,
  setNombre,
  apellido,
  setApellido,
  email,
  setEmail,
  universidad,
  setUniversidad,
  institucion,
  setInstitucion,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  globalStyles,
}) => {
  return (
    <>
      {/* Selector tipo de usuario */}
      <View style={globalStyles.radioGroup}>
        <Pressable onPress={() => setUserType("estudiante")} style={globalStyles.radioItem}>
          <View
            style={[
              globalStyles.radioCircle,
              userType === "estudiante" && { backgroundColor: darkMode ? "#60a5fa" : "#2563eb" },
            ]}
          />
          <Text style={{ color: darkMode ? "#fff" : "#000" }}>Estudiante</Text>
        </Pressable>

        <Pressable onPress={() => setUserType("institucion")} style={globalStyles.radioItem}>
          <View
            style={[
              globalStyles.radioCircle,
              userType === "institucion" && { backgroundColor: darkMode ? "#60a5fa" : "#2563eb" },
            ]}
          />
          <Text style={{ color: darkMode ? "#fff" : "#000" }}>Institución</Text>
        </Pressable>
      </View>

      {/* Nombre y Apellido */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 8 }}>
        <View style={{ flex: 1 }}>
          <Text style={[globalStyles.label, darkMode && globalStyles.labelDark]}>Nombre</Text>
          <TextInput
            value={nombre}
            onChangeText={setNombre}
            placeholder="Juan"
            placeholderTextColor={darkMode ? "#9ca3af" : "#6b7280"}
            style={[
              globalStyles.input,
              { backgroundColor: darkMode ? "#374151" : "#f3f4f6", color: darkMode ? "#fff" : "#000" },
            ]}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[globalStyles.label, darkMode && globalStyles.labelDark]}>Apellido</Text>
          <TextInput
            value={apellido}
            onChangeText={setApellido}
            placeholder="Pérez"
            placeholderTextColor={darkMode ? "#9ca3af" : "#6b7280"}
            style={[
              globalStyles.input,
              { backgroundColor: darkMode ? "#374151" : "#f3f4f6", color: darkMode ? "#fff" : "#000" },
            ]}
          />
        </View>
      </View>

      {/* Correo */}
      <View style={[globalStyles.inputGroup, { marginTop: 16 }]}>
        <Text style={[globalStyles.label, { color: darkMode ? "#fff" : "#000" }]}>Correo Electrónico</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="tu@ejemplo.com"
          keyboardType="email-address"
          placeholderTextColor={darkMode ? "#9ca3af" : "#6b7280"}
          style={[
            globalStyles.input,
            { backgroundColor: darkMode ? "#374151" : "#f3f4f6", color: darkMode ? "#fff" : "#000" },
          ]}
        />
      </View>

      {/* Campos específicos */}
      {userType === "estudiante" && (
        <View style={globalStyles.inputGroup}>
          <Text style={[globalStyles.label, { color: darkMode ? "#fff" : "#000" }]}>Universidad</Text>
          <TextInput
            value={universidad}
            onChangeText={setUniversidad}
            placeholder="UNAM, IPN, etc."
            placeholderTextColor={darkMode ? "#9ca3af" : "#6b7280"}
            style={[
              globalStyles.input,
              { backgroundColor: darkMode ? "#374151" : "#f3f4f6", color: darkMode ? "#fff" : "#000" },
            ]}
          />
        </View>
      )}

      {userType === "institucion" && (
        <View style={globalStyles.inputGroup}>
          <Text style={[globalStyles.label, { color: darkMode ? "#fff" : "#000" }]}>Nombre de la Institución</Text>
          <TextInput
            value={institucion}
            onChangeText={setInstitucion}
            placeholder="Ej. Secretaría de Educación Pública"
            placeholderTextColor={darkMode ? "#9ca3af" : "#6b7280"}
            style={[
              globalStyles.input,
              { backgroundColor: darkMode ? "#374151" : "#f3f4f6", color: darkMode ? "#fff" : "#000" },
            ]}
          />
        </View>
      )}

      {/* Contraseña */}
      <View style={globalStyles.inputGroup}>
        <Text style={[globalStyles.label, { color: darkMode ? "#fff" : "#000" }]}>Contraseña</Text>
        <View style={globalStyles.passwordContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry={!showPassword}
            placeholderTextColor={darkMode ? "#9ca3af" : "#6b7280"}
            style={[
              globalStyles.input,
              { flex: 1, backgroundColor: darkMode ? "#374151" : "#f3f4f6", color: darkMode ? "#fff" : "#000" },
            ]}
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
    </>
  );
};

export default RegisterForm;
