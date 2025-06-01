// src/styles/globalStyles.ts
import { StyleSheet } from "react-native"
export const globalStyles = StyleSheet.create({

  //Style for HomeScreen-------------
  darkModeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  darkContainer: {
    backgroundColor: '#111827',
  },
  darkCard: {
    backgroundColor: '#1f2937',
  },
  darkTitle: {
    color: 'white',
  },
  // ... otros estilos para dark mode
  iconButton: {
    backgroundColor: "#e5e7eb",
    padding: 10,
    borderRadius: 30,
  },
  hero: {
    paddingTop: 100,
    paddingBottom: 60,
    paddingHorizontal: 24,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  heroText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  heroButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 8,
  },
  primaryButtonText: {
    color: "#2563eb",
    fontWeight: "bold",
  },
  secondaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  filterRow: {
    flexDirection: "column",
    gap: 12,
    marginBottom: 16,
  },
  filterBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#1e40af",
    borderRadius: 8,
    marginBottom: 8,
  },
  searchButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#2563eb",
  },
  TitleText: {
    fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 16
   },
   featureCard: {
      padding: 16,
      borderRadius: 12,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    backGroundIcon: {
        borderRadius: 9999,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40
    },
    
    //Style for LoginScreen-------------
    toggleContainer: {
      position: "absolute",
      top: 50,
      right: 24,
      zIndex: 10,
    },
    card: {
      padding: 24,
      borderRadius: 12,
      borderWidth: 1,
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 8,
    },
    cardSubtitle: {
      fontSize: 14,
      textAlign: "center",
      marginBottom: 24,
    },
    inputGroup: {
      marginBottom: 16,
    },
    label: {
      marginBottom: 4,
      fontWeight: "500",
    },
    input: {
      borderWidth: 1,
      borderColor: "#9ca3af",
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
    },
    passwordContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    eyeIcon: {
      position: "absolute",
      right: 12,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 12,
    },
    rememberContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    loginButton: {
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 8,
    },
    loginButtonText: {
      color: "#fff",
      fontWeight: "600",
      fontSize: 16,
    },
    //Style for RegisterScreen-------------
    radioGroup: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 24,
      marginBottom: 16,
    },
    radioItem: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    radioCircle: {
      width: 16,
      height: 16,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: "#6b7280",
      marginRight: 4,
    },
    termsContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
    },
    registerButton: {
      marginTop: 16,
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: "center",
    },
    registerButtonText: {
      color: "#fff",
      fontWeight: "600",
      fontSize: 16,
    },
    inputDark: {
      backgroundColor: "#1f2937", // dark gray
      borderColor: "#374151",
      color: "#fff",
    },
    labelDark: {
      color: "#fff",
    },
    
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  
  toggleText: {
    color: '#007bff',
    textAlign: 'right',
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  button: {
    marginBottom: 16,
    paddingVertical: 8,
  },
  registerText: {
    color: '#007bff',
    textAlign: 'center',
  },
  
  
   
})
