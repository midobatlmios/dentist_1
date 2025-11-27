import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Smile, Clock, Award, ArrowRight, Heart, Shield } from "lucide-react"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Enhanced */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-primary-dark text-white py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="container-custom text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Votre Sourire est Notre Priorité</h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Découvrez une clinique dentaire moderne où l'excellence des soins rencontre l'accueil bienveillant pour
              transformer votre sourire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
              >
                Découvrir Nos Services <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une clinique qui place votre bien-être et votre confiance au cœur de chaque traitement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="inline-flex p-4 bg-primary rounded-xl mb-4 group-hover:bg-primary-dark transition">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-3 text-primary">Expertise Reconnue</h3>
                <p className="text-muted-foreground">
                  20+ années d'expérience et formations continues dans le domaine dentaire
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="inline-flex p-4 bg-accent rounded-xl mb-4 group-hover:bg-green-600 transition">
                  <Clock className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-3 text-accent">Disponibilité</h3>
                <p className="text-muted-foreground">Rendez-vous rapides, horaires flexibles et accueil des urgences</p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="inline-flex p-4 bg-pink-600 rounded-xl mb-4 group-hover:bg-pink-700 transition">
                  <Smile className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-3 text-pink-600">Confort Optimal</h3>
                <p className="text-muted-foreground">
                  Environnement serein, équipements dernière génération et techniques douces
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="inline-flex p-4 bg-purple-600 rounded-xl mb-4 group-hover:bg-purple-700 transition">
                  <Heart className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-3 text-purple-600">Équipe Bienveillante</h3>
                <p className="text-muted-foreground">
                  Professionnels à l'écoute, attentifs à chaque patient et son bien-être
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview - Enhanced */}
        <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Nos Services Principaux</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez notre gamme complète de soins dentaires adaptés à tous vos besoins
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-primary hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="h-40 bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center group-hover:from-blue-600 group-hover:to-primary transition">
                  <span className="text-6xl">🦷</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-primary mb-3">Consultation Dentaire</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Examen général complet, diagnostic précis et plan de traitement personnalisé
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-neutral-200">
                    <span className="text-accent font-bold text-lg">À partir de 50€</span>
                    <Link
                      href="/services"
                      className="text-primary hover:text-blue-700 font-semibold flex items-center gap-2"
                    >
                      Détails <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-accent hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="h-40 bg-gradient-to-br from-accent to-green-600 flex items-center justify-center group-hover:from-green-600 group-hover:to-accent transition">
                  <span className="text-6xl">✨</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-accent mb-3">Détartrage & Polissage</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Nettoyage professionnel pour enlever le tartre, la plaque et retrouver la blancheur
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-neutral-200">
                    <span className="text-accent font-bold text-lg">À partir de 80€</span>
                    <Link
                      href="/services"
                      className="text-accent hover:text-green-700 font-semibold flex items-center gap-2"
                    >
                      Détails <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-purple-500 hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:from-pink-600 group-hover:to-purple-500 transition">
                  <span className="text-6xl">💎</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-purple-600 mb-3">Implants Dentaires</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Pose de racines artificielles pour un sourire complet, naturel et durable
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-neutral-200">
                    <span className="text-purple-600 font-bold text-lg">Devis personnalisé</span>
                    <Link
                      href="/services"
                      className="text-purple-600 hover:text-purple-800 font-semibold flex items-center gap-2"
                    >
                      Détails <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition transform hover:scale-105"
              >
                Voir Tous les Services <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">1000+</div>
                <p className="text-blue-100">Patients Satisfaits</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">20+</div>
                <p className="text-blue-100">Années d'Expérience</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">99%</div>
                <p className="text-blue-100">Taux de Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-accent-light via-white to-green-50">
          <div className="container-custom text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-accent rounded-full mb-6">
              <Shield size={16} />
              <span className="text-sm font-semibold">Votre santé bucco-dentaire nous tient à cœur</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Prenez Rendez-Vous Dès Aujourd'hui</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Nos équipes qualifiées et bienveillantes vous accueillent pour vous offrir les meilleurs soins dentaires
              dans un environnement moderne et rassurant
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-primary to-blue-700 text-white font-bold rounded-lg hover:shadow-xl transition transform hover:scale-105"
            >
              Réserver un Rendez-Vous <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
