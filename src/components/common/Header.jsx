import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, User, LogOut, Settings, ShoppingCart } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { user, signOut, isAdmin } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <header className="bg-primary-600 text-white shadow-sm sticky top-0 z-50">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary-600 font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-semibold text-white hidden sm:block">
              MobiSoft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-white hover:text-white/80 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Accueil
            </Link>
            <Link
              to="/produits"
              className="px-4 py-2 text-white hover:text-white/80 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Produits
            </Link>
            <Link
              to="/comparaison"
              className="px-4 py-2 text-white hover:text-white/80 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Comparaison
            </Link>
            <Link
              to="/a-propos"
              className="px-4 py-2 text-white hover:text-white/80 rounded-lg hover:bg-primary-700 transition-colors"
            >
              À propos
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Search on desktop */}
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Rechercher des produits..."
                className="w-64 px-4 py-2 bg-primary-700 text-white rounded-lg text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            {/* Comparison button */}
            <Link
              to="/comparaison"
              className="relative p-2 text-white hover:text-white/80 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-primary-600 text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 text-white hover:text-white/80 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <User className="w-5 h-5" />
                </button>

                {/* Dropdown */}
                {isUserMenuOpen && (
                  <div className="dropdown w-48 right-0">
                    <Link
                      to="/tableau-de-bord"
                      className="block px-4 py-2 text-primary-600 hover:bg-primary-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Mon tableau de bord
                    </Link>
                    <Link
                      to="/parametres"
                      className="block px-4 py-2 text-primary-600 hover:bg-primary-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4 inline mr-2" />
                      Paramètres
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-primary-600 hover:bg-primary-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Administration
                      </Link>
                    )}
                    <hr className="my-2 border-ui-border" />
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-primary-600 hover:bg-primary-100"
                    >
                      <LogOut className="w-4 h-4 inline mr-2" />
                      Déconnexion
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/connexion"
                  className="text-white hover:text-white/80 text-sm"
                >
                  Connexion
                </Link>
                <Link
                  to="/inscription"
                  className="bg-white text-primary-600 hover:bg-white/90 text-sm px-4 py-2 rounded-lg"
                >
                  Inscription
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-white/80 rounded-lg hover:bg-primary-700 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-ui-border">
            <nav className="space-y-1">
              <Link
                to="/"
                className="block px-4 py-2 text-white hover:text-white/80 rounded-lg hover:bg-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/produits"
                className="block px-4 py-2 text-ui-text-secondary hover:text-ui-text-primary rounded-lg hover:bg-ui-surface"
                onClick={() => setIsMenuOpen(false)}
              >
                Produits
              </Link>
              <Link
                to="/comparaison"
                className="block px-4 py-2 text-ui-text-secondary hover:text-ui-text-primary rounded-lg hover:bg-ui-surface"
                onClick={() => setIsMenuOpen(false)}
              >
                Comparaison
              </Link>
              <Link
                to="/a-propos"
                className="block px-4 py-2 text-ui-text-secondary hover:text-ui-text-primary rounded-lg hover:bg-ui-surface"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
