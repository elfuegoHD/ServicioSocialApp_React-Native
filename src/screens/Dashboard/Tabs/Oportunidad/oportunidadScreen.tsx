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
  User, 
  LogOut, 
  Menu, 
  X, 
  Moon, 
  Sun, 
} from 'lucide-react-native';
import { DashStyle } from '../../../../styles/DashboardStyle'; 
import { useNavigation } from '@react-navigation/native';
import { ProcesoPostulacion } from './ProcesoPostulacion';
import DetallePrograma from './DetallePrograma';

type RootStackParamList = {Home: undefined; Dashboard: undefined; };
type NavigationProp = import("@react-navigation/native-stack").NativeStackNavigationProp<RootStackParamList>;

const OportunidadScreen = ({ route }) => {
  const { id } = route.params;
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(Appearance.getColorScheme() === 'dark');
 
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
                onPress={() => navigation.navigate("Home")}
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
          <DetallePrograma darkMode={darkMode} />

          {/* Proceso de Postulación */}
          <ProcesoPostulacion darkMode={darkMode} />

        </View>
      </ScrollView>
    </View>
  );
};

export default OportunidadScreen;