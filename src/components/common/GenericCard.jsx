import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Progress } from '../ui/progress'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../ui/tooltip'
import { Heart, Share2, Star, ShoppingCart, Eye } from 'lucide-react'
import { useComparison } from '../../stores/useComparison'

const GenericCard = ({ item }) => {
  const { addItem } = useComparison()

  // Formatage du prix avec séparateurs de milliers
  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price)
  }

  // Calcul du pourcentage de stock pour la barre de progression
  const getStockPercentage = () => {
    if (!item.stock) return 0
    return Math.min(100, (item.stock / 20) * 100)
  }

  // Couleur du badge de stock
  const getStockColor = () => {
    if (!item.stock || item.stock === 0) return 'text-destructive'
    if (item.stock <= 5) return 'text-yellow-600'
    return 'text-green-600'
  }

  return (
    <TooltipProvider>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-md bg-card h-[500px] flex flex-col">
        {/* Image et badges */}
        <div className="relative overflow-hidden">
          <div className="h-[200px] bg-muted/30 flex items-center justify-center p-4">
            <img 
              src={item.image || '/placeholder-product.jpg'} 
              alt={item.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.src = '/placeholder-product.jpg'
              }}
            />
          </div>
          
          {/* Badges overlay */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {item.discount && (
              <Badge variant="destructive" className="font-semibold shadow-sm">
                -{item.discount}%
              </Badge>
            )}
            {item.type === 'service' && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Service
              </Badge>
            )}
          </div>
          
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
              {item.condition || 'Neuf'}
            </Badge>
          </div>

          {/* Actions rapides */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="icon" className="h-8 w-8 shadow-sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Ajouter aux favoris</TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="icon" className="h-8 w-8 shadow-sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Partager</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
        
        <CardContent className="p-4 space-y-3">
          {/* Titre et secteur */}
          <div className="space-y-1">
            <CardTitle className="text-base font-semibold line-clamp-2 leading-tight">
              {item.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground capitalize">
              {item.sector} • {item.category}
            </p>
          </div>
          
          {/* Évaluation */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${
                    i < Math.floor(item.rating) 
                      ? 'fill-yellow-400 text-yellow-400' 
                      : 'text-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{item.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({item.reviewCount || 0} avis)
            </span>
          </div>

          {/* Prix */}
          {item.price && (
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-primary">
                  {formatPrice(item.price)} {item.currency}
                </span>
                {item.oldPrice && (
                  <span className="text-sm line-through text-muted-foreground">
                    {formatPrice(item.oldPrice)} {item.currency}
                  </span>
                )}
              </div>
              {item.oldPrice && (
                <p className="text-sm text-green-600 font-medium">
                  Économisez {formatPrice(item.oldPrice - item.price)} {item.currency}
                </p>
              )}
            </div>
          )}

          {/* Stock (pour les produits) */}
          {item.type === 'product' && item.stock !== null && (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Disponibilité</span>
                <span className={`font-medium ${getStockColor()}`}>
                  {item.stock === 0 
                    ? 'Rupture de stock' 
                    : item.stock <= 5 
                      ? `Plus que ${item.stock}` 
                      : 'En stock'
                  }
                </span>
              </div>
              {item.stock > 0 && (
                <Progress 
                  value={getStockPercentage()} 
                  className="h-1.5"
                />
              )}
            </div>
          )}

          {/* Livraison */}
          {item.deliveryTime && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Livraison</span>
              <span className="font-medium">
                {item.deliveryTime === 1 ? '24h' : `${item.deliveryTime} jours`}
              </span>
            </div>
          )}

          {/* Marque */}
          {item.brand && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Marque</span>
              <Badge variant="outline" className="text-xs">
                {item.brand}
              </Badge>
            </div>
          )}
        </CardContent>

        <CardFooter className="p-4 pt-0 mt-auto">
          <div className="w-full flex gap-2 h-10">
            {/* Bouton principal */}
              <Button 
                className={`flex-1 h-full flex items-center justify-center gap-2 ${
                  item.type === 'product' 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
              }`}
              onClick={() => addItem(item)}
              disabled={item.type === 'product' && item.stock === 0}
            >
              {item.type === 'product' ? (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  <span>
                    {item.stock === 0 ? 'Rupture de stock' : 'Ajouter au comparateur'}
                  </span>
                </>
              ) : (
                <>
                  <Eye className="" />
                  <span className="truncate">Comparer ce service</span>
                </>
              )}
            </Button>

            {/* Bouton secondaire - Icône seulement avec tooltip */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  className="h-10 w-10 p-0 flex-shrink-0 border-primary text-primary hover:bg-accent"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Voir les détails</TooltipContent>
            </Tooltip>
          </div>
        </CardFooter>
      </Card>
    </TooltipProvider>
  )
}

export default GenericCard
