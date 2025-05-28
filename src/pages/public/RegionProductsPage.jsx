import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'

const RegionProductsPage = () => {
  const { region } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Remplacer par un vrai appel API ou contexte global si besoin
    const fetchProducts = async () => {
      setLoading(true)
      // Simuler un chargement (à remplacer par la vraie logique)
      const allProducts = JSON.parse(localStorage.getItem('products') || '[]')
      const filtered = allProducts.filter(p => p.location?.region === region)
      setProducts(filtered)
      setLoading(false)
    }
    fetchProducts()
  }, [region])

  return (
    <div className="min-h-screen flex flex-col w-full max-w-none">
      <main className="flex-grow w-full px-4 py-8 sm:py-12">
        <h1 className="text-3xl font-bold text-ui-text-primary mb-6">
          Produits et services pour la région : <span className="text-primary">{region}</span>
        </h1>
        {loading ? (
          <p>Chargement...</p>
        ) : products.length === 0 ? (
          <Card className="mb-4">
            <CardContent>
              <p>Aucun produit ou service trouvé pour cette région.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2">{product.sector}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-1">{product.price.toLocaleString()} {product.currency}</p>
                  <p className="text-sm text-muted-foreground mb-1">{product.location.city}, {product.location.country}</p>
                  <Button size="sm" variant="outline" className="mt-2">Voir le détail</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default RegionProductsPage
