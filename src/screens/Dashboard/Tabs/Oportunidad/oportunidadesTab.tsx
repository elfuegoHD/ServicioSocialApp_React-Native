import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MapPin, Clock } from "lucide-react-native";
import { DashStyle } from '../../../../styles/DashboardStyle';
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = { OportunidadScreen: { id: number } };  
type NavigationProp = import("@react-navigation/native-stack").NativeStackNavigationProp<RootStackParamList>;

interface OpportunityProps {
  darkMode: boolean;
}

const OpportunityCard = ({
  title,
  subtitle,
  location,
  schedule,
  description,
  badgeType,
  styles,
  id 
}: {
  title: string;
  subtitle: string;
  location: string;
  schedule: string;
  description: string;
  badgeType: 'engineering' | 'technology' | 'admin';
  styles: any;
  id: number; 
}) => {
  const badgeStyles = {
    engineering: styles.engineeringBadge,
    technology: styles.technologyBadge,
    admin: styles.adminBadge
  };
  
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={[styles.badge, badgeStyles[badgeType]]}>
          <Text style={styles.badgeText}>
            {badgeType === 'engineering' ? 'Ingeniería' : 
             badgeType === 'technology' ? 'Tecnología' : 'Administración'}
          </Text>
        </View>
      </View>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
      <View style={styles.cardDetails}>
        <View style={styles.detailItem}>
          <MapPin color={styles.detailIcon.color} size={16} />
          <Text style={styles.detailText}>{location}</Text>
        </View>
        <View style={styles.detailItem}>
          <Clock color={styles.detailIcon.color} size={16} />
          <Text style={styles.detailText}>{schedule}</Text>
        </View>
      </View>
      <Text style={styles.cardDescription}>{description}</Text>
      <TouchableOpacity 
        style={styles.cardButton}
        onPress={() => navigation.navigate("OportunidadScreen", { id })}>  
        <Text style={styles.cardButtonText}>Ver Detalles</Text>
      </TouchableOpacity>
    </View>
  );
};

const OpportunitiesTab: React.FC<OpportunityProps> = ({ darkMode }) => {
  const styles = DashStyle(darkMode);

  return (
    <View style={styles.tabContent}>
      <Text style={styles.sectionTitle}>Oportunidades Recomendadas</Text>

      <View style={styles.opportunitiesGrid}>
        {/* Ahora pasamos el id en cada OpportunityCard */}
        <OpportunityCard
          id={1}  // Cambiamos el valor a un número
          title="Asistente de Investigación"
          subtitle="Instituto Nacional de Investigación"
          location="Ciudad de México"
          schedule="Horario Flexible, 20 hrs/semana"
          description="Apoya en proyectos de investigación en el área de ingeniería de materiales."
          badgeType="engineering"
          styles={styles}
        />

        <OpportunityCard
          id={2}  // Cambiamos el valor a un número
          title="Desarrollo Web"
          subtitle="Secretaría de Educación Pública"
          location="Remoto"
          schedule="Matutino, 15 hrs/semana"
          description="Colabora en el desarrollo de plataformas educativas para escuelas públicas."
          badgeType="technology"
          styles={styles}
        />

        <OpportunityCard
          id={3}  // Cambiamos el valor a un número
          title="Apoyo Administrativo"
          subtitle="Instituto Mexicano del Seguro Social"
          location="Guadalajara"
          schedule="Vespertino, 25 hrs/semana"
          description="Apoya en la gestión de expedientes y atención a derechohabientes."
          badgeType="admin"
          styles={styles}
        />
      </View>
    </View>
  );
};

export default OpportunitiesTab;
