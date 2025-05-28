import { ArrowRight, Zap, CreditCard, Globe } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'

const HomePage = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Comparaison intelligente",
      description: "Notre IA analyse les produits selon vos critères spécifiques et vous propose les meilleures options adaptées à votre région."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Paiements locaux", 
      description: "Intégration complète avec Orange Money, M-Pesa, MTN Mobile Money et autres solutions de paiement africaines."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Couverture panafricaine",
      description: "54 pays couverts avec support multilingue en français, anglais, arabe, portugais, swahili et amharique."
    }
  ]

  const stats = [
    { value: "54", label: "Pays couverts" },
    { value: "10K+", label: "Produits référencés" },
    { value: "6", label: "Langues supportées" },
    { value: "500+", label: "Entreprises partenaires" }
  ]

  const sectors = [
    { name: "Technologie", count: "2,500+ produits", color: "bg-blue-500" },
    { name: "Santé", count: "1,200+ services", color: "bg-green-500" },
    { name: "Éducation", count: "800+ formations", color: "bg-purple-500" },
    { name: "Agriculture", count: "600+ solutions", color: "bg-yellow-500" },
    { name: "Finance", count: "400+ services", color: "bg-red-500" },
    { name: "Transport", count: "300+ options", color: "bg-indigo-500" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Section Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-b">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              🚀 Nouveau : Comparaison IA disponible
            </Badge>
            
            <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Comparez les produits en Afrique
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Trouvez les meilleurs produits et services adaptés à votre pays. 
              Comparez les prix, lisez les avis et prenez des décisions éclairées.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button size="lg" className="text-lg px-8">
                Commencer la comparaison
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Découvrir les secteurs
              </Button>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Pourquoi choisir AfricaHub ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Une plateforme conçue spécifiquement pour répondre aux besoins du marché africain
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Secteurs */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Explorez nos secteurs
            </h2>
            <p className="text-lg text-muted-foreground">
              Des milliers de produits et services dans tous les domaines
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${sector.color}`}></div>
                    <div>
                      <h3 className="font-semibold">{sector.name}</h3>
                      <p className="text-sm text-muted-foreground">{sector.count}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Voir tous les secteurs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à commencer ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Rejoignez des milliers d'utilisateurs qui font confiance à AfricaHub 
                pour leurs achats en Afrique.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Créer un compte gratuit
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Découvrir en mode invité
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default HomePage
