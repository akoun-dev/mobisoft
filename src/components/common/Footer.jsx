const Footer = () => {
  const links = {
    navigation: [
      { name: 'Accueil', href: '/' },
      { name: 'Produits', href: '/produits' },
      { name: 'Comparaison', href: '/comparaison' },
      { name: 'À propos', href: '/a-propos' }
    ],
    legal: [
      { name: 'Conditions d\'utilisation', href: '/conditions' },
      { name: 'Politique de confidentialité', href: '/confidentialite' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' }
    ],
    social: [
      { name: 'Facebook', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'LinkedIn', href: '#' }
    ]
  }

  return (
    <footer className="bg-ui-surface border-t border-ui-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Grid responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Section Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-ui-text-primary mb-4">Navigation</h3>
            <ul className="space-y-2">
              {links.navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-ui-text-secondary hover:text-ui-primary">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section Légal */}
          <div>
            <h3 className="text-lg font-semibold text-ui-text-primary mb-4">Légal</h3>
            <ul className="space-y-2">
              {links.legal.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-ui-text-secondary hover:text-ui-primary">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold text-ui-text-primary mb-4">Nous suivre</h3>
            <ul className="space-y-2">
              {links.social.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-ui-text-secondary hover:text-ui-primary">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-ui-border text-center text-ui-text-secondary">
          <p>© {new Date().getFullYear()} AfricaHub. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
