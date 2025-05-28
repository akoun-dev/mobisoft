import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@ui/card'
import { Badge } from '@ui/badge'
import { Button } from '@ui/button'
import { Progress } from '@ui/progress'
import { Tooltip, TooltipTrigger, TooltipContent } from '@ui/tooltip'
import { Heart, Share2, Eye } from 'lucide-react'
import { useComparison } from '@stores/useComparison'

const GenericCard = ({ item }) => {
  const { addItem } = useComparison()

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-4 pb-2">
        <div className="relative">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-48 object-contain rounded-t-lg"
          />
          {item.discount && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              -{item.discount}%
            </Badge>
          )}
          <Badge variant="secondary" className="absolute top-2 right-2">
            {item.condition || 'Neuf'}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">{item.name}</CardTitle>
          <Badge variant="outline">{item.type}</Badge>
        </div>
        
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
          ))}
          <span className="text-sm text-gray-500 ml-1">({item.reviewCount || 0})</span>
        </div>

        <p className="text-sm text-muted-foreground mb-2">
          Secteur: {item.sector}
        </p>

        {item.price && (
          <div className="mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold">{item.price} {item.currency}</span>
              {item.oldPrice && (
                <span className="text-sm line-through text-gray-500">
                  {item.oldPrice} {item.currency}
                </span>
              )}
            </div>
            {item.oldPrice && (
              <span className="text-sm text-green-600">
                Économisez {item.oldPrice - item.price} {item.currency}
              </span>
            )}
          </div>
        )}

        {item.stock && (
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span>Disponibilité:</span>
              <span className={item.stock > 10 ? 'text-green-600' : item.stock > 0 ? 'text-yellow-600' : 'text-red-600'}>
                {item.stock > 10 ? 'En stock' : item.stock > 0 ? `Plus que ${item.stock}` : 'Rupture'}
              </span>
            </div>
            <Progress value={Math.min(100, (item.stock / 20) * 100)} className="h-2" />
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1"
          onClick={() => addItem(item)}
        >
          Comparer
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Ajouter aux favoris</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Partager</TooltipContent>
        </Tooltip>
      </CardFooter>
    </Card>
  )
}

export default GenericCard
