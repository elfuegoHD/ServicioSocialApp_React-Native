import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  useWindowDimensions,
  Appearance
} from "react-native";
import { DashStyle } from '../../styles/DashboardStyle'; 
import ProfileTab from './Tabs/perfilTab';
import PostulacionesTab from './Tabs/postulacionesTab';
import { OportunidadesTab } from './Tabs/Oportunidad/oportunidadesTab';
import { FooterSection } from "../Home/Sections";
import DashboardHeader from "../utils/DashboardHeader";

const DashboardScreen = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(Appearance.getColorScheme() === 'dark');
  const [activeTab, setActiveTab] = useState("oportunidades");


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
      <DashboardHeader
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Dashboard del Estudiante</Text>

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