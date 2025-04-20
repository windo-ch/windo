import { Language } from '../../contexts/LanguageContext';

// Type for the terms of service translations
type TermsTranslationSet = {
  title: string;
  lastUpdated: string;
  intro: {
    headline: string;
    description: string;
  };
  cards: {
    commitments: {
      title: string;
      description: string;
    };
    quality: {
      title: string;
      description: string;
    };
    rights: {
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
    eligibility: {
      title: string;
      requirements: {
        title: string;
        items: string[];
      };
      account: {
        title: string;
        items: string[];
      };
    };
    services: {
      title: string;
      description: {
        title: string;
        content: string;
      };
      subscription: {
        title: string;
        content: string;
        items: string[];
      };
      cancellation: {
        title: string;
        content: string;
      };
    };
    intellectualProperty: {
      title: string;
      yourContent: {
        title: string;
        content: string;
      };
      ourIP: {
        title: string;
        content: string;
      };
      guidelines: {
        title: string;
        content: string;
        items: string[];
      };
    };
    limitations: {
      title: string;
      availability: {
        title: string;
        content: string;
      };
      disclaimer: {
        title: string;
        content: string;
      };
      liability: {
        title: string;
        content: string;
      };
    };
    termination: {
      title: string;
      content: string;
      byYou: {
        title: string;
        content: string;
      };
      byUs: {
        title: string;
        content: string;
      };
    };
    governing: {
      title: string;
      content: string;
      dispute: {
        title: string;
        content: string;
        steps: string[];
      };
    };
    changes: {
      title: string;
      content: string;
      notification: string;
    };
    contact: {
      title: string;
      content: string;
      email: string;
    };
  };
};

// Type for all language translations
export type TermsLanguageTranslations = {
  [key in Language]: TermsTranslationSet;
};

// English translations for Terms of Service
const en: TermsTranslationSet = {
  title: "Terms of Service",
  lastUpdated: "Last updated: April 20, 2025",
  intro: {
    headline: "Terms of Service",
    description: "These Terms of Service establish the foundation of our relationship with you, ensuring clarity, fairness, and mutual understanding as we work together."
  },
  cards: {
    commitments: {
      title: "Clear Commitments",
      description: "We clearly define what you can expect from us and what we expect from you."
    },
    quality: {
      title: "Swiss Quality Standard",
      description: "We uphold the highest standards of service and support, reflecting Swiss precision."
    },
    rights: {
      title: "Your Rights Protected",
      description: "Fair terms that respect your intellectual property and business needs."
    }
  },
  sections: {
    introduction: {
      title: "Introduction",
      paragraph1: "Welcome to Windo. These Terms of Service (\"Terms\") constitute a legally binding agreement between you (\"User,\" \"you,\" or \"your\") and Windo AG (\"Company,\" \"we,\" \"us,\" or \"our\") governing your access to and use of the Windo website, applications, and services (collectively, the \"Services\").",
      paragraph2: "By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not access or use our Services."
    },
    eligibility: {
      title: "Eligibility and Account Registration",
      requirements: {
        title: "Eligibility Requirements",
        items: [
          "Be at least 18 years of age or the age of legal majority in your jurisdiction",
          "Have the legal capacity to enter into these Terms",
          "Not be prohibited from using the Services under applicable laws"
        ]
      },
      account: {
        title: "Account Creation and Security",
        items: [
          "Provide accurate, current, and complete information",
          "Maintain and promptly update your account information",
          "Keep your password secure and confidential",
          "Notify us immediately of any unauthorized use of your account",
          "Be solely responsible for all activities that occur under your account"
        ]
      }
    },
    services: {
      title: "Services and Subscription",
      description: {
        title: "Service Description",
        content: "Windo provides a platform for creating, designing, and managing websites for businesses and individuals. Our Services include website building tools, hosting, domain registration assistance, and related digital services."
      },
      subscription: {
        title: "Subscription Plans and Fees",
        content: "We offer various subscription plans with different features and pricing. By selecting a paid plan, you agree to:",
        items: [
          "Pay all fees associated with your selected plan",
          "Provide accurate and complete billing information",
          "Authorize us to charge your payment method for the selected plan",
          "Accept that fees may change with reasonable notice"
        ]
      },
      cancellation: {
        title: "Cancellation and Refunds",
        content: "You may cancel your subscription at any time by contacting us or through your account settings. Refunds are available according to our Refund Policy, which is incorporated by reference into these Terms."
      }
    },
    intellectualProperty: {
      title: "Intellectual Property Rights",
      yourContent: {
        title: "Your Content",
        content: "You retain all rights to content you create, upload, or display on or through the Services. By using our Services, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display your content solely for the purpose of providing and improving the Services."
      },
      ourIP: {
        title: "Our Intellectual Property",
        content: "The Services, including all related features, content, and functionality, are owned by Windo and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Services without our explicit permission."
      },
      guidelines: {
        title: "Content Guidelines",
        content: "You are solely responsible for the content you create using our Services. You agree not to use our Services to create, upload, or display content that:",
        items: [
          "Infringes on the intellectual property rights of others",
          "Violates any applicable laws or regulations",
          "Contains harmful, abusive, or offensive material",
          "Promotes illegal activities or discrimination",
          "Impersonates another person or entity"
        ]
      }
    },
    limitations: {
      title: "Limitations and Disclaimers",
      availability: {
        title: "Service Availability",
        content: "While we strive to ensure that our Services are available at all times, we do not guarantee uninterrupted or error-free operation. We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time with or without notice."
      },
      disclaimer: {
        title: "Disclaimer of Warranties",
        content: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT."
      },
      liability: {
        title: "Limitation of Liability",
        content: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WINDO, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES."
      }
    },
    termination: {
      title: "Term and Termination",
      content: "These Terms will remain in effect until terminated by either you or Windo.",
      byYou: {
        title: "Termination by You",
        content: "You may terminate these Terms at any time by canceling your account and discontinuing the use of our Services. Certain provisions of these Terms will survive termination."
      },
      byUs: {
        title: "Termination by Us",
        content: "We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will cease immediately."
      }
    },
    governing: {
      title: "Governing Law and Dispute Resolution",
      content: "These Terms shall be governed by and construed in accordance with the laws of Switzerland, without regard to its conflict of law principles.",
      dispute: {
        title: "Dispute Resolution",
        content: "Any dispute arising out of or in connection with these Terms shall be resolved as follows:",
        steps: [
          "We encourage you to contact us first to seek an amicable resolution.",
          "If the dispute cannot be resolved amicably, it shall be submitted to the exclusive jurisdiction of the courts of Zug, Switzerland.",
          "Notwithstanding the foregoing, we reserve the right to bring proceedings in any jurisdiction to obtain injunctive relief or other urgent legal remedies."
        ]
      }
    },
    changes: {
      title: "Changes to These Terms",
      content: "We may update these Terms from time to time to reflect changes in our practices, Services, or legal requirements. The updated Terms will be posted on this page with a revised effective date.",
      notification: "For significant changes, we will provide a more prominent notice, which may include email notification to registered users."
    },
    contact: {
      title: "Contact Us",
      content: "If you have any questions, concerns, or feedback regarding these Terms or our Services, please contact us at:",
      email: "legal@windo.ch"
    }
  }
};

// German translations for Terms of Service
const de: TermsTranslationSet = {
  title: "Nutzungsbedingungen",
  lastUpdated: "Zuletzt aktualisiert: 20. April 2025",
  intro: {
    headline: "Nutzungsbedingungen",
    description: "Diese Nutzungsbedingungen bilden die Grundlage unserer Beziehung zu Ihnen und sorgen für Klarheit, Fairness und gegenseitiges Verständnis bei unserer Zusammenarbeit."
  },
  cards: {
    commitments: {
      title: "Klare Verpflichtungen",
      description: "Wir definieren klar, was Sie von uns erwarten können und was wir von Ihnen erwarten."
    },
    quality: {
      title: "Schweizer Qualitätsstandard",
      description: "Wir halten die höchsten Standards für Service und Support ein, die Schweizer Präzision widerspiegeln."
    },
    rights: {
      title: "Ihre Rechte geschützt",
      description: "Faire Bedingungen, die Ihr geistiges Eigentum und Ihre geschäftlichen Bedürfnisse respektieren."
    }
  },
  sections: {
    introduction: {
      title: "Einführung",
      paragraph1: "Willkommen bei Windo. Diese Nutzungsbedingungen (\"Bedingungen\") stellen eine rechtlich bindende Vereinbarung zwischen Ihnen (\"Nutzer\", \"Sie\" oder \"Ihr\") und der Windo AG (\"Unternehmen\", \"wir\", \"uns\" oder \"unser\") dar, die Ihren Zugang zu und die Nutzung der Windo-Website, -Anwendungen und -Dienste (zusammen die \"Dienste\") regelt.",
      paragraph2: "Durch den Zugriff auf oder die Nutzung unserer Dienste bestätigen Sie, dass Sie diese Bedingungen gelesen und verstanden haben und damit einverstanden sind, an diese gebunden zu sein. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, nutzen Sie bitte unsere Dienste nicht."
    },
    eligibility: {
      title: "Teilnahmeberechtigung und Kontoregistrierung",
      requirements: {
        title: "Teilnahmevoraussetzungen",
        items: [
          "Mindestens 18 Jahre alt oder das Alter der gesetzlichen Volljährigkeit in Ihrer Gerichtsbarkeit sein",
          "Die rechtliche Fähigkeit besitzen, diese Bedingungen einzugehen",
          "Nicht von der Nutzung der Dienste nach geltendem Recht ausgeschlossen sein"
        ]
      },
      account: {
        title: "Kontoerstellung und Sicherheit",
        items: [
          "Genaue, aktuelle und vollständige Informationen bereitstellen",
          "Ihre Kontoinformationen pflegen und umgehend aktualisieren",
          "Ihr Passwort sicher und vertraulich halten",
          "Uns sofort über jede unbefugte Nutzung Ihres Kontos informieren",
          "Allein verantwortlich sein für alle Aktivitäten, die unter Ihrem Konto stattfinden"
        ]
      }
    },
    services: {
      title: "Dienste und Abonnement",
      description: {
        title: "Dienstbeschreibung",
        content: "Windo bietet eine Plattform für die Erstellung, Gestaltung und Verwaltung von Websites für Unternehmen und Einzelpersonen. Unsere Dienste umfassen Website-Bau-Tools, Hosting, Unterstützung bei der Domainregistrierung und verwandte digitale Dienste."
      },
      subscription: {
        title: "Abonnementpläne und Gebühren",
        content: "Wir bieten verschiedene Abonnementpläne mit unterschiedlichen Funktionen und Preisen an. Durch die Auswahl eines kostenpflichtigen Plans stimmen Sie zu:",
        items: [
          "Alle mit Ihrem ausgewählten Plan verbundenen Gebühren zu bezahlen",
          "Genaue und vollständige Abrechnungsinformationen anzugeben",
          "Uns zu autorisieren, Ihre Zahlungsmethode für den ausgewählten Plan zu belasten",
          "Zu akzeptieren, dass sich Gebühren mit angemessener Vorankündigung ändern können"
        ]
      },
      cancellation: {
        title: "Kündigung und Rückerstattungen",
        content: "Sie können Ihr Abonnement jederzeit kündigen, indem Sie uns kontaktieren oder über Ihre Kontoeinstellungen. Rückerstattungen sind gemäss unserer Rückerstattungsrichtlinie verfügbar, die durch Verweis in diese Bedingungen aufgenommen wird."
      }
    },
    intellectualProperty: {
      title: "Rechte an geistigem Eigentum",
      yourContent: {
        title: "Ihre Inhalte",
        content: "Sie behalten alle Rechte an Inhalten, die Sie über die Dienste erstellen, hochladen oder anzeigen. Durch die Nutzung unserer Dienste gewähren Sie uns eine nicht-exklusive, weltweite, gebührenfreie Lizenz zur Nutzung, Reproduktion, Modifikation und Anzeige Ihrer Inhalte ausschliesslich zum Zweck der Bereitstellung und Verbesserung der Dienste."
      },
      ourIP: {
        title: "Unser geistiges Eigentum",
        content: "Die Dienste, einschliesslich aller zugehörigen Funktionen, Inhalte und Funktionalitäten, sind Eigentum von Windo und sind durch Urheberrechts-, Marken- und andere Gesetze zum Schutz des geistigen Eigentums geschützt. Sie dürfen ohne unsere ausdrückliche Erlaubnis keinen Teil unserer Dienste kopieren, modifizieren, verbreiten, verkaufen oder vermieten."
      },
      guidelines: {
        title: "Inhaltliche Richtlinien",
        content: "Sie sind allein verantwortlich für die Inhalte, die Sie mit unseren Diensten erstellen. Sie stimmen zu, unsere Dienste nicht zu nutzen, um Inhalte zu erstellen, hochzuladen oder anzuzeigen, die:",
        items: [
          "Die geistigen Eigentumsrechte anderer verletzen",
          "Gegen geltende Gesetze oder Vorschriften verstossen",
          "Schädliches, beleidigendes oder anstössiges Material enthalten",
          "Illegale Aktivitäten oder Diskriminierung fördern",
          "Eine andere Person oder Einrichtung imitieren"
        ]
      }
    },
    limitations: {
      title: "Einschränkungen und Haftungsausschlüsse",
      availability: {
        title: "Dienstverfügbarkeit",
        content: "Obwohl wir bestrebt sind, sicherzustellen, dass unsere Dienste jederzeit verfügbar sind, garantieren wir keinen ununterbrochenen oder fehlerfreien Betrieb. Wir behalten uns das Recht vor, jeden Aspekt unserer Dienste jederzeit mit oder ohne Vorankündigung zu ändern, auszusetzen oder einzustellen."
      },
      disclaimer: {
        title: "Gewährleistungsausschluss",
        content: "SOWEIT NACH GELTENDEM RECHT ZULÄSSIG, WERDEN DIE DIENSTE \"WIE BESEHEN\" UND \"WIE VERFÜGBAR\" OHNE JEGLICHE GEWÄHRLEISTUNG JEGLICHER ART, WEDER AUSDRÜCKLICH NOCH STILLSCHWEIGEND, BEREITGESTELLT, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, STILLSCHWEIGENDE GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK ODER NICHTVERLETZUNG."
      },
      liability: {
        title: "Haftungsbeschränkung",
        content: "SOWEIT NACH GELTENDEM RECHT ZULÄSSIG, HAFTEN WINDO, SEINE DIREKTOREN, MITARBEITER, PARTNER, AGENTEN, LIEFERANTEN ODER PARTNER IN KEINEM FALL FÜR INDIREKTE, ZUFÄLLIGE, BESONDERE, FOLGE- ODER STRAFSCHÄDEN, EINSCHLIESSLICH, OHNE EINSCHRÄNKUNG, VERLUST VON GEWINNEN, DATEN, NUTZUNG, GOODWILL ODER ANDEREN IMMATERIELLEN VERLUSTEN, DIE AUS IHREM ZUGRIFF AUF ODER IHRER NUTZUNG ODER UNMÖGLICHKEIT DES ZUGRIFFS AUF ODER DER NUTZUNG DER DIENSTE RESULTIEREN."
      }
    },
    termination: {
      title: "Laufzeit und Kündigung",
      content: "Diese Bedingungen bleiben in Kraft, bis sie von Ihnen oder Windo gekündigt werden.",
      byYou: {
        title: "Kündigung durch Sie",
        content: "Sie können diese Bedingungen jederzeit kündigen, indem Sie Ihr Konto löschen und die Nutzung unserer Dienste einstellen. Bestimmte Bestimmungen dieser Bedingungen bleiben nach der Kündigung bestehen."
      },
      byUs: {
        title: "Kündigung durch uns",
        content: "Wir können Ihren Zugang zu den Diensten sofort, ohne vorherige Ankündigung oder Haftung, aus irgendeinem Grund kündigen oder aussetzen, einschliesslich wenn Sie gegen diese Bedingungen verstossen. Bei Kündigung erlischt Ihr Recht zur Nutzung der Dienste sofort."
      }
    },
    governing: {
      title: "Geltendes Recht und Streitbeilegung",
      content: "Diese Bedingungen unterliegen dem Recht der Schweiz und werden in Übereinstimmung mit diesem ausgelegt, ohne Berücksichtigung seiner Kollisionsnormen.",
      dispute: {
        title: "Streitbeilegung",
        content: "Jeder Streit, der aus oder im Zusammenhang mit diesen Bedingungen entsteht, wird wie folgt gelöst:",
        steps: [
          "Wir ermutigen Sie, uns zunächst zu kontaktieren, um eine gütliche Einigung zu erzielen.",
          "Wenn der Streit nicht gütlich beigelegt werden kann, wird er der ausschliesslichen Zuständigkeit der Gerichte von Zug, Schweiz, unterworfen.",
          "Ungeachtet des Vorstehenden behalten wir uns das Recht vor, in jeder Gerichtsbarkeit Verfahren einzuleiten, um eine einstweilige Verfügung oder andere dringende Rechtsbehelfe zu erwirken."
        ]
      }
    },
    changes: {
      title: "Änderungen dieser Bedingungen",
      content: "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren, um Änderungen in unseren Praktiken, Diensten oder rechtlichen Anforderungen widerzuspiegeln. Die aktualisierten Bedingungen werden auf dieser Seite mit einem überarbeiteten Gültigkeitsdatum veröffentlicht.",
      notification: "Bei wesentlichen Änderungen werden wir einen deutlicheren Hinweis geben, der auch eine E-Mail-Benachrichtigung an registrierte Benutzer enthalten kann."
    },
    contact: {
      title: "Kontaktieren Sie uns",
      content: "Wenn Sie Fragen, Bedenken oder Feedback zu diesen Bedingungen oder unseren Diensten haben, kontaktieren Sie uns bitte unter:",
      email: "legal@windo.ch"
    }
  }
};

// French translations for Terms of Service
const fr: TermsTranslationSet = {
  title: "Conditions d'Utilisation",
  lastUpdated: "Dernière mise à jour: 20 avril 2025",
  intro: {
    headline: "Conditions d'Utilisation",
    description: "Ces Conditions d'Utilisation établissent le fondement de notre relation avec vous, assurant clarté, équité et compréhension mutuelle dans notre collaboration."
  },
  cards: {
    commitments: {
      title: "Engagements Clairs",
      description: "Nous définissons clairement ce que vous pouvez attendre de nous et ce que nous attendons de vous."
    },
    quality: {
      title: "Standard de Qualité Suisse",
      description: "Nous maintenons les plus hauts standards de service et de support, reflétant la précision suisse."
    },
    rights: {
      title: "Vos Droits Protégés",
      description: "Des conditions équitables qui respectent votre propriété intellectuelle et vos besoins professionnels."
    }
  },
  sections: {
    introduction: {
      title: "Introduction",
      paragraph1: "Bienvenue chez Windo. Ces Conditions d'Utilisation (\"Conditions\") constituent un accord juridiquement contraignant entre vous (\"Utilisateur\", \"vous\" ou \"votre\") et Windo AG (\"Société\", \"nous\", \"notre\" ou \"nos\") régissant votre accès et utilisation du site web, des applications et des services Windo (collectivement, les \"Services\").",
      paragraph2: "En accédant ou en utilisant nos Services, vous reconnaissez avoir lu, compris et accepté d'être lié par ces Conditions. Si vous n'acceptez pas ces Conditions, veuillez ne pas accéder ou utiliser nos Services."
    },
    eligibility: {
      title: "Éligibilité et Enregistrement de Compte",
      requirements: {
        title: "Conditions d'Éligibilité",
        items: [
          "Avoir au moins 18 ans ou l'âge de la majorité légale dans votre juridiction",
          "Avoir la capacité juridique de conclure ces Conditions",
          "Ne pas être interdit d'utiliser les Services en vertu des lois applicables"
        ]
      },
      account: {
        title: "Création et Sécurité du Compte",
        items: [
          "Fournir des informations exactes, actuelles et complètes",
          "Maintenir et mettre à jour rapidement vos informations de compte",
          "Garder votre mot de passe sécurisé et confidentiel",
          "Nous informer immédiatement de toute utilisation non autorisée de votre compte",
          "Être seul responsable de toutes les activités qui se produisent sous votre compte"
        ]
      }
    },
    services: {
      title: "Services et Abonnement",
      description: {
        title: "Description des Services",
        content: "Windo fournit une plateforme pour créer, concevoir et gérer des sites web pour les entreprises et les particuliers. Nos Services comprennent des outils de création de sites web, d'hébergement, d'assistance à l'enregistrement de domaines et des services numériques connexes."
      },
      subscription: {
        title: "Plans d'Abonnement et Frais",
        content: "Nous proposons divers plans d'abonnement avec différentes fonctionnalités et tarifications. En sélectionnant un plan payant, vous acceptez de :",
        items: [
          "Payer tous les frais associés à votre plan sélectionné",
          "Fournir des informations de facturation exactes et complètes",
          "Nous autoriser à débiter votre mode de paiement pour le plan sélectionné",
          "Accepter que les frais puissent changer avec un préavis raisonnable"
        ]
      },
      cancellation: {
        title: "Annulation et Remboursements",
        content: "Vous pouvez annuler votre abonnement à tout moment en nous contactant ou via les paramètres de votre compte. Les remboursements sont disponibles conformément à notre Politique de Remboursement, qui est incorporée par référence dans ces Conditions."
      }
    },
    intellectualProperty: {
      title: "Droits de Propriété Intellectuelle",
      yourContent: {
        title: "Votre Contenu",
        content: "Vous conservez tous les droits sur le contenu que vous créez, téléchargez ou affichez sur ou via les Services. En utilisant nos Services, vous nous accordez une licence non exclusive, mondiale et libre de redevances pour utiliser, reproduire, modifier et afficher votre contenu uniquement dans le but de fournir et d'améliorer les Services."
      },
      ourIP: {
        title: "Notre Propriété Intellectuelle",
        content: "Les Services, y compris toutes les fonctionnalités, le contenu et les fonctionnalités associés, sont la propriété de Windo et sont protégés par le droit d'auteur, les marques de commerce et d'autres lois sur la propriété intellectuelle. Vous ne pouvez pas copier, modifier, distribuer, vendre ou louer une partie de nos Services sans notre permission explicite."
      },
      guidelines: {
        title: "Directives de Contenu",
        content: "Vous êtes seul responsable du contenu que vous créez en utilisant nos Services. Vous acceptez de ne pas utiliser nos Services pour créer, télécharger ou afficher du contenu qui :",
        items: [
          "Porte atteinte aux droits de propriété intellectuelle d'autrui",
          "Viole les lois ou règlements applicables",
          "Contient du matériel nuisible, abusif ou offensant",
          "Promeut des activités illégales ou de la discrimination",
          "Usurpe l'identité d'une autre personne ou entité"
        ]
      }
    },
    limitations: {
      title: "Limitations et Clauses de Non-Responsabilité",
      availability: {
        title: "Disponibilité des Services",
        content: "Bien que nous nous efforcions de garantir que nos Services soient disponibles à tout moment, nous ne garantissons pas un fonctionnement ininterrompu ou sans erreur. Nous nous réservons le droit de modifier, suspendre ou interrompre tout aspect de nos Services à tout moment avec ou sans préavis."
      },
      disclaimer: {
        title: "Clause de Non-Garantie",
        content: "DANS LA MESURE MAXIMALE PERMISE PAR LA LOI APPLICABLE, LES SERVICES SONT FOURNIS 'TELS QUELS' ET 'SELON DISPONIBILITÉ' SANS GARANTIES D'AUCUNE SORTE, EXPRESSES OU IMPLICITES, Y COMPRIS, MAIS SANS S'Y LIMITER, LES GARANTIES IMPLICITES DE QUALITÉ MARCHANDE, D'ADÉQUATION À UN USAGE PARTICULIER OU DE NON-VIOLATION."
      },
      liability: {
        title: "Limitation de Responsabilité",
        content: "DANS LA MESURE MAXIMALE PERMISE PAR LA LOI APPLICABLE, EN AUCUN CAS WINDO, SES ADMINISTRATEURS, EMPLOYÉS, PARTENAIRES, AGENTS, FOURNISSEURS OU AFFILIÉS NE SERONT RESPONSABLES DE DOMMAGES INDIRECTS, ACCESSOIRES, SPÉCIAUX, CONSÉCUTIFS OU PUNITIFS, Y COMPRIS, SANS LIMITAZIONE, LA PERTE DE PROFITS, DE DONNÉES, D'UTILISATION, DE CLIENTÈLE OU D'AUTRES PERTES INTANGIBLES, RÉSULTANT DE VOTRE ACCÈS OU UTILISATION OU IMPOSSIBILITÉ D'ACCÉDER OU D'UTILISER LES SERVICES."
      }
    },
    termination: {
      title: "Durée et Résiliation",
      content: "Ces Conditions resteront en vigueur jusqu'à leur résiliation par vous ou par Windo.",
      byYou: {
        title: "Résiliation par Vous",
        content: "Vous pouvez résilier ces Conditions à tout moment en annulant votre compte et en cessant d'utiliser nos Services. Certaines dispositions de ces Conditions survivront à la résiliation."
      },
      byUs: {
        title: "Résiliation par Nous",
        content: "Nous pouvons résilier ou suspendre votre accès aux Services immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris si vous violez ces Conditions. En cas de résiliation, votre droit d'utiliser les Services cessera immédiatement."
      }
    },
    governing: {
      title: "Loi Applicable et Résolution des Litiges",
      content: "Ces Conditions sont régies et interprétées conformément aux lois de la Suisse, sans égard à ses principes de conflit de lois.",
      dispute: {
        title: "Résolution des Litiges",
        content: "Tout litige découlant de ou en relation avec ces Conditions sera résolu comme suit :",
        steps: [
          "Nous vous encourageons à nous contacter d'abord pour rechercher une résolution à l'amiable.",
          "Si le litige ne peut être résolu à l'amiable, il sera soumis à la juridiction exclusive des tribunaux de Zurich, Suisse.",
          "Nonobstant ce qui précède, nous nous réservons le droit d'engager des procédures dans toute juridiction pour obtenir une injonction ou d'autres recours juridiques urgents."
        ]
      }
    },
    changes: {
      title: "Modifications de ces Conditions",
      content: "Nous pouvons mettre à jour ces Conditions de temps à autre pour refléter des changements dans nos pratiques, Services ou exigences légales. Les Conditions mises à jour seront publiées sur cette page avec une date d'efficacia rivisée.",
      notification: "Pour les changements significatifs, nous fournirons un avis plus visible, qui peut inclure une notification par e-mail aux utilisateurs enregistrés."
    },
    contact: {
      title: "Contactez-nous",
      content: "Si vous avez des questions, préoccupations ou commentaires riguardo a ces Conditions ou nos Services, veuillez nous contacter à :",
      email: "legal@windo.ch"
    }
  }
};

// Italian translations for Terms of Service
const it: TermsTranslationSet = {
  title: "Termini di Servizio",
  lastUpdated: "Ultimo aggiornamento: 20 aprile 2025",
  intro: {
    headline: "Termini di Servizio",
    description: "Questi Termini di Servizio stabiliscono la base del nostro rapporto con te, garantendo chiarezza, equità e comprensione reciproca mentre lavoriamo insieme."
  },
  cards: {
    commitments: {
      title: "Impegni Chiari",
      description: "Definiamo chiaramente cosa puoi aspettarti da noi e cosa ci aspettiamo da te."
    },
    quality: {
      title: "Standard di Qualità Svizzera",
      description: "Manteniamo i più alti standard di servizio e supporto, riflettendo la precisione svizzera."
    },
    rights: {
      title: "I Tuoi Diritti Protetti",
      description: "Termini equi che rispettano la tua proprietà intellettuale e le tue esigenze aziendali."
    }
  },
  sections: {
    introduction: {
      title: "Introduzione",
      paragraph1: "Benvenuto su Windo. Questi Termini di Servizio (\"Termini\") costituiscono un accordo legalmente vincolante tra te (\"Utente\", \"tu\" o \"tuo\") e Windo AG (\"Società\", \"noi\", \"nostro\" o \"ci\") che regola il tuo accesso e utilizzo del sito web, delle applicazioni e dei servizi di Windo (collettivamente, i \"Servizi\").",
      paragraph2: "Accedendo o utilizzando i nostri Servizi, riconosci di aver letto, compreso e accettato di essere vincolato da questi Termini. Se non sei d'accordo con questi Termini, ti preghiamo di non accedere o utilizzare i nostri Servizi."
    },
    eligibility: {
      title: "Idoneità e Registrazione dell'Account",
      requirements: {
        title: "Requisiti di Idoneità",
        items: [
          "Avere almeno 18 anni o l'età della maggiore età nella tua giurisdizione",
          "Avere la capacità legale di stipulare questi Termini",
          "Non essere proibito dall'utilizzo dei Servizi ai sensi delle leggi applicabili"
        ]
      },
      account: {
        title: "Creazione e Sicurezza dell'Account",
        items: [
          "Fornire informazioni accurate, attuali e complete",
          "Mantenere e aggiornare tempestivamente le informazioni del tuo account",
          "Mantenere la tua password sicura e confidenziale",
          "Notificarci immediatamente di qualsiasi uso non autorizzato del tuo account",
          "Essere l'unico responsabile per tutte le attività che si verificano sotto il tuo account"
        ]
      }
    },
    services: {
      title: "Servizi e Abbonamento",
      description: {
        title: "Descrizione del Servizio",
        content: "Windo fornisce una piattaforma per creare, progettare e gestire siti web per aziende e individui. I nostri Servizi includono strumenti di creazione di siti web, hosting, assistenza per la registrazione di domini e servizi digitali correlati."
      },
      subscription: {
        title: "Piani di Abbonamento e Tariffe",
        content: "Offriamo vari piani di abbonamento con diverse funzionalità e prezzi. Selezionando un piano a pagamento, accetti di:",
        items: [
          "Pagare tutte le tariffe associate al piano selezionato",
          "Fornire informazioni di fatturazione accurate e complete",
          "Autorizzarci ad addebitare il tuo metodo di pagamento per il piano selezionato",
          "Accettare che le tariffe possano cambiare con un ragionevole preavviso"
        ]
      },
      cancellation: {
        title: "Cancellazione e Rimborsi",
        content: "Puoi cancellare il tuo abbonamento in qualsiasi momento contattandoci o tramite le impostazioni del tuo account. I rimborsi sono disponibili secondo la nostra Politica di Rimborso, che è incorporata per riferimento in questi Termini."
      }
    },
    intellectualProperty: {
      title: "Diritti di Proprietà Intellettuale",
      yourContent: {
        title: "I Tuoi Contenuti",
        content: "Mantieni tutti i diritti sui contenuti che crei, carichi o visualizzi su o tramite i Servizi. Utilizzando i nostri Servizi, ci concedi una licenza non esclusiva, mondiale, esente da royalty per utilizzare, riprodurre, modificare e visualizzare i tuoi contenuti esclusivamente allo scopo di fornire e migliorare i Servizi."
      },
      ourIP: {
        title: "La Nostra Proprietà Intellettuale",
        content: "I Servizi, incluse tutte le relative funzionalità, contenuti e funzionalità, sono di proprietà di Windo e sono protetti da copyright, marchi e altre leggi sulla proprietà intellettuale. Non puoi copiare, modificare, distribuire, vendere o noleggiare alcuna parte dei nostri Servizi senza il nostro esplicito permesso."
      },
      guidelines: {
        title: "Linee Guida sui Contenuti",
        content: "Sei l'unico responsabile dei contenuti che crei utilizzando i nostri Servizi. Accetti di non utilizzare i nostri Servizi per creare, caricare o visualizzare contenuti che:",
        items: [
          "Violano i diritti di proprietà intellettuale di altri",
          "Violano leggi o regolamenti applicabili",
          "Contengono materiale dannoso, abusivo o offensivo",
          "Promuovono attività illegali o discriminazione",
          "Impersonano un'altra persona o entità"
        ]
      }
    },
    limitations: {
      title: "Limitazioni e Disclaimer",
      availability: {
        title: "Disponibilità del Servizio",
        content: "Mentre ci sforziamo di garantire che i nostri Servizi siano disponibili in ogni momento, non garantiamo un funzionamento ininterrotto o privo di errori. Nous nous réservons le droit de modifier, sospendere o interrompere qualsiasi aspetto dei nostri Servizi in qualsiasi momento con o senza preavviso."
      },
      disclaimer: {
        title: "Disclaimer di Garanzie",
        content: "NELLA MISURA MASSIMA CONSENTITA DALLA LEGGE APPLICABILE, I SERVIZI SONO FORNITI \"COSÌ COME SONO\" E \"COME DISPONIBILI\" SENZA GARANZIE DI ALCUN TIPO, ESPLICITE O IMPLICITE, INCLUSE, MA NON LIMITATE A, GARANZIE IMPLICITE DI COMMERCIABILITÀ, IDONEITÀ PER UNO SCOPO PARTICOLARE O NON VIOLAZIONE."
      },
      liability: {
        title: "Limitazione di Responsabilità",
        content: "NELLA MISURA MASSIMA CONSENTITA DALLA LEGGE APPLICABILE, IN NESSUN CASO WINDO, I SUOI DIRETTORI, DIPENDENTI, PARTNER, AGENTI, FORNITORI O AFFILIATI SARANNO RESPONSABILI PER DANNI INDIRETTI, INCIDENTALI, SPECIALI, CONSEQUENZIALI O PUNITIVI, INCLUSI SENZA LIMITAZIONE, PERDITA DI PROFITTI, DATI, USO, AVVIAMENTO O ALTRE PERDITE INTANGIBILI, DERIVANTI DAL TUO ACCESSO O UTILIZZO O IMPOSSIBILITÀ DI ACCEDERE O UTILIZZARE I SERVIZI."
      }
    },
    termination: {
      title: "Durata e Risoluzione",
      content: "Questi Termini rimarranno in vigore fino alla risoluzione da parte tua o di Windo.",
      byYou: {
        title: "Risoluzione da Parte Tua",
        content: "Puoi risolvere questi Termini in qualsiasi momento cancellando il tuo account e interrompendo l'uso dei nostri Servizi. Alcune disposizioni di questi Termini sopravviveranno alla risoluzione."
      },
      byUs: {
        title: "Risoluzione da Parte Nostra",
        content: "Possiamo risolvere o sospendere il tuo accesso ai Servizi immediatamente, senza preavviso o responsabilità, per qualsiasi motivo, incluso se violi questi Termini. In caso di risoluzione, il tuo diritto di utilizzare i Servizi cesserà immediatamente."
      }
    },
    governing: {
      title: "Legge Applicabile e Risoluzione delle Controversie",
      content: "Questi Termini saranno regolati e interpretati in conformità con le leggi della Svizzera, senza riguardo ai suoi principi di conflitto di leggi.",
      dispute: {
        title: "Risoluzione delle Controversie",
        content: "Qualsiasi controversia derivante da o in connessione con questi Termini sarà risolta come segue:",
        steps: [
          "Ti incoraggiamo a contattarci prima per cercare una risoluzione amichevole.",
          "Se la controversia non può essere risolta amichevolmente, sarà sottoposta alla giurisdizione esclusiva dei tribunali di Zurigo, Svizzera.",
          "Nonostante quanto sopra, ci riserviamo il diritto di avviare procedimenti in qualsiasi giurisdizione per ottenere provvedimenti ingiuntivi o altri rimedi legali urgenti."
        ]
      }
    },
    changes: {
      title: "Modifiche a Questi Termini",
      content: "Potremmo aggiornare questi Termini di tanto in tanto per riflettere cambiamenti nelle nostre pratiche, Servizi o requisiti legali. I Termini aggiornati saranno pubblicati su questa pagina con una data di efficacia rivista.",
      notification: "Per modifiche significative, forniremo un avviso più evidente, che può includere una notifica via email agli utenti registrati."
    },
    contact: {
      title: "Contattaci",
      content: "Se hai domande, dubbi o feedback riguardo a questi Termini o ai nostri Servizi, contattaci a:",
      email: "legal@windo.ch"
    }
  }
};

// Export all language translations
export const termsTranslations: TermsLanguageTranslations = {
  en,
  de,
  fr,
  it
}; 