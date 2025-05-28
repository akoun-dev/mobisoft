import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-none">
      <main className="flex-grow w-full px-4 py-8 sm:py-12">
        <h1 className="text-4xl font-bold text-ui-text-primary mb-8">À propos d'AfricaHub</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
          <p className="text-lg text-ui-text-secondary">
            AfricaHub est une plateforme de comparaison intelligente conçue spécifiquement 
            pour le marché africain, couvrant les 54 pays du continent.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Notre équipe</h2>
          <p className="text-lg text-ui-text-secondary">
            Une équipe panafricaine passionnée par l'innovation et le service aux consommateurs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Nos valeurs</h2>
          <ul className="list-disc pl-6 text-lg text-ui-text-secondary space-y-2">
            <li>Transparence dans les comparaisons</li>
            <li>Adaptation aux spécificités locales</li>
            <li>Innovation technologique</li>
            <li>Service client d'excellence</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default AboutPage
