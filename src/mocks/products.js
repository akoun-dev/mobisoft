// Données mockées pour les produits et services
export const products = [
  // Produits électroniques
  {
    id: 1,
    name: 'Smartphone X1',
    type: 'product',
    image: '/placeholder-phone.jpg',
    sector: 'électronique',
    category: 'téléphonie',
    price: 250000,
    currency: 'XOF',
    oldPrice: 299000,
    rating: 4.5,
    reviewCount: 124,
    brand: 'TechCorp',
    condition: 'Neuf',
    deliveryTime: 3,
    location: {
      lat: 5.3600,
      lng: -4.0083,
      city: 'Abidjan',
      country: 'Côte d\'Ivoire',
      region: "Côte d'Ivoire"
    },
    specifications: {
      écran: '6.5" AMOLED',
      mémoire: '128GB',
      ram: '8GB',
      processeur: 'Octa-core 2.8GHz',
      batterie: '5000mAh'
    }
  },
  {
    id: 2,
    name: 'Ordinateur portable Pro',
    type: 'product',
    image: '/placeholder-laptop.jpg',
    sector: 'informatique',
    category: 'ordinateurs',
    price: 750000,
    currency: 'XOF',
    rating: 4.2,
    reviewCount: 89,
    brand: 'CompTech',
    condition: 'Neuf',
    deliveryTime: 5,
    location: {
      lat: 14.6937,
      lng: -17.4441,
      city: 'Dakar',
      country: 'Sénégal',
      region: "Sénégal"
    },
    specifications: {
      écran: '15.6" FHD',
      stockage: '512GB SSD',
      ram: '16GB',
      processeur: 'Intel i7',
      système: 'Windows 11'
    }
  },
  // Services
  {
    id: 19,
    name: "Assurance Auto Premium",
    type: "service",
    sector: "assurance",
    category: "automobile",
    price: 75000,
    currency: "XOF",
    rating: 4.6,
    reviewCount: 89,
    image: "/assets/images/services/auto-insurance.jpg",
    condition: "Professionnel",
    stock: null,
    deliveryTime: 1,
    location: {
      lat: 14.6937,
      lng: -17.4441,
      region: "Sénégal",
      country: "Sénégal",
      city: "Dakar"
    }
  },
   {
      id: 20,
      name: "Assurance Habitation",
      type: "service",
      sector: "assurance",
      category: "logement",
      price: 50000,
      currency: "XOF",
      rating: 4.4,
      reviewCount: 76,
      image: "/assets/images/services/home-insurance.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 5.3600,
        lng: -4.0083,
        region: "Côte d'Ivoire",
        country: "Côte d'Ivoire",
        city: "Abidjan"
      }
    },
    // Banque
    {
      id: 21,
      name: "Compte Courant Gold",
      type: "service",
      sector: "banque",
      category: "compte",
      price: 10000,
      currency: "XOF",
      rating: 4.7,
      reviewCount: 120,
      image: "/assets/images/services/bank-account.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 6.5244,
        lng: 3.3792,
        region: "Nigeria",
        country: "Nigeria",
        city: "Lagos"
      }
    },
    {
      id: 22,
      name: "Crédit Immobilier",
      type: "service",
      sector: "banque",
      category: "credit",
      price: 15000,
      currency: "XOF",
      rating: 4.5,
      reviewCount: 95,
      image: "/assets/images/services/mortgage.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 2,
      location: {
        lat: 5.6037,
        lng: -0.1870,
        region: "Ghana",
        country: "Ghana",
        city: "Accra"
      }
    },
    // Télécoms
    {
      id: 23,
      name: "Forfait Mobile 10Go",
      type: "service",
      sector: "télécoms",
      category: "mobile",
      price: 10000,
      currency: "XOF",
      rating: 4.8,
      reviewCount: 210,
      image: "/assets/images/services/mobile-plan.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 12.6392,
        lng: -8.0029,
        region: "Mali",
        country: "Mali",
        city: "Bamako"
      }
    },
    {
      id: 24,
      name: "Internet Fibre 100Mb",
      type: "service",
      sector: "télécoms",
      category: "internet",
      price: 35000,
      currency: "XOF",
      rating: 4.6,
      reviewCount: 156,
      image: "/assets/images/services/fiber.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 3,
      location: {
        lat: 14.6937,
        lng: -17.4441,
        region: "Sénégal",
        country: "Sénégal",
        city: "Dakar"
      }
    },
    // Énergie
    {
      id: 25,
      name: "Kit Solaire 300W",
      type: "product",
      sector: "énergie",
      category: "solaire",
      price: 250000,
      oldPrice: 300000,
      currency: "XOF",
      rating: 4.9,
      reviewCount: 68,
      image: "/assets/images/products/solar-kit.jpg",
      condition: "Neuf",
      discount: 17,
      stock: 8,
      deliveryTime: 5,
      brand: "SolarTech",
      location: {
        lat: 5.3600,
        lng: -4.0083,
        region: "Côte d'Ivoire",
        country: "Côte d'Ivoire",
        city: "Abidjan"
      }
    },
    {
      id: 26,
      name: "Groupe Électrogène 5KVA",
      type: "product",
      sector: "énergie",
      category: "générateur",
      price: 1200000,
      oldPrice: 1500000,
      currency: "XOF",
      rating: 4.7,
      reviewCount: 42,
      image: "/assets/images/products/generator.jpg",
      condition: "Neuf",
      discount: 20,
      stock: 3,
      deliveryTime: 7,
      brand: "PowerGen",
      location: {
        lat: 6.5244,
        lng: 3.3792,
        region: "Nigeria",
        country: "Nigeria",
        city: "Lagos"
      }
    },
    // Immobilier
    {
      id: 27,
      name: "Appartement 3 pièces",
      type: "service",
      sector: "immobilier",
      category: "location",
      price: 250000,
      currency: "XOF",
      rating: 4.5,
      reviewCount: 34,
      image: "/assets/images/services/apartment.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 5.6037,
        lng: -0.1870,
        region: "Ghana",
        country: "Ghana",
        city: "Accra"
      }
    },
    {
      id: 28,
      name: "Terrain 500m²",
      type: "service",
      sector: "immobilier",
      category: "vente",
      price: 15000000,
      currency: "XOF",
      rating: 4.3,
      reviewCount: 12,
      image: "/assets/images/services/land.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 12.6392,
        lng: -8.0029,
        region: "Mali",
        country: "Mali",
        city: "Bamako"
      }
    },
    // Transport
    {
      id: 29,
      name: "Location Voiture Jour",
      type: "service",
      sector: "transport",
      category: "location",
      price: 30000,
      currency: "XOF",
      rating: 4.6,
      reviewCount: 78,
      image: "/assets/images/services/car-rental.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 14.6937,
        lng: -17.4441,
        region: "Sénégal",
        country: "Sénégal",
        city: "Dakar"
      }
    },
    {
      id: 30,
      name: "Livraison Express",
      type: "service",
      sector: "transport",
      category: "livraison",
      price: 5000,
      currency: "XOF",
      rating: 4.4,
      reviewCount: 145,
      image: "/assets/images/services/delivery.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 5.3600,
        lng: -4.0083,
        region: "Côte d'Ivoire",
        country: "Côte d'Ivoire",
        city: "Abidjan"
      }
    },
    // Données existantes avec localisation
    {
      id: 1,
      name: "Samsung S21 Ultra",
      type: "product",
      sector: "technologie",
      category: "téléphonie",
      price: 250000,
      oldPrice: 300000,
      currency: "XOF",
      rating: 4.5,
      reviewCount: 24,
      image: "/assets/images/products/phone1.jpg",
      condition: "Neuf",
      discount: 17,
      stock: 15,
      deliveryTime: 2,
      brand: "Samsung",
      location: {
        lat: 14.6937,
        lng: -17.4441,
        region: "Sénégal",
        country: "Sénégal",
        city: "Dakar"
      }
    },
    {
      id: 2,
      name: "Samsung S22 Ultra",
      type: "product",
      sector: "technologie",
      category: "téléphonie",
      price: 300000,
      oldPrice: 350000,
      currency: "XOF",
      rating: 4.8,
      reviewCount: 42,
      image: "/assets/images/products/phone2.jpg",
      condition: "Reconditionné",
      discount: 14,
      stock: 8,
      deliveryTime: 3,
      brand: "Samsung",
      location: {
        lat: 5.3600,
        lng: -4.0083,
        region: "Côte d'Ivoire",
        country: "Côte d'Ivoire",
        city: "Abidjan"
      }
    },
    {
      id: 3,
      name: "Iphone 14 Pro",
      type: "product",
      sector: "technologie",
      category: "téléphonie",
      price: 350000,
      oldPrice: 400000,
      currency: "XOF",
      rating: 4.7,
      reviewCount: 35,
      image: "/assets/images/products/phone3.jpg",
      condition: "Neuf",
      discount: 13,
      stock: 12,
      deliveryTime: 2,
      brand: "Apple",
      location: {
        lat: 6.5244,
        lng: 3.3792,
        region: "Nigeria",
        country: "Nigeria",
        city: "Lagos"
      }
    },
    {
      id: 4,
      name: "Smart TV 4K",
      type: "product",
      sector: "technologie",
      category: "électronique",
      price: 400000,
      oldPrice: 450000,
      currency: "XOF",
      rating: 4.6,
      reviewCount: 28,
      image: "/assets/images/products/tv1.jpg",
      condition: "Neuf",
      discount: 11,
      stock: 5,
      deliveryTime: 5,
      brand: "LG",
      location: {
        lat: 5.6037,
        lng: -0.1870,
        region: "Ghana",
        country: "Ghana",
        city: "Accra"
      }
    },
    {
      id: 5,
      name: "Ordinateur Portable Z5",
      type: "product",
      sector: "technologie",
      category: "informatique",
      price: 550000,
      oldPrice: 600000,
      currency: "XOF",
      rating: 4.9,
      reviewCount: 56,
      image: "/assets/images/products/laptop1.jpg",
      condition: "Neuf",
      discount: 8,
      stock: 3,
      deliveryTime: 7,
      brand: "HP",
      location: {
        lat: 12.6392,
        lng: -8.0029,
        region: "Mali",
        country: "Mali",
        city: "Bamako"
      }
    },
    {
      id: 10,
      name: "Consultation médicale",
      type: "service", 
      sector: "santé",
      category: "soins",
      price: 15000,
      currency: "XOF",
      rating: 4.8,
      reviewCount: 112,
      image: "/assets/images/services/medical.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 14.6937,
        lng: -17.4441,
        region: "Sénégal",
        country: "Sénégal",
        city: "Dakar"
      }
    },
    {
      id: 11,
      name: "Cours particuliers",
      type: "service",
      sector: "éducation",
      category: "formation",
      price: 10000,
      currency: "XOF",
      rating: 4.7,
      reviewCount: 87,
      image: "/assets/images/services/education.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 5.3600,
        lng: -4.0083,
        region: "Côte d'Ivoire",
        country: "Côte d'Ivoire",
        city: "Abidjan"
      }
    },
    {
      id: 12,
      name: "Conseil agricole",
      type: "service",
      sector: "agriculture",
      category: "expertise",
      price: 25000,
      currency: "XOF",
      rating: 4.5,
      reviewCount: 64,
      image: "/assets/images/services/farming.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 2,
      location: {
        lat: 12.6392,
        lng: -8.0029,
        region: "Mali",
        country: "Mali",
        city: "Bamako"
      }
    },
    {
      id: 13,
      name: "Formation en ligne",
      type: "service",
      sector: "technologie",
      category: "formation",
      price: 5000,
      currency: "XOF",
      rating: 4.6,
      reviewCount: 42,
      image: "/assets/images/services/online-training.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 5.6037,
        lng: -0.1870,
        region: "Ghana",
        country: "Ghana",
        city: "Accra"
      }
    },
    {
      id: 14,
      name: "Santé mentale",
      type: "service",
      sector: "santé",
      category: "soins",
      price: 8000,
      currency: "XOF",
      rating: 4.9,
      reviewCount: 95,
      image: "/assets/images/services/mental-health.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      brand: "Apple",
      location: {
        lat: 6.5244,
        lng: 3.3792,
        region: "Nigeria",
        country: "Nigeria",
        city: "Lagos"
      }
    },
    {
      id: 15,
      name: "Santé physique",
      type: "service",
      sector: "santé",
      category: "soins",
      price: 12000,
      currency: "XOF",
      rating: 4.7,
      reviewCount: 78,
      image: "/assets/images/services/physical-health.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 5.6037,
        lng: -0.1870,
        region: "Ghana",
        country: "Ghana",
        city: "Accra"
      }
    },
    {
      id: 16,
      name: "Consultation juridique",
      type: "service",
      sector: "droit",
      category: "conseil",
      price: 20000,
      currency: "XOF",
      rating: 4.8,
      reviewCount: 50,
      image: "/assets/images/services/legal-consultation.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 12.6392,
        lng: -8.0029,
        region: "Mali",
        country: "Mali",
        city: "Bamako"
      }
    },
    {
      id: 17,
      name: "Formation en ligne",
      type: "service",
      sector: "technologie",
      category: "formation",
      price: 5000,
      currency: "XOF",
      rating: 4.6,
      reviewCount: 42,
      image: "/assets/images/services/online-training.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 14.6937,
        lng: -17.4441,
        region: "Sénégal",
        country: "Sénégal",
        city: "Dakar"
      }
    },
    {
      id: 18,
      name: "Soutien scolaire",
      type: "service",
      sector: "éducation",
      category: "tutorat",
      price: 12000,
      currency: "XOF",
      rating: 4.7,
      reviewCount: 65,
      image: "/assets/images/services/tutoring.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 5.3600,
        lng: -4.0083,
        region: "Côte d'Ivoire",
        country: "Côte d'Ivoire",
        city: "Abidjan"
      }
    },
    // Nouveaux pays - Maroc
    {
      id: 31,
      name: "Assurance Voyage International",
      type: "service",
      sector: "assurance",
      category: "voyage",
      price: 25000,
      currency: "XOF",
      rating: 4.5,
      reviewCount: 67,
      image: "/assets/images/services/travel-insurance.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 33.9716,
        lng: -6.8498,
        region: "Maroc",
        country: "Maroc",
        city: "Rabat"
      }
    },
    {
      id: 32,
      name: "MacBook Pro M3",
      type: "product",
      sector: "technologie",
      category: "informatique",
      price: 1800000,
      oldPrice: 2000000,
      currency: "XOF",
      rating: 4.9,
      reviewCount: 234,
      image: "/assets/images/products/macbook.jpg",
      condition: "Neuf",
      discount: 10,
      stock: 5,
      deliveryTime: 5,
      brand: "Apple",
      location: {
        lat: 33.5731,
        lng: -7.5898,
        region: "Maroc",
        country: "Maroc",
        city: "Casablanca"
      }
    },
    // Afrique du Sud
    {
      id: 33,
      name: "Forfait 5G Premium",
      type: "service",
      sector: "télécoms",
      category: "mobile",
      price: 45000,
      currency: "XOF",
      rating: 4.8,
      reviewCount: 156,
      image: "/assets/images/services/5g-plan.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: -25.7479,
        lng: 28.2293,
        region: "Afrique du Sud",
        country: "Afrique du Sud",
        city: "Pretoria"
      }
    },
    {
      id: 34,
      name: "Panneau Solaire 500W",
      type: "product",
      sector: "énergie",
      category: "solaire",
      price: 350000,
      oldPrice: 400000,
      currency: "XOF",
      rating: 4.9,
      reviewCount: 78,
      image: "/assets/images/products/solar-panel.jpg",
      condition: "Neuf",
      discount: 13,
      stock: 12,
      deliveryTime: 7,
      brand: "SolarMax",
      location: {
        lat: -33.9249,
        lng: 18.4241,
        region: "Afrique du Sud",
        country: "Afrique du Sud",
        city: "Le Cap"
      }
    },
    // Kenya
    {
      id: 35,
      name: "Villa 4 chambres",
      type: "service",
      sector: "immobilier",
      category: "location",
      price: 450000,
      currency: "XOF",
      rating: 4.4,
      reviewCount: 23,
      image: "/assets/images/services/villa.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: -1.2921,
        lng: 36.8219,
        region: "Kenya",
        country: "Kenya",
        city: "Nairobi"
      }
    },
    {
      id: 36,
      name: "Transport Intercity",
      type: "service",
      sector: "transport",
      category: "voyage",
      price: 15000,
      currency: "XOF",
      rating: 4.3,
      reviewCount: 134,
      image: "/assets/images/services/intercity-bus.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: -4.0435,
        lng: 39.6682,
        region: "Kenya",
        country: "Kenya",
        city: "Mombasa"
      }
    },
    // Égypte
    {
      id: 37,
      name: "Consultation Spécialisée",
      type: "service",
      sector: "santé",
      category: "soins",
      price: 35000,
      currency: "XOF",
      rating: 4.9,
      reviewCount: 167,
      image: "/assets/images/services/specialist.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 30.0444,
        lng: 31.2357,
        region: "Égypte",
        country: "Égypte",
        city: "Le Caire"
      }
    },
    {
      id: 38,
      name: "Formation Universitaire",
      type: "service",
      sector: "éducation",
      category: "université",
      price: 150000,
      currency: "XOF",
      rating: 4.7,
      reviewCount: 89,
      image: "/assets/images/services/university.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 31.2001,
        lng: 29.9187,
        region: "Égypte",
        country: "Égypte",
        city: "Alexandrie"
      }
    },
    // Cameroun
    {
      id: 39,
      name: "Expertise Agricole Avancée",
      type: "service",
      sector: "agriculture",
      category: "consultation",
      price: 40000,
      currency: "XOF",
      rating: 4.6,
      reviewCount: 45,
      image: "/assets/images/services/agri-expert.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 2,
      location: {
        lat: 3.8480,
        lng: 11.5021,
        region: "Cameroun",
        country: "Cameroun",
        city: "Yaoundé"
      }
    },
    {
      id: 40,
      name: "Conseil Juridique International",
      type: "service",
      sector: "droit",
      category: "international",
      price: 50000,
      currency: "XOF",
      rating: 4.8,
      reviewCount: 67,
      image: "/assets/images/services/intl-law.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 4.0511,
        lng: 9.7679,
        region: "Cameroun",
        country: "Cameroun",
        city: "Douala"
      }
    },
    // Secteur : Assurance
    {
      id: 41,
      name: "Assurance Santé Familiale",
      type: "service",
      sector: "assurance",
      category: "santé",
      price: 60000,
      currency: "XOF",
      rating: 4.7,
      reviewCount: 102,
      image: "/assets/images/services/health-insurance.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 6.5244,
        lng: 3.3792,
        region: "Nigeria",
        country: "Nigeria",
        city: "Lagos"
      }
    },
    // Secteur : Banque
    {
      id: 42,
      name: "Carte Visa Internationale",
      type: "service",
      sector: "banque",
      category: "carte",
      price: 20000,
      currency: "XOF",
      rating: 4.6,
      reviewCount: 88,
      image: "/assets/images/services/visa-card.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 2,
      location: {
        lat: 14.6937,
        lng: -17.4441,
        region: "Sénégal",
        country: "Sénégal",
        city: "Dakar"
      }
    },
    // Secteur : Télécoms
    {
      id: 43,
      name: "Box Internet 4G+",
      type: "product",
      sector: "télécoms",
      category: "internet",
      price: 45000,
      currency: "XOF",
      rating: 4.5,
      reviewCount: 73,
      image: "/assets/images/products/4g-box.jpg",
      condition: "Neuf",
      stock: 10,
      deliveryTime: 3,
      brand: "TelecomPlus",
      location: {
        lat: 5.3600,
        lng: -4.0083,
        region: "Côte d'Ivoire",
        country: "Côte d'Ivoire",
        city: "Abidjan"
      }
    },
    // Secteur : Énergie
    {
      id: 44,
      name: "Batterie Solaire 200Ah",
      type: "product",
      sector: "énergie",
      category: "solaire",
      price: 120000,
      currency: "XOF",
      rating: 4.8,
      reviewCount: 54,
      image: "/assets/images/products/solar-battery.jpg",
      condition: "Neuf",
      stock: 7,
      deliveryTime: 4,
      brand: "SunPower",
      location: {
        lat: 6.5244,
        lng: 3.3792,
        region: "Nigeria",
        country: "Nigeria",
        city: "Lagos"
      }
    },
    // Secteur : Immobilier
    {
      id: 45,
      name: "Studio Meublé Centre Ville",
      type: "service",
      sector: "immobilier",
      category: "location",
      price: 120000,
      currency: "XOF",
      rating: 4.2,
      reviewCount: 31,
      image: "/assets/images/services/studio.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 33.5731,
        lng: -7.5898,
        region: "Maroc",
        country: "Maroc",
        city: "Casablanca"
      }
    },
    // Secteur : Transport
    {
      id: 46,
      name: "Abonnement Bus Urbain",
      type: "service",
      sector: "transport",
      category: "abonnement",
      price: 10000,
      currency: "XOF",
      rating: 4.1,
      reviewCount: 60,
      image: "/assets/images/services/bus.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: -1.2921,
        lng: 36.8219,
        region: "Kenya",
        country: "Kenya",
        city: "Nairobi"
      }
    },
    // Secteur : Assurance
    {
      id: 47,
      name: "Assurance Voyage Afrique",
      type: "service",
      sector: "assurance",
      category: "voyage",
      price: 35000,
      currency: "XOF",
      rating: 4.5,
      reviewCount: 58,
      image: "/assets/images/services/africa-travel-insurance.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 14.7167,
        lng: -17.4677,
        region: "Sénégal",
        country: "Sénégal",
        city: "Dakar"
      }
    },
    // Secteur : Banque
    {
      id: 48,
      name: "Prêt Personnel Express",
      type: "service",
      sector: "banque",
      category: "prêt",
      price: 5000,
      currency: "XOF",
      rating: 4.3,
      reviewCount: 41,
      image: "/assets/images/services/loan.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 2,
      location: {
        lat: 5.3600,
        lng: -4.0083,
        region: "Côte d'Ivoire",
        country: "Côte d'Ivoire",
        city: "Abidjan"
      }
    },
    // Secteur : Télécoms
    {
      id: 49,
      name: "Carte SIM Internationale",
      type: "product",
      sector: "télécoms",
      category: "mobile",
      price: 2000,
      currency: "XOF",
      rating: 4.2,
      reviewCount: 33,
      image: "/assets/images/products/sim-card.jpg",
      condition: "Neuf",
      stock: 50,
      deliveryTime: 1,
      brand: "TelecomPlus",
      location: {
        lat: 6.5244,
        lng: 3.3792,
        region: "Nigeria",
        country: "Nigeria",
        city: "Lagos"
      }
    },
    // Secteur : Énergie
    {
      id: 50,
      name: "Lampe Solaire Portable",
      type: "product",
      sector: "énergie",
      category: "solaire",
      price: 8000,
      currency: "XOF",
      rating: 4.6,
      reviewCount: 29,
      image: "/assets/images/products/solar-lamp.jpg",
      condition: "Neuf",
      stock: 30,
      deliveryTime: 2,
      brand: "SunPower",
      location: {
        lat: 12.6392,
        lng: -8.0029,
        region: "Mali",
        country: "Mali",
        city: "Bamako"
      }
    },
    // Secteur : Immobilier
    {
      id: 51,
      name: "Maison Duplex Moderne",
      type: "service",
      sector: "immobilier",
      category: "vente",
      price: 35000000,
      currency: "XOF",
      rating: 4.8,
      reviewCount: 19,
      image: "/assets/images/services/duplex.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 7,
      location: {
        lat: 6.5244,
        lng: 3.3792,
        region: "Nigeria",
        country: "Nigeria",
        city: "Lagos"
      }
    },
    // Secteur : Transport
    {
      id: 52,
      name: "Service Taxi Aéroport",
      type: "service",
      sector: "transport",
      category: "taxi",
      price: 15000,
      currency: "XOF",
      rating: 4.4,
      reviewCount: 77,
      image: "/assets/images/services/airport-taxi.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 33.5731,
        lng: -7.5898,
        region: "Maroc",
        country: "Maroc",
        city: "Casablanca"
      }
    },
    // Secteur : Assurance
    {
      id: 53,
      name: "Assurance Décès Accidentel",
      type: "service",
      sector: "assurance",
      category: "décès",
      price: 20000,
      currency: "XOF",
      rating: 4.2,
      reviewCount: 22,
      image: "/assets/images/services/accident-insurance.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 5.6037,
        lng: -0.1870,
        region: "Ghana",
        country: "Ghana",
        city: "Accra"
      }
    },
    // Secteur : Banque
    {
      id: 54,
      name: "Compte Épargne Jeune",
      type: "service",
      sector: "banque",
      category: "épargne",
      price: 5000,
      currency: "XOF",
      rating: 4.4,
      reviewCount: 37,
      image: "/assets/images/services/youth-savings.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 31.2001,
        lng: 29.9187,
        region: "Égypte",
        country: "Égypte",
        city: "Alexandrie"
      }
    },
    // Secteur : Télécoms
    {
      id: 55,
      name: "Routeur WiFi Portable",
      type: "product",
      sector: "télécoms",
      category: "internet",
      price: 25000,
      currency: "XOF",
      rating: 4.3,
      reviewCount: 44,
      image: "/assets/images/products/wifi-router.jpg",
      condition: "Neuf",
      stock: 20,
      deliveryTime: 2,
      brand: "TelecomPlus",
      location: {
        lat: 33.5731,
        lng: -7.5898,
        region: "Maroc",
        country: "Maroc",
        city: "Casablanca"
      }
    },
    // Secteur : Énergie
    {
      id: 56,
      name: "Mini Éolienne Domestique",
      type: "product",
      sector: "énergie",
      category: "éolienne",
      price: 180000,
      currency: "XOF",
      rating: 4.7,
      reviewCount: 21,
      image: "/assets/images/products/wind-turbine.jpg",
      condition: "Neuf",
      stock: 4,
      deliveryTime: 6,
      brand: "WindHome",
      location: {
        lat: -25.7479,
        lng: 28.2293,
        region: "Afrique du Sud",
        country: "Afrique du Sud",
        city: "Pretoria"
      }
    },
    // Secteur : Immobilier
    {
      id: 57,
      name: "Bureau Coworking Premium",
      type: "service",
      sector: "immobilier",
      category: "location",
      price: 80000,
      currency: "XOF",
      rating: 4.5,
      reviewCount: 15,
      image: "/assets/images/services/coworking.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 30.0444,
        lng: 31.2357,
        region: "Égypte",
        country: "Égypte",
        city: "Le Caire"
      }
    },
    // Secteur : Transport
    {
      id: 58,
      name: "Location Camion Déménagement",
      type: "service",
      sector: "transport",
      category: "location",
      price: 40000,
      currency: "XOF",
      rating: 4.2,
      reviewCount: 18,
      image: "/assets/images/services/moving-truck.jpg",
      condition: "Professionnel",
      stock: null,
      deliveryTime: 1,
      location: {
        lat: 5.6037,
        lng: -0.1870,
        region: "Ghana",
        country: "Ghana",
        city: "Accra"
      }
    },
    
]
