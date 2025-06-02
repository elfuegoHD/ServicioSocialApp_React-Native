import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { MapPin, Clock, Calendar, Users, Bookmark, Share2 } from 'lucide-react-native' 
import axios from '../../../../axiosConfig'
import { DashStyle } from '../../../../styles/DashboardStyle'
import { enviarSolicitud } from './solicitudP'

interface ProcesoPostulacionProps {
  darkMode: boolean
}
const DetallePrograma: React.FC<ProcesoPostulacionProps> = ({ darkMode }) => {
  const [oportunidad, setOportunidad] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [username, setUsername] = useState('Cargando nombre...')
  const [activeTab, setActiveTab] = useState<'descripcion' | 'requisitos' | 'actividades' | 'beneficios'>('descripcion')

  const styles = DashStyle(darkMode)

  useEffect(() => {
    // Carga usuario
    const userId = localStorage.getItem('user_id')
    if (!userId) {
      setUsername('Usuario no identificado')
      return
    }

    axios.get(`/estudiantes/nombre/${userId}`, { withCredentials: true })
      .then(res => {
        const nombre = res.data?.[0]?.nombre || 'Nombre no encontrado'
        setUsername(nombre)
      })
      .catch(() => setUsername('Error al cargar nombre'))
  }, [])

  useEffect(() => {
    const id = localStorage.getItem("idProgramaSeleccionado")
    if (!id) {
      setError("No se encontró el ID del programa")
      setLoading(false)
      return
    }

    axios.get(`/programas/programa/${id}`)
      .then(res => {
        const data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data
        const p = data?.[0]

        const procesarTexto = (txt) => {
          if (!txt) return ['No especificado']
          if (Array.isArray(txt)) return txt.length ? txt : ['No especificado']

          const trimmed = txt.trim().toLowerCase()
          if (trimmed === '' || trimmed === 'xx') return ['No especificado']

          const lines = txt.split('\n').filter(l => l.trim() !== '')
          return lines.length ? lines : [txt]
        }

        setOportunidad({
          ...p,
          requisitos: procesarTexto(p.requisitos),
          actividades: procesarTexto(p.actividades),
          beneficios: procesarTexto(p.beneficios),
          horario: p.horario || 'Horario no especificado',
          duracion: p.duracion || 'Duración no especificada',
          fechaInicio: p.fechainicio ? new Date(p.fechainicio).toLocaleDateString() : 'Fecha no especificada',
          plazas: p.cupo,
          modalidad: p.modalidad === 1 ? 'Presencial' : 'Otra modalidad'
        })

        setLoading(false)
      })
      .catch(err => {
        setError('Error al obtener el programa: ' + err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <Text>Cargando...</Text>
  if (error) return <Text>Error: {error}</Text>
  if (!oportunidad) return null

  return (
    <View style={[
      styles.tabsContainer,
      styles.cardContainer,
      { backgroundColor: darkMode ? '#1f2937' : '#ffffff', paddingHorizontal: 16 }
    ]}>

      <View style={styles.infoContainer}>
        <Text style={[styles.title, { color: darkMode ? '#ffffff' : '#1e293b', fontSize: 20 }]}>
          {oportunidad.titulo}
        </Text>
        <Text style={[styles.subtitle, { color: darkMode ? '#9ca3af' : '#4b5563', marginBottom: 8 }]}>
          {oportunidad.razonsocial}
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
        {(['descripcion', 'requisitos', 'actividades', 'beneficios'] as Array<'descripcion' | 'requisitos' | 'actividades' | 'beneficios'>).map(tab => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabTrigger,
              activeTab === tab && {
                ...styles.activeTab,
                backgroundColor: darkMode ? '#374151' : '#e2e8f0'
              }
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === "descripcion" && (
        <View style={[styles.sectionContent, { backgroundColor: darkMode ? '#1f2937' : '#ffffff' }]}>
          <Text style={[styles.descriptionText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>
            {oportunidad.descripcion}
          </Text>
        </View>
      )}

      {activeTab === "requisitos" && (
        <View style={[styles.sectionContent, { backgroundColor: darkMode ? '#1f2937' : '#ffffff' }]}>
          {oportunidad.requisitos.map((requisito, i) => (
            <View key={i} style={styles.listItem}>
              <Text style={[styles.bullet, { color: darkMode ? '#ffffff' : '#1e293b' }]}>•</Text>
              <Text style={[styles.listText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>{requisito}</Text>
            </View>
          ))}
        </View>
      )}

      {activeTab === "actividades" && (
        <View style={[styles.sectionContent, { backgroundColor: darkMode ? '#1f2937' : '#ffffff' }]}>
          {oportunidad.actividades.map((actividad, i) => (
            <View key={i} style={styles.listItem}>
              <Text style={[styles.bullet, { color: darkMode ? '#ffffff' : '#1e293b' }]}>•</Text>
              <Text style={[styles.listText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>{actividad}</Text>
            </View>
          ))}
        </View>
      )}

      {activeTab === "beneficios" && (
        <View style={[styles.sectionContent, { backgroundColor: darkMode ? '#1f2937' : '#ffffff' }]}>
          {oportunidad.beneficios.map((beneficio, i) => (
            <View key={i} style={styles.listItem}>
              <Text style={[styles.bullet, { color: darkMode ? '#ffffff' : '#1e293b' }]}>•</Text>
              <Text style={[styles.listText, { color: darkMode ? '#ffffff' : '#1e293b' }]}>{beneficio}</Text>
            </View>
          ))}
        </View>
      )}

      {/*bloque de botones */}
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 24,
        justifyContent: 'space-between'
        
      }}>
        <TouchableOpacity
          onPress={enviarSolicitud}
          style={{
            flex: 1,
            backgroundColor: darkMode ? '#2563eb' : '#3b82f6',
            paddingVertical: 12,
            borderRadius: 6,
            alignItems: 'center',
            marginRight: 8,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>Postularme</Text>
        </TouchableOpacity>


      </View>

     

    </View>
  )
}

export default DetallePrograma
