import axios from "axios";
axios.defaults.baseURL = "http://localhost:3010"; // URL base global

axios.defaults.withCredentials = true; // Incluir cookies globalmente

export const obtenerCookie = (nombre) => {
    nombre = nombre.trim();
    if (!document.cookie) {
        return null; // Si no hay cookies disponibles
    }
    const cookieres= document.cookie;
    const cookie = cookieres.split('; ').find(row => row.startsWith(`${nombre}=`));
    return cookie ? cookie.split('=')[1] : null;
}

export default axios;