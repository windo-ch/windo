import { Language } from '../../contexts/LanguageContext';

// Type for the privacy policy translations
type PrivacyTranslationSet = {
  title: string;
  lastUpdated: string;
  intro: {
    headline: string;
    description: string;
  };
  cards: {
    security: {
      title: string;
      description: string;
    };
    transparency: {
      title: string;
      description: string;
    };
    minimization: {
      title: string;
      description: string;
    };
  };
  sections: {
    introduction: {
      title: string;
      paragraph1: string;
      paragraph2: string;
    };
    informationCollect: {
      title: string;
      personalInfo: {
        title: string;
        description: string;
        items: string[];
      };
      automaticInfo: {
        title: string;
        description: string;
        items: string[];
      };
    };
    howWeUse: {
      title: string;
      description: string;
      purposes: {
        service: {
          title: string;
          items: string[];
        };
        improvement: {
          title: string;
          items: string[];
        };
        communication: {
          title: string;
          items: string[];
        };
        security: {
          title: string;
          items: string[];
        };
      };
    };
    legalBasis: {
      title: string;
      items: string[];
    };
    dataSharing: {
      title: string;
      description: string;
      items: string[];
      noSell: string;
    };
    yourRights: {
      title: string;
      description: string;
      items1: string[];
      items2: string[];
      contact: string;
    };
    dataSecurity: {
      title: string;
      description: string;
      items: string[];
    };
    changes: {
      title: string;
      description: string;
      notification: string;
    };
    contact: {
      title: string;
      description: string;
      email: string;
    };
  };
};

// Type for all language translations
export type PrivacyLanguageTranslations = {
  [key in Language]: PrivacyTranslationSet;
};

// Privacy policy translations for all supported languages
export const privacyTranslations: PrivacyLanguageTranslations = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: April 20, 2025",
    intro: {
      headline: "Privacy Policy",
      description: "At Windo, we believe privacy is a fundamental right. This policy demonstrates our commitment to transparency and the highest standards of data protection."
    },
    cards: {
      security: {
        title: "Swiss-Level Security",
        description: "We apply the same precision and care to your data as Swiss watchmakers do to timepieces."
      },
      transparency: {
        title: "Full Transparency",
        description: "We clearly explain what data we collect and exactly how we use it."
      },
      minimization: {
        title: "Data Minimization",
        description: "We only collect what's necessary for providing excellent service."
      }
    },
    sections: {
      introduction: {
        title: "Introduction",
        paragraph1: "Windo (\"we\", \"our\", or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
        paragraph2: "We adhere to the General Data Protection Regulation (GDPR), the Swiss Federal Act on Data Protection (FADP), and other applicable data protection laws. By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy."
      },
      informationCollect: {
        title: "Information We Collect",
        personalInfo: {
          title: "Personal Information",
          description: "We collect information that you voluntarily provide when using our services, including:",
          items: [
            "Contact information (name, email address, phone number, postal address)",
            "Account credentials (username, password)",
            "Payment details (processed via secure third-party payment processors)",
            "Content you create, upload, or provide through our services",
            "Communications with us (support inquiries, feedback)"
          ]
        },
        automaticInfo: {
          title: "Automatically Collected Information",
          description: "When you use our services, we automatically collect certain information, including:",
          items: [
            "Device information (IP address, browser type, operating system)",
            "Usage data (pages visited, time spent, interactions)",
            "Location information (derived from IP address)",
            "Cookies and similar tracking technologies"
          ]
        }
      },
      howWeUse: {
        title: "How We Use Your Information",
        description: "We use the information we collect for the following purposes:",
        purposes: {
          service: {
            title: "Service Provision",
            items: [
              "Creating and managing your account",
              "Processing transactions",
              "Providing customer support",
              "Delivering the requested services"
            ]
          },
          improvement: {
            title: "Service Improvement",
            items: [
              "Analyzing usage patterns",
              "Enhancing user experience",
              "Developing new features",
              "Fixing bugs and issues"
            ]
          },
          communication: {
            title: "Communication",
            items: [
              "Responding to inquiries",
              "Sending service-related announcements",
              "Providing important updates",
              "Marketing (with consent)"
            ]
          },
          security: {
            title: "Security & Protection",
            items: [
              "Preventing fraud and abuse",
              "Protecting system integrity",
              "Ensuring service security",
              "Verifying identity when required"
            ]
          }
        }
      },
      legalBasis: {
        title: "Legal Basis for Processing",
        items: [
          "Contractual Necessity: To fulfill our contractual obligations to you when you use our services",
          "Legitimate Interests: To pursue our legitimate interests in operating, improving, and marketing our services",
          "Legal Obligation: To comply with applicable laws and regulations",
          "Consent: Based on your explicit consent, where required by law"
        ]
      },
      dataSharing: {
        title: "Data Sharing and Disclosure",
        description: "We may share your information with the following categories of recipients:",
        items: [
          "Service Providers: Third-party vendors who help us operate our business (e.g., hosting providers, payment processors, analytics services)",
          "Business Partners: Trusted partners who help us provide and improve our services",
          "Legal Authorities: When required by law, court order, or governmental regulation",
          "Corporate Transactions: In connection with a merger, acquisition, or sale of assets"
        ],
        noSell: "We do not sell your personal information to third parties."
      },
      yourRights: {
        title: "Your Rights",
        description: "Depending on your location, you may have the following rights regarding your personal data:",
        items1: [
          "Right to access your personal data",
          "Right to rectify inaccurate data",
          "Right to erasure (\"right to be forgotten\")",
          "Right to restrict processing"
        ],
        items2: [
          "Right to data portability",
          "Right to object to processing",
          "Right to withdraw consent",
          "Right to lodge a complaint with a supervisory authority"
        ],
        contact: "To exercise your rights, please contact us at privacy@windo.ch."
      },
      dataSecurity: {
        title: "Data Security",
        description: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, accidental loss, alteration, or disclosure. Our security measures include:",
        items: [
          "Encryption of sensitive data",
          "Regular security assessments",
          "Access controls and authentication mechanisms",
          "Secure data storage practices",
          "Employee training on data protection"
        ]
      },
      changes: {
        title: "Changes to This Policy",
        description: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised effective date.",
        notification: "For significant changes, we will provide a more prominent notice, which may include email notification to registered users."
      },
      contact: {
        title: "Contact Us",
        description: "If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:",
        email: "privacy@windo.ch"
      }
    }
  },
  de: {
    title: "Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert: 20. April 2025",
    intro: {
      headline: "Datenschutzerklärung",
      description: "Bei Windo glauben wir, dass Privatsphäre ein grundlegendes Recht ist. Diese Richtlinie demonstriert unser Engagement für Transparenz und höchste Standards beim Datenschutz."
    },
    cards: {
      security: {
        title: "Schweizer Sicherheitsniveau",
        description: "Wir behandeln Ihre Daten mit der gleichen Präzision und Sorgfalt wie Schweizer Uhrmacher ihre Zeitmesser."
      },
      transparency: {
        title: "Volle Transparenz",
        description: "Wir erklären klar, welche Daten wir sammeln und wie genau wir sie verwenden."
      },
      minimization: {
        title: "Datenminimierung",
        description: "Wir sammeln nur, was für die Bereitstellung eines exzellenten Services notwendig ist."
      }
    },
    sections: {
      introduction: {
        title: "Einführung",
        paragraph1: "Windo (\"wir\", \"unser\" oder \"uns\") verpflichtet sich, Ihre Privatsphäre zu schützen. Diese Datenschutzerklärung erläutert, wie wir Ihre Informationen sammeln, verwenden, offenlegen und schützen, wenn Sie unsere Website besuchen oder unsere Dienste nutzen.",
        paragraph2: "Wir halten uns an die Datenschutz-Grundverordnung (DSGVO), das Schweizerische Bundesgesetz über den Datenschutz (DSG) und andere anwendbare Datenschutzgesetze. Durch den Zugriff auf oder die Nutzung unserer Dienste bestätigen Sie, dass Sie diese Datenschutzerklärung gelesen und verstanden haben."
      },
      informationCollect: {
        title: "Informationen, die wir sammeln",
        personalInfo: {
          title: "Persönliche Informationen",
          description: "Wir sammeln Informationen, die Sie freiwillig angeben, wenn Sie unsere Dienste nutzen, einschliesslich:",
          items: [
            "Kontaktinformationen (Name, E-Mail-Adresse, Telefonnummer, Postanschrift)",
            "Kontoanmeldedaten (Benutzername, Passwort)",
            "Zahlungsdetails (verarbeitet über sichere Zahlungsabwickler von Drittanbietern)",
            "Inhalte, die Sie über unsere Dienste erstellen, hochladen oder bereitstellen",
            "Kommunikation mit uns (Support-Anfragen, Feedback)"
          ]
        },
        automaticInfo: {
          title: "Automatisch gesammelte Informationen",
          description: "Wenn Sie unsere Dienste nutzen, sammeln wir automatisch bestimmte Informationen, einschliesslich:",
          items: [
            "Geräteinformationen (IP-Adresse, Browsertyp, Betriebssystem)",
            "Nutzungsdaten (besuchte Seiten, verbrachte Zeit, Interaktionen)",
            "Standortinformationen (abgeleitet von der IP-Adresse)",
            "Cookies und ähnliche Tracking-Technologien"
          ]
        }
      },
      howWeUse: {
        title: "Wie wir Ihre Informationen verwenden",
        description: "Wir verwenden die gesammelten Informationen für folgende Zwecke:",
        purposes: {
          service: {
            title: "Dienstbereitstellung",
            items: [
              "Erstellung und Verwaltung Ihres Kontos",
              "Verarbeitung von Transaktionen",
              "Bereitstellung von Kundensupport",
              "Lieferung der angeforderten Dienste"
            ]
          },
          improvement: {
            title: "Serviceverbesserung",
            items: [
              "Analyse von Nutzungsmustern",
              "Verbesserung der Benutzererfahrung",
              "Entwicklung neuer Funktionen",
              "Behebung von Fehlern und Problemen"
            ]
          },
          communication: {
            title: "Kommunikation",
            items: [
              "Beantwortung von Anfragen",
              "Versenden servicebezogener Ankündigungen",
              "Bereitstellung wichtiger Updates",
              "Marketing (mit Zustimmung)"
            ]
          },
          security: {
            title: "Sicherheit & Schutz",
            items: [
              "Verhinderung von Betrug und Missbrauch",
              "Schutz der Systemintegrität",
              "Gewährleistung der Dienstsicherheit",
              "Identitätsüberprüfung bei Bedarf"
            ]
          }
        }
      },
      legalBasis: {
        title: "Rechtsgrundlage für die Verarbeitung",
        items: [
          "Vertragliche Notwendigkeit: Um unsere vertraglichen Verpflichtungen Ihnen gegenüber zu erfüllen, wenn Sie unsere Dienste nutzen",
          "Berechtigte Interessen: Um unsere legitimen Interessen beim Betrieb, der Verbesserung und dem Marketing unserer Dienste zu verfolgen",
          "Rechtliche Verpflichtung: Um geltende Gesetze und Vorschriften einzuhalten",
          "Zustimmung: Basierend auf Ihrer ausdrücklichen Zustimmung, wo dies gesetzlich vorgeschrieben ist"
        ]
      },
      dataSharing: {
        title: "Datenaustausch und Offenlegung",
        description: "Wir können Ihre Informationen mit folgenden Kategorien von Empfängern teilen:",
        items: [
          "Dienstleister: Drittanbieter, die uns beim Betrieb unseres Geschäfts helfen (z.B. Hosting-Anbieter, Zahlungsabwickler, Analysedienste)",
          "Geschäftspartner: Vertrauenswürdige Partner, die uns bei der Bereitstellung und Verbesserung unserer Dienste helfen",
          "Rechtliche Behörden: Wenn dies gesetzlich vorgeschrieben ist, durch gerichtliche Anordnung oder staatliche Vorschriften",
          "Unternehmenstransaktionen: Im Zusammenhang mit einer Fusion, Übernahme oder Veräusserung von Vermögenswerten"
        ],
        noSell: "Wir verkaufen Ihre persönlichen Daten nicht an Dritte."
      },
      yourRights: {
        title: "Ihre Rechte",
        description: "Je nach Ihrem Standort haben Sie möglicherweise folgende Rechte bezüglich Ihrer personenbezogenen Daten:",
        items1: [
          "Recht auf Zugang zu Ihren personenbezogenen Daten",
          "Recht auf Berichtigung ungenauer Daten",
          "Recht auf Löschung (\"Recht auf Vergessenwerden\")",
          "Recht auf Einschränkung der Verarbeitung"
        ],
        items2: [
          "Recht auf Datenübertragbarkeit",
          "Recht auf Widerspruch gegen die Verarbeitung",
          "Recht auf Widerruf der Einwilligung",
          "Recht auf Beschwerde bei einer Aufsichtsbehörde"
        ],
        contact: "Um Ihre Rechte auszuüben, kontaktieren Sie uns bitte unter privacy@windo.ch."
      },
      dataSecurity: {
        title: "Datensicherheit",
        description: "Wir implementieren angemessene technische und organisatorische Massnahmen zum Schutz Ihrer personenbezogenen Daten vor unbefugtem Zugriff, versehentlichem Verlust, Änderung oder Offenlegung. Unsere Sicherheitsmassnahmen umfassen:",
        items: [
          "Verschlüsselung sensibler Daten",
          "Regelmässige Sicherheitsbewertungen",
          "Zugriffskontrolle und Authentifizierungsmechanismen",
          "Sichere Datenspeicherungspraktiken",
          "Mitarbeiterschulung zum Datenschutz"
        ]
      },
      changes: {
        title: "Änderungen dieser Richtlinie",
        description: "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen in unseren Praktiken oder gesetzlichen Anforderungen widerzuspiegeln. Die aktualisierte Richtlinie wird auf dieser Seite mit einem überarbeiteten Gültigkeitsdatum veröffentlicht.",
        notification: "Bei wesentlichen Änderungen werden wir einen deutlicheren Hinweis geben, der auch eine E-Mail-Benachrichtigung an registrierte Benutzer enthalten kann."
      },
      contact: {
        title: "Kontaktieren Sie uns",
        description: "Wenn Sie Fragen, Bedenken oder Anfragen bezüglich dieser Datenschutzerklärung oder unserer Datenschutzpraktiken haben, kontaktieren Sie uns bitte unter:",
        email: "privacy@windo.ch"
      }
    }
  },
  fr: {
    title: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour: 20 avril 2025",
    intro: {
      headline: "Politique de Confidentialité",
      description: "Chez Windo, nous croyons que la confidentialité est un droit fondamental. Cette politique démontre notre engagement envers la transparence et les normes les plus élevées de protection des données."
    },
    cards: {
      security: {
        title: "Sécurité de Niveau Suisse",
        description: "Nous appliquons à vos données la même précision et le même soin que les horlogers suisses à leurs montres."
      },
      transparency: {
        title: "Transparence Totale",
        description: "Nous expliquons clairement quelles données nous collectons et comment nous les utilisons."
      },
      minimization: {
        title: "Minimisation des Données",
        description: "Nous ne collectons que ce qui est nécessaire pour fournir un service excellent."
      }
    },
    sections: {
      introduction: {
        title: "Introduction",
        paragraph1: "Windo (\"nous\", \"notre\" ou \"nos\") s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web ou utilisez nos services.",
        paragraph2: "Nous adhérons au Règlement Général sur la Protection des Données (RGPD), à la Loi fédérale suisse sur la protection des données (LPD) et à d'autres lois applicables en matière de protection des données. En accédant à nos services ou en les utilisant, vous reconnaissez avoir lu et compris cette politique de confidentialité."
      },
      informationCollect: {
        title: "Informations que Nous Collectons",
        personalInfo: {
          title: "Informations Personnelles",
          description: "Nous collectons les informations que vous fournissez volontairement lorsque vous utilisez nos services, notamment:",
          items: [
            "Informations de contact (nom, adresse e-mail, numéro de téléphone, adresse postale)",
            "Identifiants de compte (nom d'utilisateur, mot de passe)",
            "Détails de paiement (traités via des processeurs de paiement tiers sécurisés)",
            "Contenu que vous créez, téléchargez ou fournissez via nos services",
            "Communications avec nous (demandes d'assistance, retours)"
          ]
        },
        automaticInfo: {
          title: "Informations Collectées Automatiquement",
          description: "Lorsque vous utilisez nos services, nous collectons automatiquement certaines informations, notamment:",
          items: [
            "Informations sur l'appareil (adresse IP, type de navigateur, système d'exploitation)",
            "Données d'utilisation (pages visitées, temps passé, interactions)",
            "Informations de localisation (dérivées de l'adresse IP)",
            "Cookies et technologies de suivi similaires"
          ]
        }
      },
      howWeUse: {
        title: "Comment Nous Utilisons Vos Informations",
        description: "Nous utilisons les informations que nous collectons aux fins suivantes:",
        purposes: {
          service: {
            title: "Fourniture de Services",
            items: [
              "Création et gestion de votre compte",
              "Traitement des transactions",
              "Fourniture du support client",
              "Livraison des services demandés"
            ]
          },
          improvement: {
            title: "Amélioration des Services",
            items: [
              "Analyse des modèles d'utilisation",
              "Amélioration de l'expérience utilisateur",
              "Développement de nouvelles fonctionnalités",
              "Correction des bugs et problèmes"
            ]
          },
          communication: {
            title: "Communication",
            items: [
              "Réponse aux demandes",
              "Envoi d'annonces liées au service",
              "Fourniture de mises à jour importantes",
              "Marketing (avec consentement)"
            ]
          },
          security: {
            title: "Sécurité & Protection",
            items: [
              "Prévention de la fraude et des abus",
              "Protection de l'intégrité du système",
              "Garantie de la sécurité du service",
              "Vérification de l'identité lorsque nécessaire"
            ]
          }
        }
      },
      legalBasis: {
        title: "Base Juridique du Traitement",
        items: [
          "Nécessité Contractuelle: Pour remplir nos obligations contractuelles envers vous lorsque vous utilisez nos services",
          "Intérêts Légitimes: Pour poursuivre nos intérêts légitimes dans l'exploitation, l'amélioration et la commercialisation de nos services",
          "Obligation Légale: Pour se conformer aux lois et réglementations applicables",
          "Consentement: Basé sur votre consentement explicite, lorsque la loi l'exige"
        ]
      },
      dataSharing: {
        title: "Partage et Divulgation des Données",
        description: "Nous pouvons partager vos informations avec les catégories de destinataires suivantes:",
        items: [
          "Fournisseurs de Services: Fournisseurs tiers qui nous aident à exploiter notre entreprise (par exemple, fournisseurs d'hébergement, processeurs de paiement, services d'analyse)",
          "Partenaires Commerciaux: Partenaires de confiance qui nous aident à fournir et à améliorer nos services",
          "Autorités Légales: Lorsque requis par la loi, une décision de justice ou une réglementation gouvernementale",
          "Transactions d'Entreprise: Dans le cadre d'une fusion, acquisition ou vente d'actifs"
        ],
        noSell: "Nous ne vendons pas vos informations personnelles à des tiers."
      },
      yourRights: {
        title: "Vos Droits",
        description: "Selon votre emplacement, vous pouvez avoir les droits suivants concernant vos données personnelles:",
        items1: [
          "Droit d'accès à vos données personnelles",
          "Droit de rectifier les données inexactes",
          "Droit à l'effacement (\"droit à l'oubli\")",
          "Droit de limiter le traitement"
        ],
        items2: [
          "Droit à la portabilité des données",
          "Droit de s'opposer au traitement",
          "Droit de retirer son consentement",
          "Droit de déposer un plaintive auprès d'une autorité de contrôle"
        ],
        contact: "Pour exercer vos droits, veuillez nous contacter à privacy@windo.ch."
      },
      dataSecurity: {
        title: "Sécurité des Données",
        description: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre l'accès non autorisé, la perte accidentelle, l'altération ou la divulgation. Nos mesures de sécurité comprennent:",
        items: [
          "Chiffrement des données sensibles",
          "Évaluations régulières de sécurité",
          "Contrôles d'accès et mécanismes d'authentification",
          "Pratiques sécurisées de stockage des données",
          "Formation des employés à la protection des données"
        ]
      },
      changes: {
        title: "Modifications de Cette Politique",
        description: "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour refléter les changements dans nos pratiques ou les exigences légales. La politique mise à jour sera publiée sur cette page avec une date d'entrée en vigueur révisée.",
        notification: "Pour les changements importants, nous fournirons un avis plus visible, qui peut inclure une notification par e-mail aux utilisateurs enregistrés."
      },
      contact: {
        title: "Contactez-nous",
        description: "Si vous avez des questions, préoccupations ou demandes concernant cette politique de confidentialité ou nos pratiques de confidentialité, veuillez nous contacter à:",
        email: "privacy@windo.ch"
      }
    }
  },
  it: {
    title: "Informativa sulla Privacy",
    lastUpdated: "Ultimo aggiornamento: 20 aprile 2025",
    intro: {
      headline: "Informativa sulla Privacy",
      description: "In Windo, crediamo che la privacy sia un diritto fondamentale. Questa politica dimostra il nostro impegno per la trasparenza e i più alti standard di protezione dei dati."
    },
    cards: {
      security: {
        title: "Sicurezza di Livello Svizzero",
        description: "Applichiamo ai tuoi dati la stessa precisione e cura che gli orologiai svizzeri riservano ai loro orologi."
      },
      transparency: {
        title: "Piena Trasparenza",
        description: "Spieghiamo chiaramente quali dati raccogliamo e esattamente come li utilizziamo."
      },
      minimization: {
        title: "Minimizzazione dei Dati",
        description: "Raccogliamo solo ciò che è necessario per fornire un servizio eccellente."
      }
    },
    sections: {
      introduction: {
        title: "Introduzione",
        paragraph1: "Windo (\"noi\", \"nostro\" o \"ci\") si impegna a proteggere la tua privacy. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulghiamo e salvaguardiamo le tue informazioni quando visiti il nostro sito web o utilizzi i nostri servizi.",
        paragraph2: "Aderiamo al Regolamento Generale sulla Protezione dei Dati (GDPR), alla Legge federale svizzera sulla protezione dei dati (LPD) e ad altre leggi applicabili sulla protezione dei dati. Accedendo o utilizzando i nostri servizi, riconosci di aver letto e compreso questa Informativa sulla Privacy."
      },
      informationCollect: {
        title: "Informazioni che Raccogliamo",
        personalInfo: {
          title: "Informazioni Personali",
          description: "Raccogliamo le informazioni che fornisci volontariamente quando utilizzi i nostri servizi, tra cui:",
          items: [
            "Informazioni di contatto (nome, indirizzo email, numero di telefono, indirizzo postale)",
            "Credenziali dell'account (nome utente, password)",
            "Dettagli di pagamento (elaborati tramite processori di pagamento terzi sicuri)",
            "Contenuti che crei, carichi o fornisci attraverso i nostri servizi",
            "Comunicazioni con noi (richieste di supporto, feedback)"
          ]
        },
        automaticInfo: {
          title: "Informazioni Raccolte Automaticamente",
          description: "Quando utilizzi i nostri servizi, raccogliamo automaticamente determinate informazioni, tra cui:",
          items: [
            "Informazioni sul dispositivo (indirizzo IP, tipo di browser, sistema operativo)",
            "Dati di utilizzo (pagine visitate, tempo trascorso, interazioni)",
            "Informazioni sulla posizione (derivate dall'indirizzo IP)",
            "Cookie e tecnologie di tracciamento simili"
          ]
        }
      },
      howWeUse: {
        title: "Come Utilizziamo le Tue Informazioni",
        description: "Utilizziamo le informazioni che raccogliamo per i seguenti scopi:",
        purposes: {
          service: {
            title: "Fornitura di Servizi",
            items: [
              "Creazione e gestione del tuo account",
              "Elaborazione delle transazioni",
              "Fornitura di assistenza clienti",
              "Erogazione dei servizi richiesti"
            ]
          },
          improvement: {
            title: "Miglioramento dei Servizi",
            items: [
              "Analisi dei modelli di utilizzo",
              "Miglioramento dell'esperienza utente",
              "Sviluppo di nuove funzionalità",
              "Risoluzione di bug e problemi"
            ]
          },
          communication: {
            title: "Comunicazione",
            items: [
              "Risposta alle richieste",
              "Invio di annunci relativi al servizio",
              "Fornitura di aggiornamenti importanti",
              "Marketing (con consenso)"
            ]
          },
          security: {
            title: "Sicurezza & Protezione",
            items: [
              "Prevenzione di frodi e abusi",
              "Protezione dell'integrità del sistema",
              "Garanzia della sicurezza del servizio",
              "Verifica dell'identità quando necessario"
            ]
          }
        }
      },
      legalBasis: {
        title: "Base Giuridica del Trattamento",
        items: [
          "Necessità Contrattuale: Per adempiere ai nostri obblighi contrattuali nei tuoi confronti quando utilizzi i nostri servizi",
          "Interessi Legittimi: Per perseguire i nostri legittimi interessi nel gestire, migliorare e commercializzare i nostri servizi",
          "Obbligo Legale: Per rispettare le leggi e i regolamenti applicabili",
          "Consenso: Basato sul tuo consenso esplicito, ove richiesto dalla legge"
        ]
      },
      dataSharing: {
        title: "Condivisione e Divulgazione dei Dati",
        description: "Potremmo condividere le tue informazioni con le seguenti categorie di destinatari:",
        items: [
          "Fornitori di Servizi: Fornitori terzi che ci aiutano a gestire la nostra attività (ad es. provider di hosting, processori di pagamento, servizi di analisi)",
          "Partner Commerciali: Partner fidati che ci aiutano a fornire e migliorare i nostri servizi",
          "Autorità Legali: Quando richiesto dalla legge, da un ordine del tribunale o da un regolamento governativo",
          "Transazioni Aziendali: In relazione a una fusione, acquisizione o vendita di beni"
        ],
        noSell: "Non vendiamo le tue informazioni personali a terze parti."
      },
      yourRights: {
        title: "I Tuoi Diritti",
        description: "A seconda della tua posizione, potresti avere i seguenti diritti riguardo ai tuoi dati personali:",
        items1: [
          "Diritto di accesso ai tuoi dati personali",
          "Diritto di rettificare dati inesatti",
          "Diritto alla cancellazione (\"diritto all'oblio\")",
          "Diritto alla limitazione del trattamento"
        ],
        items2: [
          "Diritto alla portabilità dei dati",
          "Diritto di opporsi al trattamento",
          "Diritto di revocare il consenso",
          "Diritto di presentare un reclamo a un'autorità di controllo"
        ],
        contact: "Per esercitare i tuoi diritti, contattaci all'indirizzo privacy@windo.ch."
      },
      dataSecurity: {
        title: "Sicurezza dei Dati",
        description: "Implementiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati personali contro accesso non autorizzato, perdita accidentale, alterazione ou divulgazione. Le nostre misure di sicurezza includono:",
        items: [
          "Crittografia dei dati sensibili",
          "Valutazioni di sicurezza regolari",
          "Controlli di accesso e meccanismi di autenticazione",
          "Pratiche sicure di archiviazione dei dati",
          "Formazione dei dipendenti sulla protezione dei dati"
        ]
      },
      changes: {
        title: "Modifiche a Questa Informativa",
        description: "Potremmo aggiornare questa Informativa sulla Privacy di tanto in tanto per riflettere cambiamenti nelle nostre pratiche o requisiti legali. L'informativa aggiornata sarà pubblicata su questa pagina con una data di efficacia rivista.",
        notification: "Per cambiamenti significativi, forniremo un avviso più evidente, che può includere una notifica via email agli utenti registrati."
      },
      contact: {
        title: "Contattaci",
        description: "Se hai domande, dubbi o richieste riguardanti questa Informativa sulla Privacy o le nostre pratiche sulla privacy, contattaci all'indirizzo:",
        email: "privacy@windo.ch"
      }
    }
  }
}; 