import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Appearance } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from '../../axiosConfig';
import { globalStyles } from "../../styles/globalStyles";
import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"


type RootStackParamList = {
  Dashboard: undefined
  RegisterScreen: undefined
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<NavigationProp>()
  const [darkMode, setDarkMode] = useState(Appearance.getColorScheme() === 'dark');
  const [formData, setFormData] = useState({
    correo: "",
    contrasena: "",
    recuerdame: false
  });

  // Escuchar cambios en el esquema de color del sistema
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setDarkMode(colorScheme === 'dark');
    });
    return () => subscription.remove();
  }, []);

  const handleChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: name === "recuerdame" ? !formData.recuerdame : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/login', formData);

      if (response.status === 200) {
        localStorage.setItem("user_id", response.data.id);
        localStorage.setItem("user_tipo", response.data.tipo);
        localStorage.setItem("token", response.data.token);


        if (response.data.tipo === 2) {
          alert("Bienvenido, administrador,Prox. Semestre");
        } else if (response.data.tipo === 1) {
          navigation.navigate("Dashboard");
        }
      }
    } catch (error) {
      alert(error.response?.data?.mensaje || "Error al iniciar sesión");
      console.log(error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ScrollView contentContainerStyle={[
      globalStyles.container,
      darkMode && globalStyles.darkContainer
    ]}>
      <TouchableOpacity
        style={globalStyles.toggleContainer}
        onPress={toggleDarkMode}
      >
        <View style={globalStyles.iconButton}>
          <Ionicons
            name={darkMode ? 'moon-outline' : 'sunny-outline'}
            size={20}
            color={darkMode ? 'white' : 'black'}
          />
        </View>
      </TouchableOpacity>

      <View style={[
        globalStyles.card,
        darkMode && globalStyles.darkCard,
        { marginHorizontal: 24, maxWidth: 400, width: '100%', alignSelf: 'center' }
      ]}>
        <Text style={[
          globalStyles.cardTitle,
          darkMode && globalStyles.darkTitle
        ]}>
          Iniciar Sesión
        </Text>
        <Text style={[
          globalStyles.cardSubtitle,
          darkMode && globalStyles.labelDark
        ]}>
          Ingresa tus credenciales para acceder a tu cuenta
        </Text>

        <View style={globalStyles.inputGroup}>
          <Text style={[
            globalStyles.label,
            darkMode && globalStyles.labelDark
          ]}>
            Correo Electrónico
          </Text>
          <TextInput
            style={[
              globalStyles.input,
              darkMode && globalStyles.inputDark
            ]}
            placeholder="tu@ejemplo.com"
            placeholderTextColor={darkMode ? '#9ca3af' : '#6b7280'}
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.correo as string}
            onChangeText={(text) => handleChange('correo', text)}
          />
        </View>

        <View style={globalStyles.inputGroup}>
          <Text style={[
            globalStyles.label,
            darkMode && globalStyles.labelDark
          ]}>
            Contraseña
          </Text>
          <View style={globalStyles.passwordContainer}>
            <TextInput
              style={[
                globalStyles.input,
                darkMode && globalStyles.inputDark,
                { flex: 1 }
              ]}
              placeholder="••••••••"
              placeholderTextColor={darkMode ? '#9ca3af' : '#6b7280'}
              secureTextEntry={!showPassword}
              value={formData.contrasena as string}
              onChangeText={(text) => handleChange('contrasena', text)}

            />
            <TouchableOpacity
              style={globalStyles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={18}
                color={darkMode ? '#9ca3af' : '#6b7280'}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View  style={globalStyles.row}>
          <View style={globalStyles.rememberContainer}>
            <TouchableOpacity
              style={[
                { width: 20, height: 20, borderRadius: 4, borderWidth: 1, marginRight: 8 },
                darkMode ? { borderColor: '#d1d5db' } : { borderColor: '#6b7280' },
                formData.recuerdame && { backgroundColor: '#2563eb', borderColor: '#2563eb' }
              ]}
              onPress={() => handleChange('recuerdame', !formData.recuerdame)}
            >
              {formData.recuerdame && (
                <Ionicons name="checkmark" size={14} color="white" style={{ alignSelf: 'center' }} />
              )}
            </TouchableOpacity>
            <Text style={[
              globalStyles.label,
              darkMode && globalStyles.labelDark
            ]}>
              
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            globalStyles.loginButton,
            { backgroundColor: '#2563eb' }
          ]}
          onPress={handleSubmit}
        >
          <Text style={globalStyles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <Text style={[
          globalStyles.cardSubtitle,
          darkMode && globalStyles.labelDark,
          { marginTop: 16 }
        ]}>
          ¿No tienes una cuenta?{' '}
          <Text
            style={{ color: '#2563eb', fontWeight: '600' }}
            onPress={() => navigation.navigate('RegisterScreen')}
          >
            Regístrate
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}