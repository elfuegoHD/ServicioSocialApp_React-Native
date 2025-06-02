import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Appearance
} from 'react-native';
import { DashStyle } from '../../../../styles/DashboardStyle'; 
import { ProcesoPostulacion } from './utils/ProcesoPostulacion';
import DetallePrograma from './utils/DetallePrograma';
import DashboardHeader from '../../../utils/DashboardHeader';

const OportunidadScreen = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(Appearance.getColorScheme() === 'dark');

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
      <DashboardHeader
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
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