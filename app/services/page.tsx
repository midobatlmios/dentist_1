import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Consultation Dentaire",
    description:
      "Examen général complet de la bouche, diagnostic précis et plan de traitement personnalisé adapté à vos besoins",
    price: "250 MAD",
    image: "/dental-consultation-examination.jpg",
  },
  {
    id: 2,
    title: "Détartrage et Polissage",
    description:
      "Nettoyage professionnel pour enlever le tartre, la plaque dentaire et retrouver la blancheur naturelle",
    price: "400 MAD",
    image: "/dental-cleaning-polishing.jpg",
  },
  {
    id: 3,
    title: "Traitement des Caries",
    description: "Soins pour réparer les dents abîmées par les caries avec des matériaux modernes et durables",
    price: "À partir de 600 MAD",
    image: "/dental-cavity-treatment.jpg",
  },
  {
    id: 4,
    title: "Extraction Dentaire",
    description: "Retrait sécurisé d'une dent trop endommagée, infectée ou problématique avec anesthésie appropriée",
    price: "À partir de 750 MAD",
    image: "/dental-extraction-surgery.jpg",
  },
  {
    id: 5,
    title: "Traitement de Canal",
    description: "Sauvegarde d'une dent infectée en traitant sa racine avec des techniques endodontiques modernes",
    price: "À partir de 1250 MAD",
    image: "/root-canal-treatment.jpg",
  },
  {
    id: 6,
    title: "Prothèses Dentaires",
    description: "Couronnes, bridges, dentiers pour remplacer les dents manquantes et retrouver un sourire complet",
    price: "Devis personnalisé",
    image: "/dental-prosthetics-crown.jpg",
  },
  {
    id: 7,
    title: "Implants Dentaires",
    description: "Pose de racines artificielles pour soutenir une dent de remplacement naturelle et durable",
    price: "Devis personnalisé",
    image: "/dental-implants.jpg",
  },
  {
    id: 8,
    title: "Soins des Gencives",
    description: "Traitement des maladies des gencives (gingivite, parodontite) pour prévenir les complications",
    price: "À partir de 500 MAD",
    image: "/gum-disease-treatment.jpg",
  },
  {
    id: 9,
    title: "Blanchiment Dentaire",
    description: "Éclaircissement professionnel de la teinte des dents pour un sourire plus blanc et radieux",
    price: "1000 MAD",
    image: "/teeth-whitening-bleaching.jpg",
  },
  {
    id: 10,
    title: "Urgences Dentaires",
    description: "Prise en charge rapide et efficace des douleurs, infections ou dents cassées à toute heure",
    price: "Tarif urgence",
    image: "/dental-emergency-treatment.jpg",
  },
]

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="container-custom text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Nos Services Dentaires</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services dentaires innovants et accessibles pour une santé
              bucco-dentaire optimale
            </p>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-primary hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden bg-neutral-200">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>

                    <div className="border-t border-neutral-200 pt-4 flex justify-between items-center">
                      <span className="font-bold text-lg text-primary">{service.price}</span>
                      <button className="inline-flex items-center justify-center w-10 h-10 bg-primary-light text-primary rounded-full hover:bg-primary hover:text-white transition group-hover/check">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Pourquoi Choisir DentaCare ?</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                      <Check size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Équipements Modernes</h3>
                      <p className="text-muted-foreground">
                        Technologie dernière génération pour des soins précis et confortables
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white">
                      <Check size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Équipe Qualifiée</h3>
                      <p className="text-muted-foreground">
                        Professionnels formés et expérimentés dans tous les domaines dentaires
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white">
                      <Check size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Environnement Apaisant</h3>
                      <p className="text-muted-foreground">
                        Atmosphère calme et bienveillante pour votre tranquillité d'esprit
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      <Check size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Tarifs Transparents</h3>
                      <p className="text-muted-foreground">Prix justes et devis détaillés avant chaque traitement</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/dental-clinic-modern-interior.jpg"
                  alt="Clinique dentaire moderne"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">Intéressé par l'un de Nos Services ?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Contactez-nous ou réservez un rendez-vous pour discuter de votre plan de traitement personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-neutral-100 transition transform hover:scale-105"
              >
                Nous Contacter <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition"
              >
                Réserver Maintenant <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
