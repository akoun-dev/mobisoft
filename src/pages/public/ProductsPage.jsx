import { useState } from 'react'
import GenericCard from '../../components/common/GenericCard'

const ProductsPage = () => {
  // Données de démonstration - à remplacer par l'API
  const [selectedSector, setSelectedSector] = useState('tous')
  const [selectedCategory, setSelectedCategory] = useState('tous')
  const [priceRange, setPriceRange] = useState(2900000)
  const [minRating, setMinRating] = useState(0)
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedConditions, setSelectedConditions] = useState([])
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)
  
  const items = [
    {
      id: 1,
      name: "Smartphone X1",
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
      deliveryTime: 2
    },
    {
      id: 2,
      name: "Smartphone X2",
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
      brand: "Samsung"
    },
    {
      id: 3,
      name: "Smartphone X3",
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
      brand: "Apple"
    },
    {
      id: 4,
      name: "TV X4",
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
      brand: "LG"
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
      brand: "HP"
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
      deliveryTime: 1
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
      deliveryTime: 1
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
      deliveryTime: 2
    }
  ]

  // Filtrage des items
  const filteredItems = items.filter(item => {
    // Filtres de base
    const sectorMatch = selectedSector === 'tous' || item.sector === selectedSector
    const categoryMatch = selectedCategory === 'tous' || item.category === selectedCategory
    const priceMatch = item.price <= priceRange
    const ratingMatch = item.rating >= minRating
    const cityMatch = selectedCity === '' || item.city === selectedCity
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(item.brand)
    const servicesMatch = selectedServices.length === 0 || 
                         selectedServices.every(service => item.services?.includes(service))

    return sectorMatch && categoryMatch && priceMatch && ratingMatch && 
           cityMatch && brandMatch && servicesMatch
  })

  // Liste des secteurs uniques
  const sectors = ['tous', ...new Set(items.map(item => item.sector))]
  
  // Liste des catégories uniques pour le secteur sélectionné
  const categories = ['tous', ...new Set(
    items
      .filter(item => selectedSector === 'tous' || item.sector === selectedSector)
      .map(item => item.category)
  )]

  return (
    <div className="min-h-screen flex flex-col w-full max-w-none px-0">
      {/* Hero Section */}
      <div className="bg-ui-surface py-12 px-5 sm:px-6 w-full">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-ui-text-primary mb-4">Trouvez les meilleurs produits et services</h1>
          <p className="text-xl text-ui-text-secondary mb-8">Comparez et choisissez parmi des milliers d'options en Afrique</p>
          {/* Barre de recherche */}
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Rechercher un produit ou service..."
              className="w-full p-4 pr-12 rounded-lg border border-ui-border focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-6 h-6 text-ui-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-grow w-full px-0 py-8 sm:py-12">
        {/* Header avec compteur et boutons */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-ui-text-primary">
              {filteredItems.length} résultats
            </h2>
            {selectedSector !== 'tous' || selectedCategory !== 'tous' ? (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedSector !== 'tous' && (
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {selectedSector}
                  </span>
                )}
                {selectedCategory !== 'tous' && (
                  <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {selectedCategory}
                  </span>
                )}
                <button 
                  onClick={() => {
                    setSelectedSector('tous')
                    setSelectedCategory('tous')
                  }}
                  className="text-xs text-ui-text-secondary hover:text-primary-500"
                >
                  Tout effacer
                </button>
              </div>
            ) : null}
          </div>

          {/* Bouton mode d'affichage */}
          <div className="flex gap-2">
            <button className="p-2 rounded hover:bg-ui-surface">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button className="p-2 rounded hover:bg-ui-surface">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Filtres avancés et contenu */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Barre latérale des filtres */}
          <div className="lg:w-1/4">
            <div className="bg-ui-surface p-4 rounded-lg sticky top-4">
              <h3 className="font-medium text-lg mb-4">Filtrer par</h3>
              
              {/* Filtre Secteur */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-ui-text-secondary mb-2">Secteur</h4>
                <div className="space-y-2">
                  {sectors.map(sector => (
                    <div key={sector} className="flex items-center">
                      <input
                        id={`sector-${sector}`}
                        type="radio"
                        name="sector"
                        checked={selectedSector === sector}
                        onChange={() => setSelectedSector(sector)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor={`sector-${sector}`} className="ml-3 text-sm text-ui-text-secondary">
                        {sector.charAt(0).toUpperCase() + sector.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Filtre Catégorie */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-ui-text-secondary mb-2">Catégorie</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        id={`category-${category}`}
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor={`category-${category}`} className="ml-3 text-sm text-ui-text-secondary">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filtre Prix */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-ui-text-secondary mb-2">Prix (FCFA)</h4>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="2900000"
                    step="10000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full h-2 bg-ui-border rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-ui-text-secondary mt-1">
                    <span>0</span>
                    <span>2 900 000</span>
                  </div>
                </div>
              </div>

              {/* Filtre Notes */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-ui-text-secondary mb-2">Note minimale</h4>
                <div className="space-y-2">
                  {[3, 4, 4.5].map(rating => (
                    <div key={rating} className="flex items-center">
                      <input
                        id={`rating-${rating}`}
                        type="radio"
                        name="rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor={`rating-${rating}`} className="ml-3 text-sm text-ui-text-secondary">
                        {Array.from({length: 5}).map((_, i) => (
                          <span key={i} className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                        ))}
                        {rating}+
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filtre Villes */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-ui-text-secondary mb-2">Ville</h4>
                <select 
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full p-2 border border-ui-border rounded"
                >
                  <option value="">Toutes les villes</option>
                  {['Dakar', 'Abidjan', 'Lagos', 'Accra', 'Bamako'].map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Filtre Marques */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-ui-text-secondary mb-2">Marques</h4>
                <div className="space-y-2">
                  {['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'OnePlus', 'Orange'].map(brand => (
                    <div key={brand} className="flex items-center">
                      <input
                        id={`brand-${brand}`}
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, brand])
                          } else {
                            setSelectedBrands(selectedBrands.filter(b => b !== brand))
                          }
                        }}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor={`brand-${brand}`} className="ml-3 text-sm text-ui-text-secondary">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filtre Services */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-ui-text-secondary mb-2">Services</h4>
                <div className="space-y-2">
                  {['Garantie étendue', 'Livraison rapide', 'Paiement mobile', 'Service client 24/7', 'Retour gratuit', 'Installation incluse'].map(service => (
                    <div key={service} className="flex items-center">
                      <input
                        id={`service-${service}`}
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor={`service-${service}`} className="ml-3 text-sm text-ui-text-secondary">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filtre Condition */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-ui-text-secondary mb-2">Condition</h4>
                <div className="space-y-2">
                  {['Neuf', 'Reconditionné', 'Professionnel'].map(condition => (
                    <div key={condition} className="flex items-center">
                      <input
                        id={`condition-${condition}`}
                        type="checkbox"
                        checked={selectedConditions?.includes(condition)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedConditions([...(selectedConditions || []), condition]);
                          } else {
                            setSelectedConditions(selectedConditions?.filter(c => c !== condition) || []);
                          }
                        }}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor={`condition-${condition}`} className="ml-3 text-sm text-ui-text-secondary">
                        {condition}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filtre Livraison */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-ui-text-secondary mb-2">Délai de livraison</h4>
                <select 
                  value={selectedDeliveryTime} 
                  onChange={(e) => setSelectedDeliveryTime(e.target.value)}
                  className="w-full p-2 border border-ui-border rounded"
                >
                  <option value="">Tous les délais</option>
                  <option value="1">1 jour</option>
                  <option value="3">1-3 jours</option>
                  <option value="7">3-7 jours</option>
                  <option value="14">+7 jours</option>
                </select>
              </div>

              {/* Filtre Disponibilité */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-ui-text-secondary mb-2">Disponibilité</h4>
                <div className="flex items-center">
                  <input
                    id="inStockOnly"
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="inStockOnly" className="ml-3 text-sm text-ui-text-secondary">
                    En stock seulement
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Contenu principal */}
          <div className="lg:w-3/4">
            {/* Grille d'items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <div key={item.id} className="relative">
                  <GenericCard item={item} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {filteredItems.length > 0 && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center gap-1">
                  <button className="px-3 py-1 rounded hover:bg-ui-surface">
                    &laquo;
                  </button>
                  <button className="px-3 py-1 bg-primary-500 text-white rounded">
                    1
                  </button>
                  <button className="px-3 py-1 rounded hover:bg-ui-surface">
                    2
                  </button>
                  <button className="px-3 py-1 rounded hover:bg-ui-surface">
                    3
                  </button>
                  <span className="px-3 py-1">...</span>
                  <button className="px-3 py-1 rounded hover:bg-ui-surface">
                    10
                  </button>
                  <button className="px-3 py-1 rounded hover:bg-ui-surface">
                    &raquo;
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductsPage
