import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckCircle, Clock as ClockIcon, AlertCircle, FileText } from "lucide-react-native";
import { DashStyle } from '../../../styles/DashboardStyle';

interface ApplicationProps {
  title: string;
  subtitle: string;
  status: 'accepted' | 'pending' | 'rejected';
  date: string;
  styles: any;
}

const ApplicationCard: React.FC<ApplicationProps> = ({ 
  title, 
  subtitle, 
  status, 
  date, 
  styles 
}) => {
  const statusConfig = {
    accepted: {
      badgeStyle: styles.acceptedBadge,
      icon: <CheckCircle color="#10B981" size={16} />,
      actions: (
        <>
          <TouchableOpacity style={styles.detailsButton}>
            <FileText color={styles.icon.color} size={16} />
            <Text style={styles.detailsButtonText}>Ver Detalles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contactar</Text>
          </TouchableOpacity>
        </>
      )
    },
    pending: {
      badgeStyle: styles.pendingBadge,
      icon: <ClockIcon color="#F59E0B" size={16} />,
      actions: (
        <>
          <TouchableOpacity style={styles.detailsButton}>
            <FileText color={styles.icon.color} size={16} />
            <Text style={styles.detailsButtonText}>Ver Detalles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </>
      )
    },
    rejected: {
      badgeStyle: styles.rejectedBadge,
      icon: <AlertCircle color="#EF4444" size={16} />,
      actions: (
        <>
          <TouchableOpacity style={styles.detailsButton}>
            <FileText color={styles.icon.color} size={16} />
            <Text style={styles.detailsButtonText}>Ver Detalles</Text>
          </TouchableOpacity>
        </>
      )
    }
  };

  const { badgeStyle, icon, actions } = statusConfig[status];
  const statusText = {
    accepted: 'Aceptada',
    pending: 'En Revisión',
    rejected: 'Rechazada'
  }[status];

  return (
    <View style={styles.applicationCard}>
      <View style={styles.applicationContent}>
        <View style={styles.applicationHeader}>
          <Text style={styles.applicationTitle}>{title}</Text>
          <View style={[styles.badge, badgeStyle]}>
            <Text style={styles.badgeText}>{statusText}</Text>
          </View>
        </View>
        <Text style={styles.applicationSubtitle}>{subtitle}</Text>
        <View style={styles.applicationDetail}>
          {icon}
          <Text style={styles.applicationDetailText}>{date}</Text>
        </View>
      </View>
      <View style={styles.applicationActions}>
        {actions}
      </View>
    </View>
  );
};

interface PostulacionesProps {
  darkMode: boolean;
}

const PostulacionesTab: React.FC<PostulacionesProps> = ({ darkMode }) => {
  const styles = DashStyle(darkMode);

  const applications = [
    {
      id: '1',
      title: 'Asistente de Investigación',
      subtitle: 'Instituto Nacional de Investigación',
      status: 'accepted' as const,
      date: 'Postulado el 15 de marzo, 2023'
    },
    {
      id: '2',
      title: 'Desarrollo Web',
      subtitle: 'Secretaría de Educación Pública',
      status: 'pending' as const,
      date: 'Postulado el 10 de abril, 2023'
    },
    {
      id: '3',
      title: 'Apoyo Administrativo',
      subtitle: 'Instituto Mexicano del Seguro Social',
      status: 'rejected' as const,
      date: 'Postulado el 5 de febrero, 2023'
    }
  ];

  return (
    <View style={styles.tabContent}>
      <Text style={styles.sectionTitle}>Mis Postulaciones</Text>

      <View style={styles.applicationsList}>
        {applications.map(app => (
          <ApplicationCard
            key={app.id}
            title={app.title}
            subtitle={app.subtitle}
            status={app.status}
            date={app.date}
            styles={styles}
          />
        ))}
      </View>
    </View>
  );
};

export default PostulacionesTab;