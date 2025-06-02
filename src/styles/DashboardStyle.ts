import { StyleSheet } from "react-native"

export const DashStyle = (darkMode) => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode ? '#111827' : '#F9FAFB',
    },
    header: {
      backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
      borderBottomWidth: 1,
      borderBottomColor: darkMode ? '#374151' : '#E5E7EB',
      paddingVertical: 16,
    },
    headerContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: darkMode ? '#60A5FA' : '#2563EB',
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    mobileHeaderRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    iconButton: {
      padding: 8,
      borderRadius: 20,
    },
    icon: {
      color: darkMode ? '#D1D5DB' : '#6B7280',
    },
    menuButton: {
      padding: 8,
    },
    notificationButton: {
      position: 'relative',
      padding: 8,
    },
    notificationBadge: {
      position: 'absolute',
      top: 4,
      right: 4,
      width: 16,
      height: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    notificationBadgeInner: {
      position: 'absolute',
    },
    notificationPing: {
      backgroundColor: '#EF4444',
      opacity: 0.75,
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
    notificationDot: {
      backgroundColor: '#DC2626',
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    userAvatar: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: darkMode ? '#1E40AF' : '#DBEAFE',
      justifyContent: 'center',
      alignItems: 'center',
    },
    userIcon: {
      color: darkMode ? '#93C5FD' : '#1D4ED8',
    },
    userName: {
      fontWeight: '500',
      color: darkMode ? '#FFFFFF' : '#111827',
    },
    logoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      padding: 8,
    },
    logoutText: {
      color: darkMode ? '#D1D5DB' : '#6B7280',
    },
    mobileMenu: {
      backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
      borderBottomWidth: 1,
      borderBottomColor: darkMode ? '#374151' : '#E5E7EB',
      padding: 16,
      gap: 12,
    },
    mobileUserInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    mobileUserAvatar: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: darkMode ? '#1E40AF' : '#DBEAFE',
      justifyContent: 'center',
      alignItems: 'center',
    },
    mobileUserName: {
      fontWeight: '500',
      color: darkMode ? '#FFFFFF' : '#111827',
    },
    mobileMenuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingVertical: 8,
    },
    mobileMenuText: {
      color: darkMode ? '#D1D5DB' : '#6B7280',
    },
    mobileNotificationCount: {
      backgroundColor: '#EF4444',
      borderRadius: 10,
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
    },
    mobileNotificationCountText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: 'bold',
    },
    mainContent: {
      flex: 1,
    },
    contentContainer: {
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24,
      color: darkMode ? '#FFFFFF' : '#111827',
    },
    searchContainer: {
      backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      marginBottom: 24,
      shadowColor: darkMode ? '#00000020' : '#00000010',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
    },
    searchInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#E5E7EB',
      borderRadius: 8,
      padding: 12,
      backgroundColor: darkMode ? '#111827' : '#F3F4F6',
      marginBottom: 12,
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      color: darkMode ? '#FFFFFF' : '#111827',
    },
    placeholder: {
      color: darkMode ? '#9CA3AF' : '#6B7280',
    },
    filterButtons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    filterButtonText: {
      color: darkMode ? '#D1D5DB' : '#6B7280',
      fontSize: 14,
    },
    tabsContainer: {
      marginBottom: 24,
      paddingHorizontal: 16,
    },
    tabsList: {
      flexDirection: 'row',
      backgroundColor: darkMode ? '#1F2937' : '#F3F4F6',
      borderRadius: 8,
      padding: 4,
      width: '100%',
      maxWidth: 400,
    },
    tabTrigger: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 6,
      alignItems: 'center',
    },
    activeTab: {
      backgroundColor: darkMode ? '#374151' : '#FFFFFF',
      shadowColor: darkMode ? '#00000020' : '#00000010',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },
    tabText: {
      color: darkMode ? '#D1D5DB' : '#6B7280',
      fontWeight: '500',
    },
    tabContent: {
      marginTop: 16,
      gap: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: darkMode ? '#FFFFFF' : '#111827',
    },
    opportunitiesGrid: {
      gap: 16,
    },
    card: {
      backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#E5E7EB',
      shadowColor: darkMode ? '#00000020' : '#00000010',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 4,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: darkMode ? '#FFFFFF' : '#111827',
      flex: 1,
    },
    cardSubtitle: {
      color: darkMode ? '#9CA3AF' : '#6B7280',
      marginBottom: 12,
    },
    badge: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 999,
      marginLeft: 8,
    },
    badgeText: {
      fontSize: 12,
      fontWeight: '500',
    },
    engineeringBadge: {
      backgroundColor: darkMode ? '#1E3A8A' : '#DBEAFE',
    },
    technologyBadge: {
      backgroundColor: darkMode ? '#14532D' : '#DCFCE7',
    },
    adminBadge: {
      backgroundColor: darkMode ? '#4C1D95' : '#F3E8FF',
    },
    acceptedBadge: {
      backgroundColor: darkMode ? '#064E3B' : '#D1FAE5',
    },
    pendingBadge: {
      backgroundColor: darkMode ? '#78350F' : '#FEF3C7',
    },
    rejectedBadge: {
      backgroundColor: darkMode ? '#7F1D1D' : '#FEE2E2',
    },
    cardDetails: {
      gap: 8,
      marginBottom: 12,
    },
    detailItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    detailIcon: {
      color: darkMode ? '#9CA3AF' : '#6B7280',
    },
    detailText: {
      color: darkMode ? '#9CA3AF' : '#6B7280',
      fontSize: 14,
    },
    cardDescription: {
      color: darkMode ? '#D1D5DB' : '#4B5563',
      fontSize: 14,
      marginBottom: 16,
    },
    cardButton: {
      backgroundColor: darkMode ? '#2563EB' : '#3B82F6',
      borderRadius: 6,
      padding: 12,
      alignItems: 'center',
    },
    cardButtonText: {
      color: '#FFFFFF',
      fontWeight: '500',
    },
    moreButton: {
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#E5E7EB',
      borderRadius: 6,
      padding: 12,
      alignItems: 'center',
      alignSelf: 'center',
    },
    moreButtonText: {
      color: darkMode ? '#D1D5DB' : '#6B7280',
      fontWeight: '500',
    },
    applicationsList: {
      gap: 16,
    },
    applicationCard: {
      backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#E5E7EB',
    },
    applicationContent: {
      marginBottom: 16,
    },
    applicationHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    applicationTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: darkMode ? '#FFFFFF' : '#111827',
      flex: 1,
    },
    applicationSubtitle: {
      color: darkMode ? '#9CA3AF' : '#6B7280',
      marginBottom: 8,
    },
    applicationDetail: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    applicationDetailText: {
      color: darkMode ? '#9CA3AF' : '#6B7280',
      fontSize: 14,
    },
    applicationActions: {
      flexDirection: 'row',
      gap: 8,
      flexWrap: 'wrap',
    },
    detailsButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#E5E7EB',
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    detailsButtonText: {
      color: darkMode ? '#D1D5DB' : '#6B7280',
      fontSize: 14,
    },
    contactButton: {
      backgroundColor: darkMode ? '#2563EB' : '#3B82F6',
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    contactButtonText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '500',
    },
    cancelButton: {
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#E5E7EB',
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    cancelButtonText: {
      color: darkMode ? '#D1D5DB' : '#6B7280',
      fontSize: 14,
    },
    otherOpportunitiesButton: {
      backgroundColor: darkMode ? '#374151' : '#F3F4F6',
      borderRadius: 6,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    otherOpportunitiesButtonText: {
      color: darkMode ? '#D1D5DB' : '#6B7280',
      fontSize: 14,
      fontWeight: '500',
    },
    profileCard: {
      backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
      borderRadius: 8,
      padding: 24,
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#E5E7EB',
    },
    profileContent: {
      flexDirection: 'column',
    },
    profileLeft: {
      marginBottom: 24,
      alignItems: 'center',
    },
    profileAvatar: {
      width: 128,
      height: 128,
      borderRadius: 64,
      backgroundColor: darkMode ? '#1E40AF' : '#DBEAFE',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
    },
    profileName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: darkMode ? '#FFFFFF' : '#111827',
      marginBottom: 4,
    },
    profileRole: {
      color: darkMode ? '#9CA3AF' : '#6B7280',
      marginBottom: 16,
    },
    editProfileButton: {
      backgroundColor: darkMode ? '#2563EB' : '#3B82F6',
      borderRadius: 6,
      padding: 12,
      width: '100%',
      alignItems: 'center',
    },
    editProfileButtonText: {
      color: '#FFFFFF',
      fontWeight: '500',
    },
    profileRight: {
      flex: 1,
    },
    profileSection: {
      marginBottom: 24,
    },
    profileSectionTitle: {
      fontSize: 16,
      fontWeight: '500',
      color: darkMode ? '#D1D5DB' : '#4B5563',
      marginBottom: 12,
    },
    profileGrid: {
      gap: 16,
    },
    profileField: {
      marginBottom: 12,
    },
    profileFieldLabel: {
      color: darkMode ? '#9CA3AF' : '#6B7280',
      fontSize: 14,
      marginBottom: 4,
    },
    profileFieldValue: {
      color: darkMode ? '#FFFFFF' : '#111827',
      fontSize: 16,
    },
    interestsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    interestBadge: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 999,
    },
    interestBadgeText: {
      fontSize: 12,
      fontWeight: '500',
    },
    webBadge: {
      backgroundColor: darkMode ? '#1E3A8A' : '#DBEAFE',
    },
    aiBadge: {
      backgroundColor: darkMode ? '#14532D' : '#DCFCE7',
    },
    dbBadge: {
      backgroundColor: darkMode ? '#4C1D95' : '#F3E8FF',
    },
    securityBadge: {
      backgroundColor: darkMode ? '#78350F' : '#FEF3C7',
    },
    addInterestButton: {
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#E5E7EB',
      borderRadius: 999,
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
    addInterestButtonText: {
      color: darkMode ? '#D1D5DB' : '#6B7280',
      fontSize: 12,
    },
    documentsContainer: {
      gap: 8,
    },
    documentItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#E5E7EB',
      borderRadius: 8,
      padding: 12,
    },
    documentInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    documentName: {
      color: darkMode ? '#FFFFFF' : '#111827',
    },
    documentAction: {
      padding: 4,
    },
    documentActionText: {
      color: darkMode ? '#60A5FA' : '#3B82F6',
      fontSize: 14,
    },
    uploadButton: {
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#E5E7EB',
      borderRadius: 6,
      padding: 12,
      alignItems: 'center',
    },
    uploadButtonText: {
      color: darkMode ? '#D1D5DB' : '#6B7280',
      fontWeight: '500',
    },
    footer: {
      backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: darkMode ? '#374151' : '#E5E7EB',
      padding: 16,
      alignItems: 'center',
    },
    footerText: {
      color: darkMode ? '#9CA3AF' : '#6B7280',
      fontSize: 14,
    },
   
    darkContainer: {
      backgroundColor: '#111827',
    },
   
    
    darkHeader: {
      backgroundColor: '#1f2937',
      borderBottomColor: '#374151',
    },
    backButton: {
      padding: 8,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#2563eb',
    },
    darkHeaderTitle: {
      color: '#60a5fa',
    },
    themeButton: {
      padding: 8,
    },
    backLink: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      paddingBottom: 8,
    },
    backLinkText: {
      marginLeft: 4,
      color: '#2563eb',
    },
  
    sidebar: {
      padding: 16,
      paddingTop: 0,
    },
   
    darkCard: {
      backgroundColor: '#1f2937',
      shadowColor: '#000',
    },
   
   
    subtitle: {
      fontSize: 14,
      color: '#6b7280',
    },
    darkSubtitle: {
      color: '#9ca3af',
    },
   
    darkBadge: {
      backgroundColor: '#1e40af',
    },
  
    darkBadgeText: {
      color: '#93c5fd',
    },
    detailsGrid: {
      gap: 12,
      marginBottom: 16,
    },
    
  
    buttonRow: {
      flexDirection: 'row',
      gap: 8,
      marginBottom: 16,
    },
    primaryButton: {
      flex: 1,
      backgroundColor: '#2563eb',
      padding: 12,
      borderRadius: 6,
      alignItems: 'center',
    },
    primaryButtonText: {
      color: '#fff',
      fontWeight: '500',
    },
   
    darkIconButton: {
      borderColor: '#374151',
    },
    tabContainer: {
      height: 200,
      marginBottom: 16,
    },
    tabBar: {
      backgroundColor: '#fff',
      elevation: 0,
      shadowOpacity: 0,
    },
    darkTabBar: {
      backgroundColor: '#1f2937',
    },
    tabItem: {
      width: 'auto', // O '100%' según necesites
    },
    tabLabel: {
      color: '#4b5563',
      fontWeight: '500',
    },
    darkTabLabel: {
      color: '#9ca3af',
    },
   
    text: {
      color: '#4b5563',
      fontSize: 14,
      lineHeight: 20,
    },
    darkText: {
      color: '#e5e7eb',
    },
    listItem: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    
   
    processCard: {
      marginBottom: 16,
    },
   
    processStep: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    stepNumber: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#dbeafe',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    darkStepNumber: {
      backgroundColor: '#1e40af',
    },
    stepNumberText: {
      color: '#2563eb',
      fontWeight: '500',
    },
    stepContent: {
      flex: 1,
    },
    stepTitle: {
      fontWeight: '500',
      color: '#111827',
      marginBottom: 4,
    },
    stepDescription: {
      color: '#6b7280',
      fontSize: 13,
      lineHeight: 18,
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16,
    },
    contactText: {
      color: '#4b5563',
      fontSize: 14,
    },
    contactSubtext: {
      color: '#6b7280',
      fontSize: 12,
      marginTop: 2,
    },
    outlineButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      padding: 12,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#d1d5db',
      marginTop: 8,
    },
    darkOutlineButton: {
      borderColor: '#374151',
    },
    outlineButtonText: {
      color: '#2563eb',
      fontWeight: '500',
    },
    darkOutlineButtonText: {
      color: '#60a5fa',
    },
  
    documentText: {
      color: '#4b5563',
      fontSize: 14,
    },
    opportunityItem: {
      padding: 12,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#e5e7eb',
      marginBottom: 12,
    },
    darkOpportunityItem: {
      borderColor: '#374151',
    },
    opportunityTitle: {
      fontWeight: '500',
      color: '#111827',
      marginBottom: 2,
    },
    opportunitySubtitle: {
      color: '#6b7280',
      fontSize: 12,
      marginBottom: 4,
    },
    opportunityLocation: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    opportunityLocationText: {
      color: '#6b7280',
      fontSize: 12,
    },
   
    darkFooter: {
      borderTopColor: '#374151',
    },
    
    darkFooterText: {
      color: '#9ca3af',
    },
    
    backText: {
      color: darkMode ? '#60a5fa' : '#2563eb',
      marginLeft: 4,
    },
  
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    infoText: {
      marginLeft: 8,
      color: darkMode ? '#d1d5db' : '#4b5563',
    },
   
    mainButton: {
      flex: 1,
      backgroundColor: '#2563eb',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryButton: {
      width: 48,
      height: 48,
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#d1d5db',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 8,
    },
    buttonText: {
      color: '#ffffff',
      fontWeight: '500',
    },
   
    tabList: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: darkMode ? '#374151' : '#e5e7eb',
      marginBottom: 16,
    },
    tabButton: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomWidth: 2,
      borderBottomColor: 'transparent',
    },
    tabButtonActive: {
      borderBottomColor: '#2563eb',
    },
  
    tabTextActive: {
      color: '#2563eb',
    },
   
   
    contactLabel: {
      fontWeight: '500',
      color: darkMode ? '#ffffff' : '#000000',
    },
    contactSubLabel: {
      color: darkMode ? '#9ca3af' : '#6b7280',
      fontSize: 12,
    },
    similarOpportunity: {
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#e5e7eb',
      borderRadius: 8,
      padding: 12,
      marginBottom: 12,
      backgroundColor: darkMode ? '#1f2937' : '#ffffff',
    },
    similarTitle: {
      fontWeight: '500',
      color: darkMode ? '#ffffff' : '#000000',
      marginBottom: 2,
    },
    similarSubtitle: {
      color: darkMode ? '#9ca3af' : '#6b7280',
      fontSize: 12,
      marginBottom: 4,
    },
    similarLocation: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    similarLocationText: {
      color: darkMode ? '#9ca3af' : '#6b7280',
      fontSize: 12,
      marginLeft: 4,
    },
    section: {
      marginBottom: 24,
      backgroundColor: darkMode ? '#1f2937' : '#ffffff',
      borderRadius: 8,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    docItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    docText: {
      marginLeft: 8,
      color: darkMode ? '#d1d5db' : '#4b5563',
    },
    description: {
      color: darkMode ? '#d1d5db' : '#4b5563',
      marginTop: 10,
      lineHeight: 20,
    },
    bullet: {
      color: darkMode ? '#60a5fa' : '#2563eb',
      marginRight: 8,
      fontSize: 16,
    },
   
    listText: {
      flex: 1,
      color: darkMode ? '#d1d5db' : '#4b5563',
      fontSize: 14,
    },
    sectionContent: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      backgroundColor: '#f9fafb',
      borderRadius: 8,
      marginBottom: 16,
    },
    activeTabText: {
      color: '#2563eb',
      fontWeight: 'bold',
    },
    cardContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 16,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5, // Para Android
    },
    infoContainer: {
      marginBottom: 16,
    },
    
    detailsGroup: {
      marginTop: 8,
      gap: 8,
    },
   
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  

  cardContent: {
    padding: 16,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  descriptionText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#2563EB',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
  },
 modalOverlay: {
    flex: 1,
    backgroundColor: darkMode ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: darkMode ? '#1f2937' : 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    shadowColor: darkMode ? '#000' : '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: darkMode ? 0.8 : 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: darkMode ? 'white' : 'black',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 16,
    color: darkMode ? '#ccc' : '#555',
    marginBottom: 10,
  },
  modalText: {
    color: darkMode ? '#ddd' : '#333',
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: darkMode ? '#0862B6' : '#0862B6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
filterButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      borderWidth: 1,
      borderColor: darkMode ? '#374151' : '#E5E7EB',
      borderRadius: 6,
      paddingVertical: 6,
      paddingHorizontal: 12,
    },
filterButtonActive: {
      backgroundColor: darkMode ? '#374151' : '#E5E7EB',
    }

  });
  