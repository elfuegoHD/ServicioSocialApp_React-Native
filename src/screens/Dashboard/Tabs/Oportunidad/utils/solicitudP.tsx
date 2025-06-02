import axios from '../../../../../axiosConfig'

export const enviarSolicitud = async () => {
  try {
    const estudianteId = localStorage.getItem('user_id');
    const programaId = localStorage.getItem('idProgramaSeleccionado');

    if (!estudianteId || !programaId) {
      alert('Faltan datos necesarios para enviar la solicitud.');
      return;
    }

    const payload = {
      idprograma: parseInt(programaId),
      idEstudiante: parseInt(estudianteId)
    };

    const response = await axios.post('http://localhost:3010/solicitudes', payload, {
      withCredentials: true
    });

    alert('Solicitud enviada correctamente');
    console.log(response.data);
  } catch (error) {
    console.error('Error al enviar solicitud:', error);
    alert('Hubo un error al enviar la solicitud.');
  }
};
