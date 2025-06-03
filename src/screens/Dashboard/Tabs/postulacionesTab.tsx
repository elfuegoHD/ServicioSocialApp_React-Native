import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal, Pressable, ActivityIndicator, } from "react-native";
import axios from "../../../axiosConfig";
import { CheckCircle, Clock as ClockIcon, AlertCircle, FileText } from "lucide-react-native";
import { DashStyle } from '../../../styles/DashboardStyle';


interface ApplicationProps {
  title: string;
  subtitle: string;
  status: 'accepted' | 'pending' | 'rejected';
  date: string;
  details: ApplicationData; // Datos completos para el modal
  onViewDetails: (details: ApplicationData) => void;
  styles: any;
}

const ApplicationCard: React.FC<ApplicationProps> = ({
  title,
  subtitle,
  status,
  date,
  details,
  onViewDetails,
  styles
}) => {
  const statusConfig = {
    accepted: {
      badgeStyle: styles.acceptedBadge,
      icon: <CheckCircle color="#10B981" size={16} />,
      actions: (
        <>
          <TouchableOpacity style={styles.detailsButton} onPress={() => onViewDetails(details)}>
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
          <TouchableOpacity style={styles.detailsButton} onPress={() => onViewDetails(details)}>
            <FileText color={styles.icon.color} size={16} />
            <Text style={styles.detailsButtonText}>Ver Detalles</Text>
          </TouchableOpacity>

        </>
      )
    },
    rejected: {
      badgeStyle: styles.rejectedBadge,
      icon: <AlertCircle color="#EF4444" size={16} />,
      actions: (
        <>
          <TouchableOpacity style={styles.detailsButton} onPress={() => onViewDetails(details)}>
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

interface ApplicationData {
  id: number;
  titulo: string;
  institucion: string;
  estatus: 'accepted' | 'pending' | 'rejected';
  fechaPostulacion: string;
  descripcion: string;
  fechafin: string;
  fechainicio: string;
  correo: string;
}

const PostulacionesTab: React.FC<PostulacionesProps> = ({ darkMode }) => {
  const styles = DashStyle(darkMode);
  const [applications, setApplications] = useState<ApplicationData[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<ApplicationData | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
          console.warn('Usuario no identificado');
          setApplications([]);
          return;
        }

        const response = await axios.get(`/solicitudes/estudiante/${userId}`);
        const dataArray = JSON.parse(response.data);

        const data = dataArray.map((app: any) => ({
          id: app.idsolicitud,
          titulo: app.titulo,
          institucion: app.razonsocial,
          estatus: app.estatus === 1 ? 'pending' : app.estatus === 2 ? 'accepted' : 'rejected',
          fechaPostulacion: new Date(app.fechasolicitud).toLocaleDateString(),
          descripcion: app.descripcion,
          fechafin: new Date(app.fechafin).toLocaleDateString(),
          fechainicio: new Date(app.fechainicio).toLocaleDateString(),
          correo: app.correo,
        }));

        setApplications(data);
      } catch (error) {
        console.error("Error al cargar postulaciones:", error);
      }
    };

    fetchApplications();
  }, []);

  const handleViewDetails = (application: ApplicationData) => {
    setSelectedApplication(application);
    setModalVisible(true);
  };

  return (
    <>
      <ScrollView style={styles.tabContent}>

        <Text style={styles.sectionTitle}>Mis Postulaciones</Text>

        <View style={styles.applicationsList}>
          {applications.length === 0 ? (
            <ActivityIndicator size="large" />

          ) : (
            applications.map(app => (
              <ApplicationCard
                key={app.id}
                title={app.titulo}
                subtitle={app.institucion}
                status={app.estatus}
                date={app.fechaPostulacion}
                details={app}
                onViewDetails={handleViewDetails}
                styles={styles}
              />
            ))
          )}
        </View>
      </ScrollView>

      {/* Modal para detalles */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedApplication && (
              <>
                <Text style={styles.modalTitle}>{selectedApplication.titulo}</Text>
                <Text style={styles.modalSubtitle}>{selectedApplication.institucion}</Text>
                <Text style={styles.modalText}><Text style={{ fontWeight: 'bold' }}>Descripción:</Text> {selectedApplication.descripcion}</Text>
                <Text style={styles.modalText}><Text style={{ fontWeight: 'bold' }}>Inicio:</Text> {selectedApplication.fechainicio}</Text>
                <Text style={styles.modalText}><Text style={{ fontWeight: 'bold' }}>Fin:</Text> {selectedApplication.fechafin}</Text>
                <Text style={styles.modalText}><Text style={{ fontWeight: 'bold' }}>Correo de contacto:</Text> {selectedApplication.correo}</Text>

                <Pressable
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Cerrar</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>

    </>
  );
};

export default PostulacionesTab;
