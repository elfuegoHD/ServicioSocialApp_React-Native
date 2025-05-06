import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Building2, Users, Phone, Mail, Globe, FileText } from 'lucide-react-native';

interface Contacto {
  nombre: string;
  telefono: string;
  email: string;
  sitioWeb: string;
}

interface Oportunidad {
  institucion: string;
  contacto: Contacto;
}

interface Styles {
  cardContainer: StyleProp<ViewStyle>;
  sectionTitle: StyleProp<TextStyle>;
  contactItem: StyleProp<ViewStyle>;
  contactText: StyleProp<TextStyle>;
  processStep: StyleProp<ViewStyle>;
  stepNumber: StyleProp<ViewStyle>;
  stepNumberText: StyleProp<TextStyle>;
  stepContent: StyleProp<ViewStyle>;
  stepTitle: StyleProp<TextStyle>;
  stepDescription: StyleProp<TextStyle>;
  docItem: StyleProp<ViewStyle>;
  docText: StyleProp<TextStyle>;
}

interface SeccionesInfoProps {
  oportunidad: Oportunidad;
  styles: Styles;
  darkMode: boolean;
}

const SeccionesInfo: React.FC<SeccionesInfoProps> = ({ oportunidad, styles, darkMode }) => {
  const textColor = darkMode ? '#ffffff' : '#1e293b'; 
  const iconColor = darkMode ? '#ffffff' : '#1e293b';
  const backgroundColor = darkMode ? '#1f2937' : '#ffffff'; 
  return (
    <>
      {/* Sección de Contacto */}
      <View style={[styles.cardContainer, { backgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Información de Contacto</Text>
        <View style={styles.contactItem}>
          <Building2 size={18} color={iconColor} />
          <Text style={[styles.contactText, { color: textColor }]}>{oportunidad.institucion}</Text>
        </View>
        <View style={styles.contactItem}>
          <Users size={18} color={iconColor} />
          <Text style={[styles.contactText, { color: textColor }]}>{oportunidad.contacto.nombre}</Text>
        </View>
        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => Linking.openURL(`tel:${oportunidad.contacto.telefono}`)}
        >
          <Phone size={18} color={iconColor} />
          <Text style={[styles.contactText, { color: textColor }]}>{oportunidad.contacto.telefono}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => Linking.openURL(`mailto:${oportunidad.contacto.email}`)}
        >
          <Mail size={18} color={iconColor} />
          <Text style={[styles.contactText, { color: textColor }]}>{oportunidad.contacto.email}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.contactItem}
          onPress={() => Linking.openURL(`https://${oportunidad.contacto.sitioWeb}`)}
        >
          <Globe size={18} color={iconColor} />
          <Text style={[styles.contactText, { color: textColor }]}>{oportunidad.contacto.sitioWeb}</Text>
        </TouchableOpacity>
      </View>

      {/* Proceso de Postulación */}
      <View style={[styles.cardContainer, { backgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Proceso de Postulación</Text>
        <View style={styles.processStep}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>1</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={[styles.stepTitle, { color: textColor }]}>Envía tu postulación</Text>
            <Text style={[styles.stepDescription, { color: textColor }]}>
              Completa el formulario de postulación y adjunta los documentos requeridos.
            </Text>
          </View>
        </View>
        <View style={styles.processStep}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>2</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={[styles.stepTitle, { color: textColor }]}>Revisión de documentos</Text>
            <Text style={[styles.stepDescription, { color: textColor }]}>
              La institución revisará tu perfil y documentos (tiempo estimado: 5 días hábiles).
            </Text>
          </View>
        </View>
        <View style={styles.processStep}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>3</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={[styles.stepTitle, { color: textColor }]}>Entrevista (si aplica)</Text>
            <Text style={[styles.stepDescription, { color: textColor }]}>
              Podrías ser contactado para una entrevista presencial o virtual.
            </Text>
          </View>
        </View>
        <View style={styles.processStep}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>4</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={[styles.stepTitle, { color: textColor }]}>Confirmación</Text>
            <Text style={[styles.stepDescription, { color: textColor }]}>
              Recibirás una notificación con el resultado de tu postulación.
            </Text>
          </View>
        </View>
      </View>

      {/* Documentos Requeridos */}
      <View style={[styles.cardContainer, { backgroundColor }]}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Documentos Requeridos</Text>
        <View style={styles.docItem}>
          <FileText size={18} color={iconColor} />
          <Text style={[styles.docText, { color: textColor }]}>Currículum Vitae</Text>
        </View>
        <View style={styles.docItem}>
          <FileText size={18} color={iconColor} />
          <Text style={[styles.docText, { color: textColor }]}>Constancia de Estudios</Text>
        </View>
        <View style={styles.docItem}>
          <FileText size={18} color={iconColor} />
          <Text style={[styles.docText, { color: textColor }]}>Carta de Presentación</Text>
        </View>
      </View>
    </>
  );
};

export default SeccionesInfo;

