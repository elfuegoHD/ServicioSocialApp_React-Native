import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,  
  useWindowDimensions,
  Appearance
} from "react-native";
import { 
  Search, 
  BookOpen, 
  MapPin, 
  Clock, 
  User, 
  LogOut, 
  Menu, 
  X, 
  Moon, 
  Sun 
} from "lucide-react-native";
import { DashStyle } from '../../styles/DashboardStyle'; 
import ProfileTab from './Tabs/perfilTab';
import PostulacionesTab from './Tabs/postulacionesTab';
import { OportunidadesTab } from './Tabs/Oportunidad/oportunidadesTab';
import { FooterSection } from "../Home/Sections";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {Home: undefined; Dashboard: undefined; };
type NavigationProp = import("@react-navigation/native-stack").NativeStackNavigationProp<RootStackParamList>;

const DashboardScreen = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(Appearance.getColorScheme() === 'dark');
  const [activeTab, setActiveTab] = useState("oportunidades");
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setDarkMode(colorScheme === 'dark');
    });
    return () => subscription.remove();
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const styles = DashStyle(darkMode);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
          <TouchableOpacity 
            onPress={() => navigation.navigate("Dashboard")} // Actualmente va a "dashboard", lo cambiarás
          >
            <Text style={styles.logo}>ServicioSocial</Text>
          </TouchableOpacity>
          </View>

          {isMobile ? (
            <View style={styles.mobileHeaderRight}>
              <TouchableOpacity onPress={toggleDarkMode} style={styles.iconButton}>
                {darkMode ? <Sun color={styles.icon.color} size={20} /> : <Moon color={styles.icon.color} size={20} />}
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => setMobileMenuOpen(!mobileMenuOpen)} 
                style={styles.menuButton}
              >
                {mobileMenuOpen ? <X color={styles.icon.color} size={24} /> : <Menu color={styles.icon.color} size={24} />}
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.headerRight}>
              <TouchableOpacity onPress={toggleDarkMode} style={styles.iconButton}>
                {darkMode ? <Sun color={styles.icon.color} size={20} /> : <Moon color={styles.icon.color} size={20} />}
              </TouchableOpacity>

              <View style={styles.userInfo}>
                <View style={styles.userAvatar}>
                  <User color={styles.userIcon.color} size={18} />
                </View>
                <Text style={styles.userName}>Juan Pérez</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")} // Redirigir a HomeScreen
                style={styles.logoutButton}
              >
                <LogOut color={styles.icon.color} size={18} />
                <Text style={styles.logoutText}>Salir</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <View style={styles.mobileMenu}>
          <View style={styles.mobileUserInfo}>
            <View style={styles.mobileUserAvatar}>
              <User color={styles.userIcon.color} size={18} />
            </View>
            <Text style={styles.mobileUserName}>Juan Pérez</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.mobileMenuItem}>
            <LogOut color={styles.icon.color} size={18} />
            <Text style={styles.mobileMenuText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Dashboard del Estudiante</Text>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <Search color={styles.icon.color} size={20} />
              <TextInput
                placeholder="Buscar oportunidades..."
                placeholderTextColor={styles.placeholder.color}
                style={styles.searchInput}
              />
            </View>
            <View style={styles.filterButtons}>
              <TouchableOpacity style={styles.filterButton}>
                <BookOpen color={styles.icon.color} size={16} />
                <Text style={styles.filterButtonText}>Área</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <MapPin color={styles.icon.color} size={16} />
                <Text style={styles.filterButtonText}>Ubicación</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Clock color={styles.icon.color} size={16} />
                <Text style={styles.filterButtonText}>Horario</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Dashboard Tabs */}
          <View style={styles.tabsContainer}>
            <View style={styles.tabsList}>
              <TouchableOpacity 
                style={[styles.tabTrigger, activeTab === "oportunidades" && styles.activeTab]}
                onPress={() => setActiveTab("oportunidades")}
              >
                <Text style={styles.tabText}>Oportunidades</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tabTrigger, activeTab === "postulaciones" && styles.activeTab]}
                onPress={() => setActiveTab("postulaciones")}
              >
                <Text style={styles.tabText}>Mis Postulaciones</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tabTrigger, activeTab === "perfil" && styles.activeTab]}
                onPress={() => setActiveTab("perfil")}
              >
                <Text style={styles.tabText}>Mi Perfil</Text>
              </TouchableOpacity>
            </View>

            {activeTab === "oportunidades" && <OportunidadesTab darkMode={darkMode}  />}
            {activeTab === "postulaciones" && <PostulacionesTab darkMode={darkMode} />}
            {activeTab === "perfil" && <ProfileTab darkMode={darkMode} />}
          </View>
        </View>
      </ScrollView>

      <FooterSection />
    </View>
  );
};

export default DashboardScreen;