import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

const FaqPage = () => {
  const faqs = [
    {
      question: "Comment utiliser le comparateur ?",
      answer: "Sélectionnez simplement les produits à comparer et notre outil affichera les différences clés."
    },
    {
      question: "Les prix sont-ils mis à jour en temps réel ?",
      answer: "Oui, nous actualisons nos données quotidiennement."
    },
    {
      question: "Comment signaler une erreur ?",
      answer: "Utilisez notre formulaire de contact pour nous informer de toute anomalie."
    }
  ]

  return (
    <div className="min-h-screen flex flex-col w-full max-w-none">
      <main className="flex-grow w-full px-4 sm:px-6 max-w-7xl mx-auto py-8 sm:py-12">
        <h1 className="text-4xl font-bold text-ui-text-primary mb-8">Foire aux questions</h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-ui-border pb-6">
              <h2 className="text-2xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-lg text-ui-text-secondary">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default FaqPage
