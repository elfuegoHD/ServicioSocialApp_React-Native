import React, { useState } from "react";
import { ScrollView, useColorScheme } from "react-native";
import { HeaderSection, HeroSection, SearchSection, FeaturesSection, FooterSection } from "./Sections";

const HomeScreen = () => {
  const systemTheme = useColorScheme();
  const [darkMode, setDarkMode] = useState(systemTheme === "dark");
  const toggleDarkMode = () => setDarkMode(prev => !prev);


  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: darkMode ? "#0f172a" : "#fff" }}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      <HeaderSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> {/* Header con botón de modo oscuro */}

      <HeroSection darkMode={darkMode} /> {/* Sección de héroe con título y botones */}

      <SearchSection darkMode={darkMode} /> {/* Sección de búsqueda con filtros */}

      <FeaturesSection darkMode={darkMode} /> {/* Sección de características con tarjetas */}

      <FooterSection /> {/* Sección de pie de página con información adicional */}
    </ScrollView>
  );
};

export default HomeScreen;
