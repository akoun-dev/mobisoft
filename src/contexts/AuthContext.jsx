import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const navigate = useNavigate()

  // Mode démo sans Supabase
  const isDemoMode = !import.meta.env.VITE_SUPABASE_URL

  // Fonction de déconnexion
  const signOut = async () => {
    if (isDemoMode) {
      setUser(null)
      setIsAdmin(false)
      navigate('/')
      return { error: null }
    }

    try {
      const { supabase } = await import('../services/supabase')
      const { error } = await supabase.auth.signOut()
      if (!error) {
        setUser(null)
        setIsAdmin(false)
        navigate('/')
      }
      return { error }
    } catch (err) {
      console.error('Erreur de déconnexion:', err)
      return { error: err }
    }
  }

  // Vérifier l'état d'authentification
  const checkAuth = async () => {
    if (isDemoMode) {
      // Mode démo - utilisateur fictif
      setUser({ email: 'demo@africahub.com' })
      setIsAdmin(true)
      return
    }

    try {
      const { supabase } = await import('../services/supabase')
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        setIsAdmin(user.email?.endsWith('@africahub.com'))
      }
    } catch (err) {
      console.error('Erreur de vérification auth:', err)
    }
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAdmin, 
      signOut, 
      checkAuth,
      isDemoMode 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
