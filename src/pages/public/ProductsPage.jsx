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

import { products } from '../../mocks/products'

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
  
  // Utilisation des données mockées importées
  const items = products;

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
