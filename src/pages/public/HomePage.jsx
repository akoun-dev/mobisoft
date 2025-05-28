import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-none">      
      <main className="flex-grow">
        {/* Section Hero */}
        <section className="bg-ui-surface py-20 px-4">
          <div className="w-full text-center">
            <h1 className="text-4xl font-bold text-ui-text-primary mb-6">
              Comparez les produits en Afrique
            </h1>
            <p className="text-xl text-ui-text-secondary mb-8">
              Trouvez les meilleurs produits et services adaptés à votre pays
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn-primary px-6 py-3">
                Commencer la comparaison
              </button>
              <button className="btn-ghost px-6 py-3">
                En savoir plus
              </button>
            </div>
          </div>
        </section>

        {/* Section Fonctionnalités */}
        <section className="py-16 px-4">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-ui-text-primary mb-12 text-center">
              Pourquoi choisir AfricaHub ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Comparaison intelligente",
                  description: "Notre IA analyse les produits selon vos critères"
                },
                {
                  title: "Paiements locaux", 
                  description: "Intégration avec les solutions africaines"
                },
                {
                  title: "Multilingue",
                  description: "Disponible en 6 langues africaines"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-card">
                  <h3 className="text-xl font-semibold text-ui-text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-ui-text-secondary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
