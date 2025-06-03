import React from "react";
import { Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Search, Clock, MapPin, BookOpen, Moon, Sun } from "lucide-react-native";
import { globalStyles } from "../../styles/globalStyles";
import { FeatureCard, FilterBox, Card } from "./Components";

type RootStackParamList = { LoginScreen: undefined; RegisterScreen: undefined };
type NavigationProp = import("@react-navigation/native-stack").NativeStackNavigationProp<RootStackParamList>;

export const HeaderSection = ({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) => (
  <View style={globalStyles.darkModeButton}>
    <Pressable onPress={toggleDarkMode} style={globalStyles.iconButton}>
      {/* Botón para alternar entre modo oscuro y claro */}
      {darkMode ? <Sun size={20} color="#000" /> : <Moon size={20} color="#000" />}
    </Pressable>
  </View>
);

export const HeroSection = ({ darkMode }: { darkMode: boolean }) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={[globalStyles.hero, { backgroundColor: darkMode ? "#1e3a8a" : "#2563eb" }]}>
      <Text style={[globalStyles.heroTitle, { color: "#fff" }]}>Encuentra tu Servicio Social Ideal</Text>
      <Text style={[globalStyles.heroText, { color: "#e0f2fe" }]}>
        Conectamos estudiantes con instituciones públicas para oportunidades adaptadas a ti.
      </Text>
      <View style={globalStyles.heroButtons}>
        <Pressable
          style={[globalStyles.primaryButton, darkMode && { backgroundColor: "#1e293b" }]}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={globalStyles.primaryButtonText}>Registrarse</Text>
        </Pressable>
        <Pressable
          style={[globalStyles.secondaryButton, { borderColor: "#fff", borderWidth: 1 }]}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={{ color: "#fff" }}>Iniciar Sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export const SearchSection = ({ darkMode }: { darkMode: boolean }) => (
  <View style={{ padding: 20 }}>
    <Card style={{ backgroundColor: darkMode ? "#1e293b" : "#f9fafb" }}>
      <Text style={[globalStyles.TitleText, { color: darkMode ? "#fff" : "#000" }]}>
        Busca Oportunidades de Servicio Social
      </Text>
      <View style={globalStyles.filterRow}>
        <FilterBox icon={<BookOpen color={darkMode ? "#60a5fa" : "#2563eb"} />} label="Área de Estudio" darkMode={darkMode} />
        <FilterBox icon={<MapPin color={darkMode ? "#60a5fa" : "#2563eb"} />} label="Ubicación" darkMode={darkMode} />
        <FilterBox icon={<Clock color={darkMode ? "#60a5fa" : "#2563eb"} />} label="Horario" darkMode={darkMode} />
      </View>
      <Pressable style={[globalStyles.searchButton, darkMode && { backgroundColor: "#1d4ed8" }]}>
        <Search size={16} color="#fff" style={{ marginRight: 8 }} />
        <Text style={{ color: "#fff", fontWeight: "600" }}>Buscar Oportunidades</Text>
      </Pressable>
    </Card>
  </View>
);

export const FeaturesSection = ({ darkMode }: { darkMode: boolean }) => (
  <View style={{ padding: 20 }}>
    <Text style={[globalStyles.TitleText, { color: darkMode ? "#fff" : "#000" }]}>
      ¿Por qué usar nuestra plataforma?
    </Text>

    <FeatureCard
      icon={
        <View style={[globalStyles.backGroundIcon, { backgroundColor: darkMode ? "#1e40af20" : "#e0f2fe" }]}>
          <Search size={24} color={darkMode ? "#60a5fa" : "#2563eb"} />
        </View>
      }
      title="Búsqueda Personalizada"
      description="Filtra oportunidades según tu área de estudio, ubicación y horario."
      darkMode={darkMode}
    />

    <FeatureCard
      icon={
        <View style={[globalStyles.backGroundIcon, { backgroundColor: darkMode ? "#1e40af20" : "#e0f2fe" }]}>
          <Clock size={24} color={darkMode ? "#60a5fa" : "#2563eb"} />
        </View>
      }
      title="Ahorro de Tiempo"
      description="Accede a toda la información actualizada en un solo lugar."
      darkMode={darkMode}
    />

    <FeatureCard
      icon={
        <View style={[globalStyles.backGroundIcon, { backgroundColor: darkMode ? "#1e40af20" : "#e0f2fe" }]}>
          <BookOpen size={24} color={darkMode ? "#60a5fa" : "#2563eb"} />
        </View>
      }
      title="Desarrollo Profesional"
      description="Encuentra oportunidades que complementen tu formación."
      darkMode={darkMode}
    />
  </View>
);

export const FooterSection = () => {
  const year = new Date().getFullYear();
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ color: "#94a3b8", fontSize: 12, textAlign: "center", marginTop: 16 }}>
        © {year} Plataforma de Servicio Social. Todos los derechos reservados.
      </Text>
    </View>
  );
};
