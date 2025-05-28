import { useComparison } from '../../stores/useComparison'

const ComparisonTable = () => {
  const { items: products } = useComparison()

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-ui-border">
        <thead className="bg-ui-surface">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-ui-text-primary uppercase tracking-wider">
              Caractéristiques
            </th>
            {products.map((product, index) => (
              <th key={index} className="px-6 py-3 text-left text-xs font-medium text-ui-text-primary uppercase tracking-wider">
                {product.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-ui-border">
          {/* Lignes de comparaison à implémenter */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-ui-text-primary">
              Prix
            </td>
            {products.map((product, index) => (
              <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-ui-text-secondary">
                {product.price} {product.currency}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable
