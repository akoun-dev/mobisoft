import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import HomePage from './pages/public/HomePage'
import ComparisonPage from './pages/public/ComparisonPage'
import ProductsPage from './pages/public/ProductsPage'
import AboutPage from './pages/public/AboutPage'
import ContactPage from './pages/public/ContactPage'
import FaqPage from './pages/public/FaqPage'
import RegionProductsPage from './pages/public/RegionProductsPage'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comparaison" element={<ComparisonPage />} />
          <Route path="/produits" element={<ProductsPage />} />
          <Route path="/region/:region" element={<RegionProductsPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
