import { useState } from 'react'
import { Search, Grid, List, Filter, Map } from 'lucide-react'
import MapComponent from '../../components/common/MapComponent'
import { Card, CardContent, CardHeader } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Checkbox } from '../../components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'
import { Label } from '../../components/ui/label'
import { Slider } from '../../components/ui/slider'
import { Separator } from '../../components/ui/separator'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../components/ui/sheet'
import GenericCard from '../../components/common/GenericCard'

const ProductsPage = () => {
  // États pour les filtres
  const [selectedSector, setSelectedSector] = useState('tous')
  const [selectedCategory, setSelectedCategory] = useState('tous')
  const [priceRange, setPriceRange] = useState([2900000])
  const [minRating, setMinRating] = useState(0)
  const [selectedCity, setSelectedCity] = useState('all')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedConditions, setSelectedConditions] = useState([])
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [selectedRegion, setSelectedRegion] = useState(null)
  
  // Données de démonstration
  const items = [
    // Assurance
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
    }
  ]

  // Filtrage des items
  const filteredItems = items.filter(item => {
    const sectorMatch = selectedSector === 'tous' || item.sector === selectedSector
    const categoryMatch = selectedCategory === 'tous' || item.category === selectedCategory
    const priceMatch = item.price <= priceRange[0]
    const ratingMatch = item.rating >= minRating
    const cityMatch = selectedCity === 'all' || selectedCity === '' || item.city === selectedCity
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(item.brand)
    const searchMatch = searchQuery === '' || 
                       item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       item.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       item.category.toLowerCase().includes(searchQuery.toLowerCase())
    const regionMatch = !selectedRegion || item.location?.region === selectedRegion

    return sectorMatch && categoryMatch && priceMatch && ratingMatch && 
           cityMatch && brandMatch && searchMatch && regionMatch
  })

  // Listes pour les filtres
  const sectors = ['tous', ...new Set(items.map(item => item.sector))]
  const categories = ['tous', ...new Set(
    items
      .filter(item => selectedSector === 'tous' || item.sector === selectedSector)
      .map(item => item.category)
  )]
  const brands = [...new Set(items.map(item => item.brand).filter(Boolean))]

  // Composant de filtres
  const FilterSection = () => (
    <Card className="sticky top-4">
      <CardHeader>
        <h3 className="text-lg font-semibold">Filtres</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Secteur */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Secteur</Label>
          <RadioGroup value={selectedSector} onValueChange={setSelectedSector}>
            {sectors.map(sector => (
              <div key={sector} className="flex items-center space-x-2">
                <RadioGroupItem value={sector} id={`sector-${sector}`} />
                <Label htmlFor={`sector-${sector}`} className="text-sm capitalize">
                  {sector}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Separator />

        {/* Catégorie */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Catégorie</Label>
          <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
            {categories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <RadioGroupItem value={category} id={`category-${category}`} />
                <Label htmlFor={`category-${category}`} className="text-sm capitalize">
                  {category}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Separator />

        {/* Prix */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Prix maximum (FCFA)</Label>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={2900000}
              min={0}
              step={10000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>0</span>
              <span>{priceRange[0].toLocaleString()}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Note minimale */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Note minimale</Label>
          <RadioGroup value={minRating.toString()} onValueChange={(value) => setMinRating(Number(value))}>
            {[0, 3, 4, 4.5].map(rating => (
              <div key={rating} className="flex items-center space-x-2">
                <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                <Label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                  {rating === 0 ? 'Toutes les notes' : (
                    <>
                      {Array.from({length: 5}).map((_, i) => (
                        <span key={i} className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                      ))}
                      <span className="ml-1">{rating}+</span>
                    </>
                  )}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Separator />

        {/* Ville */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Ville</Label>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger>
              <SelectValue placeholder="Toutes les villes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les villes</SelectItem>
              {['Dakar', 'Abidjan', 'Lagos', 'Accra', 'Bamako'].map(city => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Marques */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Marques</Label>
          <div className="space-y-2">
            {brands.map(brand => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedBrands([...selectedBrands, brand])
                    } else {
                      setSelectedBrands(selectedBrands.filter(b => b !== brand))
                    }
                  }}
                />
                <Label htmlFor={`brand-${brand}`} className="text-sm">
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Condition */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Condition</Label>
          <div className="space-y-2">
            {['Neuf', 'Reconditionné', 'Professionnel'].map(condition => (
              <div key={condition} className="flex items-center space-x-2">
                <Checkbox
                  id={`condition-${condition}`}
                  checked={selectedConditions.includes(condition)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedConditions([...selectedConditions, condition])
                    } else {
                      setSelectedConditions(selectedConditions.filter(c => c !== condition))
                    }
                  }}
                />
                <Label htmlFor={`condition-${condition}`} className="text-sm">
                  {condition}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted/50 border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Trouvez les meilleurs produits et services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comparez et choisissez parmi des milliers d'options en Afrique
            </p>
            
            {/* Barre de recherche améliorée */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Rechercher un produit ou service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="container mx-auto px-2 py-2">
        {/* Header avec compteur et contrôles */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              {filteredItems.length} résultats
            </h2>
            
            {/* Tags des filtres actifs */}
            {(selectedSector !== 'tous' || selectedCategory !== 'tous' || selectedBrands.length > 0 || selectedRegion) && (
              <div className="flex flex-wrap gap-2">
                {selectedSector !== 'tous' && (
                  <Badge variant="secondary" className="capitalize">
                    {selectedSector}
                  </Badge>
                )}
                {selectedCategory !== 'tous' && (
                  <Badge variant="secondary" className="capitalize">
                    {selectedCategory}
                  </Badge>
                )}
                {selectedRegion && (
                  <Badge variant="default" className="bg-blue-600">
                    📍 {selectedRegion}
                  </Badge>
                )}
                {selectedBrands.map(brand => (
                  <Badge key={brand} variant="outline">
                    {brand}
                  </Badge>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedSector('tous')
                    setSelectedCategory('tous')
                    setSelectedBrands([])
                    setSelectedConditions([])
                    setSearchQuery('')
                    setSelectedRegion(null)
                  }}
                  className="h-6 px-2 text-xs"
                >
                  Tout effacer
                </Button>
              </div>
            )}
          </div>

          {/* Contrôles d'affichage */}
          <div className="flex items-center gap-2">
            {/* Filtres mobiles */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtres
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filtres</SheetTitle>
                  <SheetDescription>
                    Affinez votre recherche avec les filtres ci-dessous
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSection />
                </div>
              </SheetContent>
            </Sheet>

            {/* Mode d'affichage */}
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-none"
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('map')}
                className="rounded-l-none"
              >
                <Map className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Layout principal */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtres desktop */}
          <div className="hidden lg:block lg:w-1/4">
            <FilterSection />
          </div>

          {/* Grille de produits */}
          <div className="flex-1">
            {filteredItems.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">Aucun produit trouvé avec ces critères.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedSector('tous')
                    setSelectedCategory('tous')
                    setSelectedBrands([])
                    setSearchQuery('')
                  }}
                  className="mt-4"
                >
                  Réinitialiser les filtres
                </Button>
              </Card>
            ) : (
              <>
                {/* Carte interactive */}
                {viewMode === 'map' && (
                  <div className="mb-8">
                    <MapComponent 
                      products={items.filter(i => i.location)} 
                      onRegionSelect={setSelectedRegion}
                      selectedRegion={selectedRegion}
                    />
                  </div>
                )}

                <div className={`grid gap-4 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                    : 'grid-cols-1'
                }`}>
                  {filteredItems.map(item => (
                    <div key={item.id}>
                      <GenericCard item={item} />
                    </div>
                  ))}
                </div>

                {/* Pagination améliorée */}
                {filteredItems.length > 12 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" disabled>
                        Précédent
                      </Button>
                      <Button variant="default" size="sm">1</Button>
                      <Button variant="outline" size="sm">2</Button>
                      <Button variant="outline" size="sm">3</Button>
                      <span className="px-2 text-muted-foreground">...</span>
                      <Button variant="outline" size="sm">10</Button>
                      <Button variant="outline" size="sm">
                        Suivant
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
