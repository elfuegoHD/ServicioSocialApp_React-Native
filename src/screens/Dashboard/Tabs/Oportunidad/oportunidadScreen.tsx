import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  useWindowDimensions,
  Appearance
} from 'react-native';
import { 
  MapPin, 
  Clock,  
  User, 
  LogOut, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Calendar,
  Users
} from 'lucide-react-native';
import { DashStyle } from '../../../../styles/DashboardStyle'; 
import { oportunidades } from './Seccions/oportunidades';
import SeccionesInfo from './Seccions/SeccionsInfo';
import {FooterSection} from '../../../Home/Sections';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {Home: undefined; Dashboard: undefined; };
type NavigationProp = import("@react-navigation/native-stack").NativeStackNavigationProp<RootStackParamList>;


const OportunidadScreen = ({ route }) => {
  const { id } = route.params;
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(Appearance.getColorScheme() === 'dark');
  const [activeTab, setActiveTab] = useState("requisitos");
  const oportunidad = oportunidades.find((op) => op.id === id);
   const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setDarkMode(colorScheme === 'dark');
    });
    return () => subscription.remove();
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const styles = DashStyle(darkMode);

  if (!oportunidad) {
    return <Text>Oportunidad no encontrada</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <View style={styles.headerLeft}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate("Dashboard")}
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
          <Text style={styles.title}>Detalles de la Oportunidad</Text>

          {/* Tabs */}
          <View style={[
            styles.tabsContainer,
            styles.cardContainer,
            { backgroundColor: darkMode ? '#1f2937' : '#ffffff', paddingHorizontal: 16 }
          ]}>
            
          {/* Información principal de la oportunidad */}
          <View style={styles.infoContainer}>
              <Text style={[styles.title, { color: darkMode ? '#ffffff' : '#1e293b', fontSize: 20 }]}>
                {oportunidad.titulo}
              </Text>
              <Text style={[styles.subtitle, { color: darkMode ? '#9ca3af' : '#4b5563', marginBottom: 8 }]}>
                {oportunidad.institucion}
              </Text>

              <View style={styles.detailsGroup}>
                <View style={styles.detailItem}>
                  <MapPin size={18} color={darkMode ? '#60a5fa' : '#2563eb'} />
                  <Text style={[styles.detailText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>
                    {oportunidad.ubicacion} ({oportunidad.modalidad})
                  </Text>
                </View>

                <View style={styles.detailItem}>
                  <Clock size={18} color={darkMode ? '#60a5fa' : '#2563eb'} />
                  <Text style={[styles.detailText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>
                    {oportunidad.horario}
                  </Text>
                </View>

                <View style={styles.detailItem}>
                  <Calendar size={18} color={darkMode ? '#60a5fa' : '#2563eb'} />
                  <Text style={[styles.detailText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>
                    Inicio: {oportunidad.fechaInicio} • Duración: {oportunidad.duracion}
                  </Text>
                </View>

                <View style={styles.detailItem}>
                  <Users size={18} color={darkMode ? '#60a5fa' : '#2563eb'} />
                  <Text style={[styles.detailText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>
                    {oportunidad.plazas} plazas disponibles
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.tabsList}>
              <TouchableOpacity 
                style={[
                  styles.tabTrigger, 
                  activeTab === "requisitos" && { 
                    ...styles.activeTab, 
                    backgroundColor: darkMode ? '#374151' : '#e2e8f0'
                  }
                ]}
                onPress={() => setActiveTab("requisitos")}
              >
                <Text style={[styles.tabText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>
                  Requisitos
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[
                  styles.tabTrigger, 
                  activeTab === "actividades" && { 
                    ...styles.activeTab, 
                    backgroundColor: darkMode ? '#374151' : '#e2e8f0'
                  }
                ]}
                onPress={() => setActiveTab("actividades")}
              >
                <Text style={[styles.tabText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>
                  Actividades
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[
                  styles.tabTrigger, 
                  activeTab === "beneficios" && { 
                    ...styles.activeTab, 
                    backgroundColor: darkMode ? '#374151' : '#e2e8f0'
                  }
                ]}
                onPress={() => setActiveTab("beneficios")}
              >
                <Text style={[styles.tabText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>
                  Beneficios
                </Text>
              </TouchableOpacity>
            </View>

            {/* Contenido de las pestañas */}
            {activeTab === "requisitos" && (
            <View style={[styles.sectionContent, { backgroundColor: darkMode ? '#1f2937' : '#ffffff' }]}>
              {oportunidad.requisitos.map((requisito, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={[styles.bullet, { color: darkMode ? '#ffffff' : '#1e293b' }]}>•</Text>
                  <Text style={[styles.listText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>{requisito}</Text>
                </View>
              ))}
            </View>
            )}

            {activeTab === "actividades" && (
              <View style={[styles.sectionContent, { backgroundColor: darkMode ? '#1f2937' : '#ffffff' }]}>
                {oportunidad.actividades.map((actividad, index) => (
                  <View key={index} style={styles.listItem}>
                    <Text style={[styles.bullet, { color: darkMode ? '#ffffff' : '#1e293b' }]}>•</Text>
                    <Text style={[styles.listText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>{actividad}</Text>
                  </View>
                ))}
              </View>
            )}

            {activeTab === "beneficios" && (
              <View style={[styles.sectionContent, { backgroundColor: darkMode ? '#1f2937' : '#ffffff' }]}>
                {oportunidad.beneficios.map((beneficio, index) => (
                  <View key={index} style={styles.listItem}>
                    <Text style={[styles.bullet, { color: darkMode ? '#ffffff' : '#1e293b' }]}>•</Text>
                    <Text style={[styles.listText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>{beneficio}</Text>
                  </View>
                ))}
              </View>
            )}

          </View>

          <SeccionesInfo 
          oportunidad={oportunidad} 
          styles={styles} 
          darkMode={true} // o true según tu tema
        />
        </View>
        <FooterSection />
      </ScrollView>


      
    </View>
  );
};

export default OportunidadScreen;
