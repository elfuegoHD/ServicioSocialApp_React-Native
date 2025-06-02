import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import LoginScreen from "../screens/Log&Reg/LoginScreen";
import RegisterScreen from "../screens/Log&Reg/RegisterScreen";
import Dashboard from "../screens/Dashboard/DashboardScreen";
import OportunidadScreen from "../screens/Dashboard/Tabs/Oportunidad/oportunidadScreen";

// Definimos los tipos de rutas y sus parámetros (si los tienen)
type RootStackParamList = {
  LoginScreen: undefined;  // Pantalla de Login sin parámetros
  RegisterScreen: undefined;  // Pantalla de Registro sin parámetros
  Home: undefined;  
  Dashboard: undefined; 
  oportunidadScreen: {id: string};  // Pantalla de Oportunidad sin parámetros

};

// Creamos el navegador de pila (stack) con los tipos definidos
const Stack = createNativeStackNavigator<RootStackParamList>();

// Componente principal de navegación
export default function AppNavigator() {
  return (
    <NavigationContainer> 
      <Stack.Navigator 
        id="Home"
        screenOptions={{ headerShown: false }}  // Ocultar header en todas las pantallas
      >
        {/* Definición de las pantallas */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="oportunidadScreen" component={OportunidadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}