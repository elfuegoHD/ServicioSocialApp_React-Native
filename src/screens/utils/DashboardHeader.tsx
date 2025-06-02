import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { User, LogOut, Menu, X, Moon, Sun } from "lucide-react-native";
import { DashStyle } from '../../styles/DashboardStyle';
import { useNavigation } from "@react-navigation/native";
import axiosInstance from '../../axiosConfig';

type DashboardHeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

type RootStackParamList = { Home: undefined; Dashboard: undefined; };
type NavigationProp = import("@react-navigation/native-stack").NativeStackNavigationProp<RootStackParamList>;

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  darkMode,
  toggleDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const navigation = useNavigation<NavigationProp>();
  const styles = DashStyle(darkMode);

  const [userName, setUserName] = useState<string>("Cargando...");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
          setUserName("Usuario");
          return;
        }
        const response = await axiosInstance.get(`/estudiantes/nombre/${userId}`, { withCredentials: true });
        setUserName(response.data[0]?.nombre ?? "Usuario");
      } catch (error) {
        console.error("Error al cargar el nombre de usuario:", error);
        setUserName("Usuario");
      }
    };

    fetchUserName();
  }, []);

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
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
              <Text style={styles.userName}>{userName}</Text>
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

      {isMobile && mobileMenuOpen && (
        <View style={styles.mobileMenu}>
          <View style={styles.mobileUserInfo}>
            <View style={styles.mobileUserAvatar}>
              <User color={styles.userIcon.color} size={18} />
            </View>
            <Text style={styles.mobileUserName}>{userName}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.mobileMenuItem}>
            <LogOut color={styles.icon.color} size={18} />
            <Text style={styles.mobileMenuText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DashboardHeader;
