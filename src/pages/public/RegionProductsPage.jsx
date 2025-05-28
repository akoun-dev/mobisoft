import { useParams } from 'react-router-dom'
import { products } from '../../mocks/products'
import GenericCard from '../../components/common/GenericCard'
import { Button } from '../../components/ui/button'
import { useNavigate } from 'react-router-dom'

const RegionProductsPage = () => {
  const { region } = useParams()
  const navigate = useNavigate()
  
  // Filtrer les produits par région
  const regionProducts = products.filter(p => p.location?.region === region)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            Produits et services au <span className="text-primary">{region}</span>
          </h1>
          <Button 
            variant="outline" 
            onClick={() => navigate('/produits')}
          >
            Voir tous les produits
          </Button>
        </div>

        {regionProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              Aucun produit ou service trouvé pour cette région.
            </p>
            <Button onClick={() => navigate('/produits')}>
              Explorer tous les produits
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regionProducts.map(product => (
              <GenericCard key={product.id} item={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default RegionProductsPage
