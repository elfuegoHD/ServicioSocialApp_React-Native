import { StyleSheet } from "react-native"

// Definimos interfaces para nuestros tipos de estilos
interface BaseStyles {
  container: any;
  title: any;
  cardGrid: any;
  card: any;
  cardHeader: any;
  cardTitle: any;
  badge: any;
  cardDescription: any;
  cardContent: any;
  infoRow: any;
  icon: any;
  infoText: any;
  descripcion: any;
  button: any;
  buttonText: any;
}

// Paleta de colores para modo claro
const lightColors = {
  primary: '#2563eb',
  background: '#f5f5f5',
  cardBackground: '#ffffff',
  textPrimary: '#111827',
  textSecondary: '#4b5563',
  textTertiary: '#6b7280',
  badgeBackground: '#1e40af',
  badgeText: '#bfdbfe',
  buttonText: '#ffffff',
  border: '#e5e7eb'
}

// Paleta de colores para modo oscuro
const darkColors = {
  primary: '#3b82f6',
  background: '#111827',
  cardBackground: '#1f2937',
  textPrimary: '#f9fafb',
  textSecondary: '#d1d5db',
  textTertiary: '#9ca3af',
  badgeBackground: '#1e3a8a',
  badgeText: '#93c5fd',
  buttonText: '#ffffff',
  border: '#374151'
}

// Estilos base compartidos
const baseStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  cardGrid: {
    gap: 16,
    flexDirection: "column",
  },
  card: {
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  cardHeader: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 4,
    fontSize: 12,
  },
  cardDescription: {
    marginTop: 4,
  },
  cardContent: {
    marginTop: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  icon: {
    marginRight: 6,
  },
  infoText: {
    fontSize: 14,
  },
  descripcion: {
    fontSize: 14,
    marginVertical: 8,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "600",
  },
})

// Función para crear estilos dinámicos
const createStyles = (colors: typeof lightColors) => ({
  ...baseStyles,
  container: {
    ...baseStyles.container,
    backgroundColor: colors.background,
  },
  title: {
    ...baseStyles.title,
    color: colors.textPrimary,
  },
  card: {
    ...baseStyles.card,
    backgroundColor: colors.cardBackground,
  },
  cardTitle: {
    ...baseStyles.cardTitle,
    color: colors.textPrimary,
  },
  badge: {
    ...baseStyles.badge,
    backgroundColor: colors.badgeBackground,
    color: colors.badgeText,
  },
  cardDescription: {
    ...baseStyles.cardDescription,
    color: colors.textTertiary,
  },
  infoText: {
    ...baseStyles.infoText,
    color: colors.textSecondary,
  },
  descripcion: {
    ...baseStyles.descripcion,
    color: colors.textSecondary,
  },
  button: {
    ...baseStyles.button,
    backgroundColor: colors.primary,
  },
  buttonText: {
    ...baseStyles.buttonText,
    color: colors.buttonText,
  },
})

// Crear estilos específicos para cada tema
export const lightStyles = StyleSheet.create(createStyles(lightColors))
export const darkStyles = StyleSheet.create(createStyles(darkColors))

// Exportar ambos estilos
export default { lightStyles, darkStyles }