import { useState, useEffect } from 'react'
import ErrorBoundary from './ErrorBoundary'
import './MapComponent.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import { Input } from '../ui/input'
import { useNavigate } from 'react-router-dom'

// Create custom icon
const createIcon = (iconUrl, iconRetinaUrl, shadowUrl) => {
  return new L.Icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
}

const defaultIcon = createIcon(
  '/assets/images/leaflet/marker-icon.png',
  '/assets/images/leaflet/marker-icon-2x.png',
  '/assets/images/leaflet/marker-shadow.png'
)

const MapWrapper = ({ children }) => {
  const map = useMap()
  useEffect(() => {
    // Console log supprimé pour nettoyer la console
    map.invalidateSize()
  }, [map])
  return children
}

const MapComponent = ({ products, onRegionSelect, selectedRegion }) => {
  // Centre par défaut sur l'Afrique
  const center = [2.8, 16.5]
  const zoom = 3
  
  // Filtrer les produits avec des coordonnées valides
  const productsWithLocation = products.filter(p => p.location?.lat && p.location?.lng)
  
  // Grouper les produits par région pour afficher le nombre
  const productsByRegion = productsWithLocation.reduce((acc, product) => {
    const region = product.location.region
    if (!acc[region]) {
      acc[region] = []
    }
    acc[region].push(product)
    return acc
  }, {})

  const [search, setSearch] = useState("");
  const filteredRegions = Object.entries(productsByRegion).filter(([region]) =>
    region.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <div className="space-y-4">
        {/* Indicateur de région sélectionnée */}
        {selectedRegion && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-blue-900">Région sélectionnée : {selectedRegion}</h3>
                <p className="text-sm text-blue-700">
                  {productsByRegion[selectedRegion]?.length || 0} produit(s) disponible(s)
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onRegionSelect(null)}
                className="text-blue-700 border-blue-300 hover:bg-blue-100"
              >
                Effacer la sélection
              </Button>
            </div>
          </div>
        )}
        
        {/* Carte interactive */}
        <div className="h-[500px] w-full rounded-lg overflow-hidden relative z-0">
          <MapContainer 
            center={center} 
            zoom={zoom} 
            style={{ height: '100%', width: '100%' }}
          >
            <MapWrapper>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {productsWithLocation.map((product, index) => {
                const isSelected = selectedRegion === product.location.region
                return (
                  <Marker 
                    key={index} 
                    position={[product.location.lat, product.location.lng]}
                    icon={defaultIcon}
                    eventHandlers={{
                      click: () => onRegionSelect(product.location.region)
                    }}
                  >
                    <Popup>
                      <div className="text-sm">
                        <h3 className="font-bold">{product.name}</h3>
                        <p className="text-gray-600">{product.sector}</p>
                        <p className="font-semibold">{product.price.toLocaleString()} {product.currency}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          📍 {product.location.city}, {product.location.country}
                        </p>
                        <Button 
                          size="sm" 
                          className="mt-2 w-full" 
                          onClick={() => navigate(`/region/${encodeURIComponent(product.location.region)}`)}
                        >
                          Voir tous les produits et services de {product.location.region}
                        </Button>
                      </div>
                    </Popup>
                  </Marker>
                )
              })}
            </MapWrapper>
          </MapContainer>
        </div>
        
        {/* Légende des régions */}
        <Card className="bg-gray-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold mb-0">Régions disponibles :</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <Input
              placeholder="Rechercher une région..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="mb-3"
              size="sm"
            />
            <ScrollArea className="max-h-56 w-full pr-2 overflow-y-auto" style={{maxHeight: '14rem'}}>
              <div className="flex flex-col gap-1">
                {filteredRegions.length === 0 && (
                  <span className="text-muted-foreground text-sm px-2">Aucune région trouvée</span>
                )}
                {filteredRegions.map(([region, products]) => (
                  <Button
                    key={region}
                    variant={selectedRegion === region ? "default" : "outline"}
                    size="sm"
                    onClick={() => onRegionSelect(region)}
                    className="justify-between truncate w-full px-2 min-h-[2.25rem]"
                    style={{ maxWidth: '100%' }}
                    title={region}
                  >
                    <span className="truncate text-left w-full">{region}</span>
                    <Badge variant="secondary" className="ml-2 shrink-0">
                      {products.length}
                    </Badge>
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </ErrorBoundary>
  )
}

export default MapComponent
