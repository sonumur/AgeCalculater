/**
 * Pepstudio Multi-Language (i18n) Engine
 * Supports: English (en), Spanish (es), French (fr), German (de), Hindi (hi), Chinese (zh)
 */
(function () {
    const translations = {
        en: {
            "select_language": "Language",
            "home": "Home",
            "hero_title": "Welcome to 100% Free Tools site",
            "hero_subtitle": "Your all-in-one online calculator suite. Fast, reliable, and entirely free.",
            "search_tools_placeholder": "Search tools (e.g. Age, BMI, EMI, Unit)...",
            "no_tools_found": "No matching tools found.",
            
            "age_calc_title": "Age Calculator",
            "age_calc_desc": "Calculate your exact age in years, months, and days",
            "bmi_calc_title": "BMI Calculator",
            "bmi_calc_desc": "Calculate your Body Mass Index and health status",
            "emi_calc_title": "EMI Calculator",
            "emi_calc_desc": "Calculate your monthly EMI for loans and mortgages",
            "unit_conv_title": "Unit Converter",
            "unit_conv_desc": "Convert between various units of measurement",
            "perc_calc_title": "Percentage Calculator",
            "perc_calc_desc": "Calculate percentages and percentage changes",
            "world_time_title": "World Time",
            "world_time_desc": "Check current time in different time zones worldwide",
            "love_calc_title": "Love Calculator",
            "love_calc_desc": "Calculate love and compatibility percentage between two names",

            "details": "Details",
            "calculate": "Calculate",
            "calculate_age": "Calculate Age",
            "reset": "Reset",
            "date_of_birth": "Date of Birth",
            "day": "Day",
            "month": "Month",
            "year": "Year",
            "exact_age": "Exact Age",
            "years": "Years",
            "months": "Months",
            "days": "Days",
            "total_days": "Total Days",
            "total_weeks": "Total Weeks",
            "total_months": "Total Months",
            "next_birthday": "Next Birthday",

            "height": "Height",
            "weight": "Weight",
            "your_bmi": "Your BMI",
            "category": "Category",

            "loan_amount": "Loan Amount",
            "interest_rate": "Interest Rate (%)",
            "loan_tenure": "Tenure (Years)",
            "monthly_emi": "Monthly EMI",
            "total_interest": "Total Interest",
            "total_payment": "Total Payment",

            "footer_tagline": "Your all-in-one suite of 100% free online calculator & utility tools. Fast, accurate, and easy to use.",
            "footer_calc_suite": "Calculator Suite",
            "footer_company_legal": "Company & Legal",
            "footer_why_pepstudio": "Why Pepstudio?",
            "footer_about": "About Us",
            "footer_privacy": "Privacy Policy",
            "footer_terms": "Terms of Service",
            "footer_dmca": "DMCA",
            "footer_sitemap": "Site-Map",
            "footer_free_private": "100% Free & Private",
            "footer_instant": "Instant Results",
            "footer_no_reg": "No Registration",
            "footer_back_to_top": "Back to top",
            "explore_more_tools": "Explore More Pepstudio Utility Tools",
            "accuracy_disclaimer": "Accuracy Disclaimer: This tool is provided for general informational and calculation purposes.",
            
            "about_system_tag": "Precision Utility System",
            "about_hero_title": "Empowering Professionals with Precise Tools.",
            "about_hero_p": "pepstudio is a 100% free suite of calculators, converters, and engineering utilities designed for absolute accuracy and zero friction. No subscriptions, no clutter—just the answers you need, instantly.",
            "about_explore_btn": "Explore Utilities",
            "about_read_doc_btn": "Read Documentation",
            "about_speed_title": "Built for Speed. Engineered for Accuracy.",
            "about_speed_p": "We noticed a gap in the market: most online calculators are bloated with ads, hidden behind paywalls, or use imprecise rounding. We built pepstudio to be the definitive, institutional-grade resource for students and industry professionals alike.",
            "about_val1_title": "Instant Results",
            "about_val1_p": "Our client-side architecture means calculations happen locally in your browser. Zero server latency, meaning answers appear the millisecond you finish typing.",
            "about_val2_title": "Absolute Precision",
            "about_val2_p": "We use advanced arbitrary-precision arithmetic libraries under the hood. No floating-point errors, no unexpected rounding. Just mathematically pure results.",
            "about_val3_title": "100% Free & Open",
            "about_val3_p": "Professional tools shouldn't be gated. Every calculator, converter, and formatting tool on our platform is completely free to use, forever. No account required.",
            "about_tech_title": "Modern Tech Stack",
            "about_tech_p": "Our platform is built on modern web standards to ensure a seamless experience across all devices. We utilize WebAssembly and lightweight JavaScript for heavy computational lifting, allowing complex algorithms to run at near-native speeds directly within your browser.",
            "about_tech_li1": "Client-side rendering for instant page loads.",
            "about_tech_li2": "Offline capability via progressive web app (PWA) standards.",
            "about_tech_li3": "Responsive design optimized for desktop, tablet, and mobile.",

            "select_language": "Language",
            "doc_system_badge": "User Guide & Specifications",
            "doc_main_title": "Pepstudio Technical Documentation & System Guide",
            "doc_main_subtitle": "A comprehensive guide to our precision calculation engine, mathematical models, client-side privacy architecture, and utility suite functionality.",
            "doc_sec1_title": "1. System Architecture & Zero-Knowledge Privacy",
            "doc_sec1_p1": "Every tool across the pepstudio suite is engineered with a client-first paradigm. Unlike legacy web converters and financial utility sites that transmit form inputs to remote backend servers, pepstudio performs 100% of computational logic inside your local browser runtime.",
            "doc_sec1_p2": "When you input your date of birth, loan principal, or personal metrics, no HTTP request contains your data. This architecture delivers two fundamental benefits:",
            "doc_sec1_li1": "Zero Latency: Output calculations are rendered instantly upon keypress, bound only by client CPU evaluation speed.",
            "doc_sec1_li2": "Cryptographic Privacy: Confidential financial figures and health indicators never leave your device.",
            "doc_sec2_title": "2. Calculation Models & Mathematical Specifications",
            "doc_age_heading": "🎂 Chronological Age & Anniversary Algorithm",
            "doc_age_desc": "Our age calculation algorithm calculates exact elapsed time between birth date D1 and target date D2, accounting for variable month lengths (28 to 31 days) and Gregorian leap year adjustments.",
            "doc_bmi_heading": "⚖️ Body Mass Index (BMI) & WHO Classification",
            "doc_bmi_desc": "Body Mass Index evaluates height-to-weight proportions according to World Health Organization (WHO) standards:",
            "doc_bmi_cats": "Categories: Underweight (< 18.5), Normal (18.5 – 24.9), Overweight (25 – 29.9), Obese (≥ 30).",
            "doc_emi_heading": "🏦 Equated Monthly Installment (EMI) Formula",
            "doc_emi_desc": "Loan payments utilize the standard actuarial monthly compounding annuity model:",
            "doc_emi_params": "Where P is principal loan amount, r is monthly interest rate, and n is total months.",
            "doc_unit_heading": "📐 Unit Conversion & Arbitrary-Precision Scaling",
            "doc_unit_desc": "Unit conversions rely on standardized SI base unit conversion matrices, eliminating floating-point rounding inaccuracies.",
            "doc_time_heading": "🌐 World Time & IANA Time Zone Synchronization",
            "doc_time_desc": "World Time computations utilize the Intl.DateTimeFormat engine synced with official IANA Time Zone Database specifications.",
            "doc_sec3_title": "3. Offline Mode & PWA Capabilities",
            "doc_sec3_p": "Pepstudio web tools are fully compatible with Progressive Web App (PWA) caching standards. Once you load a tool page, script logic is cached in your browser's local cache storage, enabling full offline operation when internet connectivity is unavailable.",
            "doc_back_btn": "Back to Pepstudio Utilities",

            "privacy_title": "Privacy Policy",
            "privacy_effective": "Effective Date: August 15, 2026",
            "privacy_sec1_title": "1. Information We Collect",
            "privacy_sec1_p1": "At pepstudio, we prioritize your privacy and the efficiency of your professional tools. We do not store your personal data or calculation inputs on our servers.",
            "privacy_sec1_p2": "When you use our calculators, converters, or tools, all processing happens locally within your browser. We may collect non-identifying telemetry data (such as browser type, operating system, and page views) to understand how our utility suite is utilized, but this cannot be tied back to you or the specific numerical values you input.",
            "privacy_sec2_title": "2. How We Use Information",
            "privacy_sec2_p": "The minimal, non-identifying telemetry data we collect is used strictly for:",
            "privacy_sec2_li1": "Improving the performance and load times of our utility tools.",
            "privacy_sec2_li2": "Identifying which calculators or converters are most frequently accessed to prioritize future development.",
            "privacy_sec2_li3": "Diagnosing technical issues or errors within the application.",
            "privacy_sec3_title": "3. Data Security",
            "privacy_sec3_p": "Because our core functionality relies on local processing, your sensitive calculation inputs never leave your device. The connection to pepstudio is secured via industry-standard encryption (HTTPS) to ensure that any diagnostic data transmitted is protected against interception.",
            "privacy_sec4_title": "4. Third-Party Services",
            "privacy_sec4_p": "We may utilize third-party analytics services (such as Google Analytics) to aggregate usage statistics. These services operate under their own privacy policies and may set cookies to track usage patterns across sessions. We configure these tools to prioritize user anonymity whenever possible.",
            "privacy_sec5_title": "5. Cookies",
            "privacy_sec5_p": "pepstudio uses minimal cookies to maintain basic functionality (like remembering your preferred theme: light/dark mode) and for the analytics purposes mentioned above. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some functional preferences may be lost if you disable cookies.",
            "privacy_sec6_title": "6. Changes to Policy",
            "privacy_sec6_p": "We may update our Privacy Policy periodically. Any changes will be posted on this page with an updated \"Effective Date.\" We encourage you to review this Privacy Policy periodically for any modifications.",
            "privacy_sec7_title": "7. Contact Information",
            "privacy_sec7_p": "If you have any questions regarding this Privacy Policy or how your data is handled while using our utility suite, please contact us at:",

            "terms_title": "Terms of Service",
            "terms_updated": "Last Updated: August 15, 2026",
            "terms_intro": "Welcome to pepstudio.xyz. These Terms of Service (\"Terms\") govern your access to and use of the pepstudio.xyz website, including any calculators, converters, tools, and content provided (collectively, the \"Services\").",
            "terms_sec1_title": "1. Acceptance of Terms",
            "terms_sec1_p": "By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Services.",
            "terms_sec2_title": "2. Use of Services",
            "terms_sec2_p1": "pepstudio.xyz provides a suite of precision engineering tools, calculators, and converters for informational and utility purposes. You agree to use these Services only for lawful purposes and in accordance with these Terms.",
            "terms_sec2_p2": "You agree not to:",
            "terms_sec2_li1": "Use the Services in any way that violates any applicable federal, state, local, or international law or regulation.",
            "terms_sec2_li2": "Attempt to interfere with the proper working of the Services, including introducing viruses or other malicious material.",
            "terms_sec2_li3": "Use any robot, spider, or other automatic device to access the Services for any purpose without our express written permission.",
            "terms_sec3_title": "3. Intellectual Property",
            "terms_sec3_p1": "The Services and their entire contents, features, and functionality are owned by pepstudio.xyz, its licensors, or other providers of such material and are protected by copyright, trademark, patent, and other intellectual property laws.",
            "terms_sec3_p2": "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services.",
            "terms_sec4_title": "4. Limitation of Liability",
            "terms_sec4_p1": "The calculators and tools provided on pepstudio.xyz are intended for informational purposes only. While we strive for accuracy, we make no guarantees regarding the completeness, reliability, or accuracy of the results generated by our tools.",
            "terms_sec4_p2": "To the fullest extent provided by law, in no event will pepstudio.xyz, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Services.",
            "terms_sec5_title": "5. User Conduct",
            "terms_sec5_p": "You are responsible for any activity that occurs through your use of the Services. You agree to conduct yourself in a professional manner and refrain from any activity that could damage, disable, overburden, or impair the Services.",
            "terms_sec6_title": "6. Changes to Terms",
            "terms_sec6_p": "We reserve the right to update or modify these Terms at any time without prior notice. Any changes will be effective immediately upon posting to the site. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.",
            "terms_sec7_title": "7. Contact Information",
            "terms_sec7_p": "If you have any questions about these Terms, please contact us at pepstudio.contact@gmail.com",

            "dmca_title": "DMCA Policy",
            "dmca_effective": "Effective Date: August 15, 2026",
            "dmca_intro": "pepstudio respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998, we will respond expeditiously to claims of copyright infringement committed using the pepstudio service that are reported to our Designated Copyright Agent.",
            "dmca_sec1_title": "Reporting Copyright Infringements",
            "dmca_sec1_p": "If you are a copyright owner, or authorized to act on behalf of one, please report alleged copyright infringements taking place on or through the Site by completing a DMCA Notice of Alleged Infringement and delivering it to our Designated Copyright Agent.",
            "dmca_sec2_title": "Information Required in Notice",
            "dmca_sec2_p": "Please provide the following information to our Designated Copyright Agent:",
            "dmca_sec2_li1": "Identify the copyrighted work that you claim has been infringed.",
            "dmca_sec2_li2": "Identify the material that you claim is infringing and information reasonably sufficient to permit us to locate the material.",
            "dmca_sec2_li3": "Provide your mailing address, telephone number, and, if available, email address.",
            "dmca_sec2_li4": "Include both of the following statements in the body of the Notice:",
            "dmca_sec2_li4_a": "\"I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law.\"",
            "dmca_sec2_li4_b": "\"I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner.\"",
            "dmca_sec2_li5": "Provide your full legal name and your electronic or physical signature.",
            "dmca_sec3_title": "Counter-Notification",
            "dmca_sec3_p": "If you believe that your content that was removed is not infringing, you may send a counter-notice containing the required information to the Copyright Agent:",
            "dmca_sec3_li1": "Your physical or electronic signature;",
            "dmca_sec3_li2": "Identification of the content that has been removed and its location before removal;",
            "dmca_sec3_li3": "A statement that you have a good faith belief that the content was removed as a result of mistake;",
            "dmca_sec3_li4": "Your name, address, telephone number, and e-mail address, and a statement consenting to legal jurisdiction.",
            "dmca_sec4_title": "Designated Agent Contact",
            "dmca_sec4_p": "Deliver the Notice, with all items completed, to pepstudio's Designated Copyright Agent:",
            "dmca_agent_title": "Copyright Agent",
            "dmca_agent_dept": "pepstudio Legal Department",

            "sitemap_title": "Site Map",
            "sitemap_intro": "Welcome to the pepstudio site map. Use the links below to quickly access all available pages on this website."
        },
        es: {
            "select_language": "Idioma",
            "home": "Inicio",
            "hero_title": "Bienvenido al sitio de herramientas 100% gratuitas",
            "hero_subtitle": "Su suite de calculadoras en línea todo en uno. Rápida, confiable y totalmente gratuita.",
            
            "age_calc_title": "Calculadora de Edad",
            "age_calc_desc": "Calcule su edad exacta en años, meses y días",
            "bmi_calc_title": "Calculadora de IMC",
            "bmi_calc_desc": "Calcule su Índice de Masa Corporal y estado de salud",
            "emi_calc_title": "Calculadora de EMI",
            "emi_calc_desc": "Calcule su cuota mensual EMI para préstamos e hipotecas",
            "unit_conv_title": "Conversor de Unidades",
            "unit_conv_desc": "Convierta entre varias unidades de medida",
            "perc_calc_title": "Calculadora de Porcentajes",
            "perc_calc_desc": "Calcule porcentajes y cambios porcentuales",
            "world_time_title": "Hora Mundial",
            "world_time_desc": "Consulte la hora actual en diferentes zonas horarias del mundo",
            "love_calc_title": "Calculadora del Amor",
            "love_calc_desc": "Calcule el porcentaje de amor y compatibilidad entre dos nombres",

            "details": "Detalles",
            "calculate": "Calcular",
            "calculate_age": "Calcular Edad",
            "reset": "Reiniciar",
            "date_of_birth": "Fecha de Nacimiento",
            "day": "Día",
            "month": "Mes",
            "year": "Año",
            "exact_age": "Edad Exacta",
            "years": "Años",
            "months": "Meses",
            "days": "Días",
            "total_days": "Días Totales",
            "total_weeks": "Semanas Totales",
            "total_months": "Meses Totales",
            "next_birthday": "Próximo Cumpleaños",

            "height": "Altura",
            "weight": "Peso",
            "your_bmi": "Su IMC",
            "category": "Categoría",

            "loan_amount": "Monto del Préstamo",
            "interest_rate": "Tasa de Interés (%)",
            "loan_tenure": "Plazo (Años)",
            "monthly_emi": "EMI Mensual",
            "total_interest": "Interés Total",
            "total_payment": "Pago Total",

            "footer_tagline": "Su suite completa de herramientas y calculadoras en línea 100% gratuitas. Rápida, precisa y fácil de usar.",
            "footer_calc_suite": "Suite de Calculadoras",
            "footer_company_legal": "Empresa y Legal",
            "footer_why_pepstudio": "¿Por qué Pepstudio?",
            "footer_about": "Sobre Nosotros",
            "footer_privacy": "Política de Privacidad",
            "footer_terms": "Términos de Servicio",
            "footer_dmca": "DMCA",
            "footer_sitemap": "Mapa del Sitio",
            "footer_free_private": "100% Gratis y Privado",
            "footer_instant": "Resultados Instantáneos",
            "footer_no_reg": "Sin Registro",
            "footer_back_to_top": "Volver arriba",
            "explore_more_tools": "Explorar más herramientas de Pepstudio",
            "accuracy_disclaimer": "Aviso de precisión: Esta herramienta se proporciona para fines informativos y de cálculo general.",

            "about_system_tag": "Sistema de Utilidades de Precisión",
            "about_hero_title": "Empoderando a Profesionales con Herramientas Precisas.",
            "about_hero_p": "pepstudio es una suite 100% gratuita de calculadoras, conversores y herramientas diseñadas para una precisión absoluta y sin fricción.",
            "about_explore_btn": "Explorar Herramientas",
            "about_read_doc_btn": "Leer Documentación",
            "about_speed_title": "Diseñado para la Velocidad. Diseñado para la Precisión.",
            "about_speed_p": "Construimos pepstudio para ser el recurso definitivo de nivel institucional tanto para estudiantes como para profesionales.",
            "about_val1_title": "Resultados Instantáneos",
            "about_val1_p": "Los cálculos ocurren localmente en su navegador sin latencia de servidor.",
            "about_val2_title": "Precisión Absoluta",
            "about_val2_p": "Utilizamos librerías aritméticas avanzadas sin errores de punto flotante.",
            "about_val3_title": "100% Gratis y Abierto",
            "about_val3_p": "Cada calculadora y conversor de nuestra plataforma es completamente gratuito para siempre.",
            "about_tech_title": "Tecnología Moderna",
            "about_tech_p": "Nuestra plataforma está basada en estándares web modernos para garantizar una experiencia fluida.",
            "about_tech_li1": "Renderizado en el cliente para cargas instantáneas de página.",
            "about_tech_li2": "Capacidad fuera de línea mediante estándares PWA.",
            "about_tech_li3": "Diseño responsivo optimizado para escritorio, tablet y móvil."
        },
        fr: {
            "select_language": "Langue",
            "home": "Accueil",
            "hero_title": "Bienvenue sur le site d'outils 100% gratuits",
            "hero_subtitle": "Votre suite de calculatrices en ligne tout-en-un. Rapide, fiable et entièrement gratuite.",
            
            "age_calc_title": "Calculateur d'Âge",
            "age_calc_desc": "Calculez votre âge exact en années, mois et jours",
            "bmi_calc_title": "Calculateur d'IMC",
            "bmi_calc_desc": "Calculez votre Indice de Masse Corporelle et votre état de santé",
            "emi_calc_title": "Calculateur d'EMI",
            "emi_calc_desc": "Calculez vos mensualités pour vos prêts et hypothèques",
            "unit_conv_title": "Convertisseur d'Unités",
            "unit_conv_desc": "Convertissez entre différentes unités de mesure",
            "perc_calc_title": "Calculateur de Pourcentage",
            "perc_calc_desc": "Calculez les pourcentages et leurs variations",
            "world_time_title": "Heure Mondiale",
            "world_time_desc": "Vérifiez l'heure actuelle dans les différents fuseaux horaires",
            "love_calc_title": "Calculateur d'Amour",
            "love_calc_desc": "Calculez le pourcentage d'amour et de compatibilité entre deux prénoms",

            "details": "Détails",
            "calculate": "Calculer",
            "calculate_age": "Calculer l'Âge",
            "reset": "Réinitialiser",
            "date_of_birth": "Date de Naissance",
            "day": "Jour",
            "month": "Mois",
            "year": "Année",
            "exact_age": "Âge Exact",
            "years": "Ans",
            "months": "Mois",
            "days": "Jours",
            "total_days": "Jours Totaux",
            "total_weeks": "Semaines Totales",
            "total_months": "Mois Totaux",
            "next_birthday": "Prochain Anniversaire",

            "height": "Taille",
            "weight": "Poids",
            "your_bmi": "Votre IMC",
            "category": "Catégorie",

            "loan_amount": "Montant du Prêt",
            "interest_rate": "Taux d'Intérêt (%)",
            "loan_tenure": "Durée (Années)",
            "monthly_emi": "Mensualité EMI",
            "total_interest": "Intérêt Total",
            "total_payment": "Paiement Total",

            "footer_tagline": "Votre suite complète d'outils et calculatrices en ligne 100% gratuits. Rapide, précis et simple d'utilisation.",
            "footer_calc_suite": "Suite de Calculatrices",
            "footer_company_legal": "Entreprise & Légal",
            "footer_why_pepstudio": "Pourquoi Pepstudio?",
            "footer_about": "À Propos",
            "footer_privacy": "Politique de Confidentialité",
            "footer_terms": "Conditions d'Utilisation",
            "footer_dmca": "DMCA",
            "footer_sitemap": "Plan du Site",
            "footer_free_private": "100% Gratuit & Privé",
            "footer_instant": "Résultats Instantanés",
            "footer_no_reg": "Sans Inscription",
            "footer_back_to_top": "Haut de page",
            "explore_more_tools": "Explorer plus d'outils Pepstudio",
            "accuracy_disclaimer": "Avertissement de précision: Cet outil est fourni à des fins d'information et de calcul général.",

            "about_system_tag": "Système d'Utilitaires de Précision",
            "about_hero_title": "Autonomiser les Professionnels avec des Outils Précis.",
            "about_hero_p": "pepstudio est une suite 100% gratuite de calculatrices, convertisseurs et utilitaires conçus pour une précision absolue et sans friction.",
            "about_explore_btn": "Explorer les Utilitaires",
            "about_read_doc_btn": "Lire la Documentation",
            "about_speed_title": "Conçu pour la Vitesse. Conçu pour la Précision.",
            "about_speed_p": "Nous avons créé pepstudio pour en faire la ressource définitive et de niveau institutionnel pour étudiants et professionnels.",
            "about_val1_title": "Résultats Instantanés",
            "about_val1_p": "Les calculs s'effectuent localement dans votre navigateur sans latence serveur.",
            "about_val2_title": "Précision Absolue",
            "about_val2_p": "Nous utilisons des bibliothèques arithmétiques avancées sans erreurs d'arrondi.",
            "about_val3_title": "100% Gratuit & Ouvert",
            "about_val3_p": "Chaque calculateur et convertisseur sur notre plateforme est entièrement gratuit.",
            "about_tech_title": "Technologies Modernes",
            "about_tech_p": "Notre plateforme repose sur des standards web modernes pour une expérience fluide.",
            "about_tech_li1": "Rendu côté client pour des chargements de page instantanés.",
            "about_tech_li2": "Fonctionnalité hors ligne via les standards PWA.",
            "about_tech_li3": "Design réactif optimisé pour ordinateur, tablette et mobile."
        },
        de: {
            "select_language": "Sprache",
            "home": "Startseite",
            "hero_title": "Willkommen bei den 100% kostenlosen Werkzeugen",
            "hero_subtitle": "Ihre All-in-One Online-Rechner-Suite. Schnell, zuverlässig und komplett kostenlos.",
            
            "age_calc_title": "Altersrechner",
            "age_calc_desc": "Berechnen Sie Ihr genaues Alter in Jahren, Monaten und Tagen",
            "bmi_calc_title": "BMI Rechner",
            "bmi_calc_desc": "Berechnen Sie Ihren Body-Mass-Index und Ihren Gesundheitsstatus",
            "emi_calc_title": "EMI Rechner",
            "emi_calc_desc": "Berechnen Sie Ihre monatliche Rate für Kredite und Hypotheken",
            "unit_conv_title": "Einheitenumrechner",
            "unit_conv_desc": "Rechnen Sie zwischen verschiedenen Maßeinheiten um",
            "perc_calc_title": "Prozentrechner",
            "perc_calc_desc": "Berechnen Sie Prozentsätze und Prozentänderungen",
            "world_time_title": "Weltzeit",
            "world_time_desc": "Prüfen Sie die aktuelle Uhrzeit in verschiedenen Zeitzonen",
            "love_calc_title": "Liebesrechner",
            "love_calc_desc": "Berechnen Sie den Liebes- und Kompatibilitätsprozentsatz",

            "details": "Details",
            "calculate": "Berechnen",
            "calculate_age": "Alter Berechnen",
            "reset": "Zurücksetzen",
            "date_of_birth": "Geburtsdatum",
            "day": "Tag",
            "month": "Monat",
            "year": "Jahr",
            "exact_age": "Exaktes Alter",
            "years": "Jahre",
            "months": "Monate",
            "days": "Tage",
            "total_days": "Gesamttage",
            "total_weeks": "Gesamtwochen",
            "total_months": "Gesamtmonate",
            "next_birthday": "Nächster Geburtstag",

            "height": "Größe",
            "weight": "Gewicht",
            "your_bmi": "Ihr BMI",
            "category": "Kategorie",

            "loan_amount": "Kreditbetrag",
            "interest_rate": "Zinssatz (%)",
            "loan_tenure": "Laufzeit (Jahre)",
            "monthly_emi": "Monatliche Rate",
            "total_interest": "Gesamtzinsen",
            "total_payment": "Gesamtzahlung",

            "footer_tagline": "Ihre All-in-One Suite aus 100% kostenlosen Online-Rechnern. Schnell, genau und einfach.",
            "footer_calc_suite": "Rechner-Suite",
            "footer_company_legal": "Unternehmen & Rechtliches",
            "footer_why_pepstudio": "Warum Pepstudio?",
            "footer_about": "Über Uns",
            "footer_privacy": "Datenschutz",
            "footer_terms": "Nutzungsbedingungen",
            "footer_dmca": "DMCA",
            "footer_sitemap": "Sitemap",
            "footer_free_private": "100% Kostenlos & Privat",
            "footer_instant": "Sofortige Ergebnisse",
            "footer_no_reg": "Keine Registrierung",
            "footer_back_to_top": "Nach oben",
            "explore_more_tools": "Weitere Pepstudio Tools entdecken",
            "accuracy_disclaimer": "Haftungsausschluss: Dieses Tool dient zu Informations- und allgemeinen Berechnungszwecken.",

            "about_system_tag": "Präzisions-Werkzeugsystem",
            "about_hero_title": "Präzise Werkzeuge für Fachleute.",
            "about_hero_p": "pepstudio ist eine 100% kostenlose Suite von Rechnern, Konvertern und Werkzeugen für höchste Genauigkeit.",
            "about_explore_btn": "Werkzeuge Entdecken",
            "about_read_doc_btn": "Dokumentation Lesen",
            "about_speed_title": "Auf Geschwindigkeit gebaut. Für Präzision entwickelt.",
            "about_speed_p": "Wir haben pepstudio entwickelt, um eine erstklassige Ressource für Studenten und Profis zu bieten.",
            "about_val1_title": "Sofortige Ergebnisse",
            "about_val1_p": "Berechnungen erfolgen lokal im Browser ohne Server-Latenz.",
            "about_val2_title": "Absolute Präzision",
            "about_val2_p": "Wir verwenden fortschrittliche Arithmetik-Bibliotheken ohne Rundungsfehler.",
            "about_val3_title": "100% Kostenlos & Offen",
            "about_val3_p": "Jedes Tool auf unserer Plattform ist für immer völlig kostenlos nutzbar.",
            "about_tech_title": "Moderner Tech-Stack",
            "about_tech_p": "Unsere Plattform basiert auf modernen Webstandards für ein nahtloses Erlebnis.",
            "about_tech_li1": "Clientseitiges Rendering für sofortige Ladezeiten.",
            "about_tech_li2": "Offline-Funktionalität über PWA-Standards.",
            "about_tech_li3": "Responsive Design optimiert für Desktop, Tablet und Mobilgeräte."
        },
        hi: {
            "select_language": "भाषा",
            "home": "मुख्य पृष्ठ",
            "hero_title": "100% मुफ़्त ऑनलाइन टूल साइट में आपका स्वागत है",
            "hero_subtitle": "आपकी ऑल-इन-वन ऑनलाइन कैलकुलेटर सुइट। तेज़, विश्वसनीय और पूरी तरह से मुफ़्त।",
            
            "age_calc_title": "आयु कैलकुलेटर (Age Calculator)",
            "age_calc_desc": "वर्षों, महीनों और दिनों में अपनी सटीक उम्र की गणना करें",
            "bmi_calc_title": "बीएमआई कैलकुलेटर (BMI Calculator)",
            "bmi_calc_desc": "अपने बॉडी मास इंडेक्स और स्वास्थ्य स्थिति की गणना करें",
            "emi_calc_title": "ईएमआई कैलकुलेटर (EMI Calculator)",
            "emi_calc_desc": "ऋण और बंधक के लिए अपनी मासिक ईएमआई की गणना करें",
            "unit_conv_title": "इकाई कनवर्टर (Unit Converter)",
            "unit_conv_desc": "मापन की विभिन्न इकाइयों के बीच कनवर्ट करें",
            "perc_calc_title": "प्रतिशत कैलकुलेटर (Percentage Calculator)",
            "perc_calc_desc": "प्रतिशत और प्रतिशत परिवर्तन की गणना करें",
            "world_time_title": "विश्व समय (World Time)",
            "world_time_desc": "दुनिया भर के विभिन्न समय क्षेत्रों में वर्तमान समय देखें",
            "love_calc_title": "लव कैलकुलेटर (Love Calculator)",
            "love_calc_desc": "दो नामों के बीच प्यार और संगतता प्रतिशत की गणना करें",

            "details": "विवरण",
            "calculate": "गणना करें",
            "calculate_age": "आयु की गणना करें",
            "reset": "रीसेट करें",
            "date_of_birth": "जन्म तिथि",
            "day": "दिन",
            "month": "महीना",
            "year": "वर्ष",
            "exact_age": "सटीक आयु",
            "years": "वर्ष",
            "months": "महीने",
            "days": "दिन",
            "total_days": "कुल दिन",
            "total_weeks": "कुल सप्ताह",
            "total_months": "कुल महीने",
            "next_birthday": "अगला जन्मदिन",

            "height": "ऊंचाई",
            "weight": "वजन",
            "your_bmi": "आपका बीएमआई",
            "category": "श्रेणी",

            "loan_amount": "ऋण राशि",
            "interest_rate": "ब्याज दर (%)",
            "loan_tenure": "अवधि (वर्ष)",
            "monthly_emi": "मासिक ईएमआई",
            "total_interest": "कुल ब्याज",
            "total_payment": "कुल भुगतान",

            "footer_tagline": "100% मुफ़्त ऑनलाइन कैलकुलेटर और उपयोगिता टूल का आपका ऑल-इन-वन सुइट। तेज़, सटीक और उपयोग में आसान।",
            "footer_calc_suite": "कैलकुलेटर सुइट",
            "footer_company_legal": "कंपनी और कानूनी",
            "footer_why_pepstudio": "पेपस्टुडियो क्यों?",
            "footer_about": "हमारे बारे में",
            "footer_privacy": "गोपनीयता नीति",
            "footer_terms": "सेवा की शर्तें",
            "footer_dmca": "डीएमसीए",
            "footer_sitemap": "साइट मैप",
            "footer_free_private": "100% मुफ़्त और निजी",
            "footer_instant": "तुरंत परिणाम",
            "footer_no_reg": "कोई पंजीकरण नहीं",
            "footer_back_to_top": "ऊपर जाएं",
            "explore_more_tools": "अधिक पेपस्टुडियो टूल खोजें",
            "accuracy_disclaimer": "सटीकता अस्वीकरण: यह टूल सामान्य जानकारी और गणना उद्देश्यों के लिए प्रदान किया गया है।",

            "about_system_tag": "सटीक उपयोगिता प्रणाली",
            "about_hero_title": "सटीक टूल के साथ पेशेवरों को सशक्त बनाना।",
            "about_hero_p": "pepstudio कैलकुलेटर, कन्वर्टर्स और टूल का 100% मुफ़्त सुइट है जिसे पूर्ण सटीकता के लिए डिज़ाइन किया गया है।",
            "about_explore_btn": "टूल खोजें",
            "about_read_doc_btn": "दस्तावेज़ पढ़ें",
            "about_speed_title": "गति के लिए निर्मित। सटीकता के लिए इंजीनियर।",
            "about_speed_p": "हमने छात्रों और उद्योग के पेशेवरों के लिए पेपस्टुडियो को एक निश्चित, संस्थागत-स्तरीय संसाधन बनाया है।",
            "about_val1_title": "तुरंत परिणाम",
            "about_val1_p": "गणनाएं आपके ब्राउज़र में स्थानीय रूप से होती हैं, शून्य सर्वर देरी के साथ।",
            "about_val2_title": "पूर्ण सटीकता",
            "about_val2_p": "हम उन्नत अंकगणितीय लाइब्रेरी का उपयोग करते हैं जिससे कोई त्रुटि नहीं होती।",
            "about_val3_title": "100% मुफ़्त और खुला",
            "about_val3_p": "हमारे प्लेटफॉर्म का प्रत्येक कैलकुलेटर और कनवर्टर हमेशा के लिए मुफ़्त है।",
            "about_tech_title": "आधुनिक टेक स्टैक",
            "about_tech_p": "हमारा प्लेटफ़ॉर्म सभी उपकरणों पर सहज अनुभव सुनिश्चित करने के लिए आधुनिक वेब मानकों पर बना है।",
            "about_tech_li1": "त्वरित पृष्ठ लोड के लिए क्लाइंट-साइड रेंडरिंग।",
            "about_tech_li2": "PWA मानकों के माध्यम से ऑफ़लाइन क्षमता।",
            "about_tech_li3": "डेस्कटॉप, टैबलेट और मोबाइल के लिए अनुकूलित रेस्पॉन्सिव डिज़ाइन।"
        },
        zh: {
            "select_language": "语言",
            "home": "首页",
            "hero_title": "欢迎使用100%免费在线工具",
            "hero_subtitle": "您的一站式在线计算器套件。快速、可靠、完全免费。",
            
            "age_calc_title": "年龄计算器",
            "age_calc_desc": "精确计算您的周岁年龄、月数和天数",
            "bmi_calc_title": "BMI身体质量指数计算器",
            "bmi_calc_desc": "计算您的身体质量指数和健康状况",
            "emi_calc_title": "EMI贷款等额本息计算器",
            "emi_calc_desc": "计算您每月贷款和房屋抵押贷款的EMI",
            "unit_conv_title": "单位转换器",
            "unit_conv_desc": "在各种测量单位之间轻松转换",
            "perc_calc_title": "百分比计算器",
            "perc_calc_desc": "计算百分比和百分比变化",
            "world_time_title": "世界时间",
            "world_time_desc": "查看全球不同时区当前的实时时间",
            "love_calc_title": "爱情配对计算器",
            "love_calc_desc": "计算两个名字之间的爱情匹配度百分比",

            "details": "详细信息",
            "calculate": "计算",
            "calculate_age": "计算年龄",
            "reset": "重置",
            "date_of_birth": "出生日期",
            "day": "日",
            "month": "月",
            "year": "年",
            "exact_age": "精确年龄",
            "years": "岁",
            "months": "个月",
            "days": "天",
            "total_days": "总天数",
            "total_weeks": "总周数",
            "total_months": "总月数",
            "next_birthday": "距离下次生日",

            "height": "身高",
            "weight": "体重",
            "your_bmi": "您的 BMI",
            "category": "健康分类",

            "loan_amount": "贷款金额",
            "interest_rate": "年利率 (%)",
            "loan_tenure": "贷款期限 (年)",
            "monthly_emi": "每月供款 (EMI)",
            "total_interest": "总利息",
            "total_payment": "还款总额",

            "footer_tagline": "您的一站式100%免费在线计算器和实用工具套件。快速、精准且易于使用。",
            "footer_calc_suite": "计算器套件",
            "footer_company_legal": "公司与法律",
            "footer_why_pepstudio": "为什么选择 Pepstudio？",
            "footer_about": "关于我们",
            "footer_privacy": "隐私政策",
            "footer_terms": "服务条款",
            "footer_dmca": "DMCA",
            "footer_sitemap": "网站地图",
            "footer_free_private": "100% 免费与隐私安全",
            "footer_instant": "即时生成结果",
            "footer_no_reg": "无需注册",
            "footer_back_to_top": "返回顶部",
            "explore_more_tools": "探索更多 Pepstudio 实用工具",
            "accuracy_disclaimer": "准确性免责声明：本工具仅供常规信息查询和计算参考。",

            "about_system_tag": "高精度实用工具系统",
            "about_hero_title": "为专业人士提供精确的计算工具。",
            "about_hero_p": "pepstudio 是一套100%免费的在线计算器、转换器和实用工具，旨在实现绝对精确与极简体验。无订阅、无干扰，即刻获取所需答案。",
            "about_explore_btn": "探索实用工具",
            "about_read_doc_btn": "阅读文档",
            "about_speed_title": "为速度而生，为精准而研。",
            "about_speed_p": "我们打造 pepstudio，旨在为学生和各行业专业人士提供权威、机构级的计算资源。",
            "about_val1_title": "即时计算结果",
            "about_val1_p": "采用客户端架构，计算过程完全在您的浏览器本地进行，零服务器延迟。",
            "about_val2_title": "绝对高精度",
            "about_val2_p": "底层使用高级高精度算术库，无浮点数误差与意外舍入，提供纯粹的数学结果。",
            "about_val3_title": "100% 免费与开放",
            "about_val3_p": "专业工具不应设限。我们平台上的每个计算器和转换工具都是完全免费使用的，无需注册账号。",
            "about_tech_title": "现代技术栈",
            "about_tech_p": "我们的平台建立在现代 Web 标准之上，确保在所有设备上提供顺畅无缝的体验。",
            "about_tech_li1": "Client-side rendering for instant sub-second page loads.",
            "about_tech_li2": "PWA compliant for full offline availability.",
            "about_tech_li3": "Fully responsive across desktop, tablet, and mobile displays.",

            "select_language": "Select Language",
            "doc_system_badge": "User Guide & Specifications",
            "doc_main_title": "Pepstudio Technical Documentation & System Guide",
            "doc_main_subtitle": "A comprehensive guide to our precision calculation engine, mathematical models, client-side privacy architecture, and utility suite functionality.",
            "doc_sec1_title": "1. System Architecture & Zero-Knowledge Privacy",
            "doc_sec1_p1": "Every tool across the pepstudio suite is engineered with a client-first paradigm. Unlike legacy web converters and financial utility sites that transmit form inputs to remote backend servers, pepstudio performs 100% of computational logic inside your local browser runtime.",
            "doc_sec1_p2": "When you input your date of birth, loan principal, or personal metrics, no HTTP request contains your data. This architecture delivers two fundamental benefits:",
            "doc_sec1_li1": "Zero Latency: Output calculations are rendered instantly upon keypress, bound only by client CPU evaluation speed.",
            "doc_sec1_li2": "Cryptographic Privacy: Confidential financial figures and health indicators never leave your device.",
            "doc_sec2_title": "2. Calculation Models & Mathematical Specifications",
            "doc_age_heading": "🎂 Chronological Age & Anniversary Algorithm",
            "doc_age_desc": "Our age calculation algorithm calculates exact elapsed time between birth date D1 and target date D2, accounting for variable month lengths (28 to 31 days) and Gregorian leap year adjustments.",
            "doc_bmi_heading": "⚖️ Body Mass Index (BMI) & WHO Classification",
            "doc_bmi_desc": "Body Mass Index evaluates height-to-weight proportions according to World Health Organization (WHO) standards:",
            "doc_bmi_cats": "Categories: Underweight (< 18.5), Normal (18.5 – 24.9), Overweight (25 – 29.9), Obese (≥ 30).",
            "doc_emi_heading": "🏦 Equated Monthly Installment (EMI) Formula",
            "doc_emi_desc": "Loan payments utilize the standard actuarial monthly compounding annuity model:",
            "doc_emi_params": "Where P is principal loan amount, r is monthly interest rate, and n is total months.",
            "doc_unit_heading": "📐 Unit Conversion & Arbitrary-Precision Scaling",
            "doc_unit_desc": "Unit conversions rely on standardized SI base unit conversion matrices, eliminating floating-point rounding inaccuracies.",
            "doc_time_heading": "🌐 World Time & IANA Time Zone Synchronization",
            "doc_time_desc": "World Time computations utilize the Intl.DateTimeFormat engine synced with official IANA Time Zone Database specifications.",
            "doc_sec3_title": "3. Offline Mode & PWA Capabilities",
            "doc_sec3_p": "Pepstudio web tools are fully compatible with Progressive Web App (PWA) caching standards. Once you load a tool page, script logic is cached in your browser's local cache storage, enabling full offline operation when internet connectivity is unavailable.",
            "doc_back_btn": "Back to Pepstudio Utilities"
        }
    };

    const supportedLanguages = [
        { code: "en", flag: "🇺🇸", name: "🇺🇸 English" },
        { code: "es", flag: "🇪🇸", name: "🇪🇸 Español" },
        { code: "fr", flag: "🇫🇷", name: "🇫🇷 Français" },
        { code: "de", flag: "🇩🇪", name: "🇩🇪 Deutsch" },
        { code: "hi", flag: "🇮🇳", name: "🇮🇳 हिन्दी" },
        { code: "zh", flag: "🇨🇳", name: "🇨🇳 中文 (Chinese)" }
    ];

    let currentLang = localStorage.getItem("pepstudio_lang") || "en";
    if (!translations[currentLang]) {
        currentLang = "en";
    }

    function getTranslation(key) {
        if (translations[currentLang] && translations[currentLang][key]) {
            return translations[currentLang][key];
        }
        if (translations["en"] && translations["en"][key]) {
            return translations["en"][key];
        }
        return null;
    }

    function applyTranslations() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            const translatedText = getTranslation(key);
            if (translatedText && translatedText !== key) {
                if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
                    el.setAttribute("placeholder", translatedText);
                } else {
                    let textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0);
                    if (textNode) {
                        textNode.nodeValue = " " + translatedText;
                    } else if (el.children.length === 0) {
                        el.textContent = translatedText;
                    }
                }
            }
        });

        // Update html lang attribute
        document.documentElement.lang = currentLang;
    }

    function setLanguage(lang) {
        if (translations[lang]) {
            currentLang = lang;
            localStorage.setItem("pepstudio_lang", lang);
            applyTranslations();
            
            // Sync all selector dropdowns (header and drawer)
            document.querySelectorAll(".pep-lang-select, .pep-drawer-lang-select").forEach(sel => {
                sel.value = lang;
            });

            // Dispatch event for dynamic JS calculators to update outputs
            window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: currentLang } }));
        }
    }

    function getRelativePath(targetPath) {
        const path = window.location.pathname;
        const isSubfolder = path.includes('/age-calculator/') ||
                            path.includes('/bmi-calculator/') ||
                            path.includes('/emi-calculator/') ||
                            path.includes('/unit-converter/') ||
                            path.includes('/percentage-calculator/') ||
                            path.includes('/world-time/') ||
                            path.includes('/love-calculator/');
        return isSubfolder ? '../' + targetPath : './' + targetPath;
    }

    function injectHeaderComponents() {
        const headers = document.querySelectorAll("header");
        headers.forEach(header => {
            if (header.querySelector(".pep-mobile-menu-btn")) return;

            // 1. Create 3-line Mobile Hamburger Button on Left
            const menuBtn = document.createElement("button");
            menuBtn.className = "pep-mobile-menu-btn";
            menuBtn.ariaLabel = "Toggle Menu";
            menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;

            // Prepend 3-line button so it sits on the left
            header.insertBefore(menuBtn, header.firstChild);

            // 2. Create Language Switcher Dropdown on Right (for Desktop)
            if (!header.querySelector(".pep-lang-switcher")) {
                const switcher = document.createElement("div");
                switcher.className = "pep-lang-switcher";

                const select = document.createElement("select");
                select.className = "pep-lang-select";
                select.ariaLabel = "Select Language";

                supportedLanguages.forEach(l => {
                    const opt = document.createElement("option");
                    opt.value = l.code;
                    opt.textContent = l.name;
                    if (l.code === currentLang) opt.selected = true;
                    select.appendChild(opt);
                });

                select.addEventListener("change", (e) => {
                    setLanguage(e.target.value);
                });

                switcher.appendChild(select);
                header.appendChild(switcher);
            }

            // 3. Create Mobile Navigation Drawer (with Language Selector inside)
            if (!document.querySelector(".pep-mobile-drawer")) {
                const drawer = document.createElement("div");
                drawer.className = "pep-mobile-drawer";

                const langOptions = supportedLanguages.map(l => 
                    `<option value="${l.code}" ${l.code === currentLang ? 'selected' : ''}>${l.name}</option>`
                ).join('');

                drawer.innerHTML = `
                    <div class="pep-drawer-overlay"></div>
                    <div class="pep-drawer-content">
                        <div class="pep-drawer-header">
                            <img src="${getRelativePath('images/pepstudio.png')}" alt="Pepstudio Logo" class="pep-drawer-logo">
                            <button class="pep-drawer-close" aria-label="Close Menu">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                        <div class="pep-drawer-lang-box">
                            <div class="pep-drawer-lang-title">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0062ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                <span data-i18n="select_language">Language</span>
                            </div>
                            <select class="pep-drawer-lang-select" aria-label="Select Language">
                                ${langOptions}
                            </select>
                        </div>
                        <nav class="pep-drawer-nav">
                            <a href="${getRelativePath('index.html')}" class="pep-drawer-link">
                                <span class="pep-nav-icon">🏠</span>
                                <span data-i18n="home">Home</span>
                            </a>
                            <a href="${getRelativePath('age-calculator/index.html')}" class="pep-drawer-link">
                                <span class="pep-nav-icon">🎂</span>
                                <span data-i18n="age_calc_title">Age Calculator</span>
                            </a>
                            <a href="${getRelativePath('bmi-calculator/index.html')}" class="pep-drawer-link">
                                <span class="pep-nav-icon">⚖️</span>
                                <span data-i18n="bmi_calc_title">BMI Calculator</span>
                            </a>
                            <a href="${getRelativePath('emi-calculator/index.html')}" class="pep-drawer-link">
                                <span class="pep-nav-icon">🏦</span>
                                <span data-i18n="emi_calc_title">EMI Calculator</span>
                            </a>
                            <a href="${getRelativePath('unit-converter/index.html')}" class="pep-drawer-link">
                                <span class="pep-nav-icon">📐</span>
                                <span data-i18n="unit_conv_title">Unit Converter</span>
                            </a>
                            <a href="${getRelativePath('percentage-calculator/index.html')}" class="pep-drawer-link">
                                <span class="pep-nav-icon">📊</span>
                                <span data-i18n="perc_calc_title">Percentage Calculator</span>
                            </a>
                            <a href="${getRelativePath('world-time/index.html')}" class="pep-drawer-link">
                                <span class="pep-nav-icon">🌐</span>
                                <span data-i18n="world_time_title">World Time</span>
                            </a>
                            <a href="${getRelativePath('love-calculator/index.html')}" class="pep-drawer-link">
                                <span class="pep-nav-icon">❤️</span>
                                <span data-i18n="love_calc_title">Love Calculator</span>
                            </a>
                            <div class="pep-drawer-divider"></div>
                            <a href="${getRelativePath('about-us.html')}" class="pep-drawer-link">
                                <span class="pep-nav-icon">ℹ️</span>
                                <span data-i18n="footer_about">About Us</span>
                            </a>
                        </nav>
                    </div>
                `;
                document.body.appendChild(drawer);

                const overlay = drawer.querySelector(".pep-drawer-overlay");
                const closeBtn = drawer.querySelector(".pep-drawer-close");
                const drawerSelect = drawer.querySelector(".pep-drawer-lang-select");

                drawerSelect.addEventListener("change", (e) => {
                    setLanguage(e.target.value);
                });

                const toggleDrawer = (open) => {
                    if (open) {
                        drawer.classList.add("is-active");
                        document.body.style.overflow = "hidden";
                    } else {
                        drawer.classList.remove("is-active");
                        document.body.style.overflow = "";
                    }
                };

                menuBtn.addEventListener("click", () => toggleDrawer(true));
                overlay.addEventListener("click", () => toggleDrawer(false));
                closeBtn.addEventListener("click", () => toggleDrawer(false));
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        injectHeaderComponents();
        applyTranslations();
    });

    // Expose global i18n object
    window.i18n = {
        t: getTranslation,
        setLanguage: setLanguage,
        getLanguage: () => currentLang,
        supportedLanguages: supportedLanguages
    };
})();
