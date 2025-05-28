import { useParams } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardFooter } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Separator } from '../../components/ui/separator'
import { useNavigate } from 'react-router-dom'
import { products } from '../../mocks/products' // Import des données mockées

const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // Trouver le produit correspondant dans les données mockées
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h2 className="text-2xl font-bold">Produit non trouvé</h2>
        <Button onClick={() => navigate('/produits')} className="mt-4">
          Retour à la liste des produits
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Section Image */}
        <Card>
          <CardContent className="p-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto rounded-lg object-cover"
            />
          </CardContent>
        </Card>

        {/* Section Détails */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="capitalize">
                  {product.sector}
                </Badge>
                <Badge variant="outline" className="capitalize">
                  {product.category}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">
                  {product.price.toLocaleString()} {product.currency}
                </span>
                {product.oldPrice && (
                  <span className="text-lg line-through text-muted-foreground">
                    {product.oldPrice.toLocaleString()} {product.currency}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ★
                  </span>
                ))}
                <span className="text-sm text-muted-foreground">
                  ({product.reviewCount} avis)
                </span>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">
                  {product.description || 'Aucune description disponible'}
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Détails</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Marque</span>
                    <span>{product.brand || '-'}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Condition</span>
                    <span>{product.condition}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Livraison</span>
                    <span>{product.deliveryTime} jour(s)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Localisation</span>
                    <span>{product.location?.city}, {product.location?.country}</span>
                  </li>
                </ul>
              </div>
            </CardContent>

            <CardFooter className="flex gap-4">
              <Button className="flex-1">Ajouter au panier</Button>
              <Button variant="outline" className="flex-1">
                Ajouter à la comparaison
              </Button>
            </CardFooter>
          </Card>

          {/* Section Spécifications */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Spécifications techniques</h2>
            </CardHeader>
            <CardContent>
              {product.specifications ? (
                <ul className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span className="text-muted-foreground capitalize">{key}</span>
                      <span className="font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">Aucune spécification technique disponible</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
