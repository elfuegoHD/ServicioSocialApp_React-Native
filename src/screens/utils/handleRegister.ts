import { Alert, Platform } from "react-native";

interface RegisterParams {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  universidad: string;
  institucion: string;
  userType: "estudiante" | "institucion";
  termsAccepted: boolean;
}

export const handleRegister = ({
  nombre,
  apellido,
  email,
  password,
  universidad,
  institucion,
  userType,
  termsAccepted,
}: RegisterParams) => {
  if (!nombre || !apellido || !email || !password) {
    const msg = "Por favor completa todos los campos obligatorios.";
    Platform.OS === "web" ? window.alert(msg) : Alert.alert("Campos vacíos", msg);
    return false;
  }

  if (userType === "estudiante" && !universidad) {
    const msg = "Por favor indica tu universidad.";
    Platform.OS === "web" ? window.alert(msg) : Alert.alert("Falta Universidad", msg);
    return false;
  }

  if (userType === "institucion" && !institucion) {
    const msg = "Por favor indica el nombre de tu institución.";
    Platform.OS === "web" ? window.alert(msg) : Alert.alert("Falta Institución", msg);
    return false;
  }

  if (!termsAccepted) {
    const msg = "Debes aceptar los términos y condiciones.";
    Platform.OS === "web" ? window.alert(msg) : Alert.alert("Términos no aceptados", msg);
    return false;
  }

  const msg = "Registro completado";
  Platform.OS === "web" ? window.alert(msg) : Alert.alert("¡Éxito!", msg);
  return true;
};
