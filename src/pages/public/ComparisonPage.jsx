import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import ComparisonTable from '../../components/comparison/ComparisonTable'

const ComparisonPage = () => {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-none">
      <main className="flex-grow w-full px-4 sm:px-6 max-w-7xl mx-auto py-8 sm:py-12">
        <h1 className="text-4xl font-bold text-ui-text-primary mb-8">Comparaison de produits</h1>
        
        <div className="bg-white rounded-lg shadow-card p-6">
          <ComparisonTable />
        </div>
      </main>
    </div>
  )
}

export default ComparisonPage
