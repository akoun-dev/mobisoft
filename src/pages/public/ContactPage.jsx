import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-none">
      <main className="flex-grow w-full px-4 sm:px-6 max-w-7xl mx-auto py-8 sm:py-12">
        <h1 className="text-4xl font-bold text-ui-text-primary mb-8">Contactez-nous</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Informations de contact</h2>
            <div className="space-y-4 text-lg">
              <p><strong>Email :</strong> contact@africahub.com</p>
              <p><strong>Téléphone :</strong> +225 XX XX XX XX</p>
              <p><strong>Adresse :</strong> Abidjan, Côte d'Ivoire</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Formulaire de contact</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Nom complet</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-1">Message</label>
                <textarea rows="4" className="w-full p-2 border rounded"></textarea>
              </div>
              <button type="submit" className="btn-primary px-6 py-3">
                Envoyer
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  )
}

export default ContactPage
