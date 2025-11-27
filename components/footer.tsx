import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                DentaCare
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Votre partenaire de confiance pour la santé dentaire depuis 2015. Nous nous engageons à offrir des soins
                dentaires de qualité supérieure avec compassion et expertise.
              </p>
            </div>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 rounded-full bg-slate-700 hover:bg-primary transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-700 hover:bg-primary transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-700 hover:bg-primary transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-700 hover:bg-primary transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="font-semibold text-lg mb-5 text-white">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-accent">→</span> Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-accent">→</span> Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-accent">→</span> Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-gray-400 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-accent">→</span> Connexion
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours column */}
          <div>
            <h4 className="font-semibold text-lg mb-5 text-white">Horaires</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">
                <span className="font-medium text-white">Lun - Ven</span>
                <br />
                08h - 18h
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">Samedi</span>
                <br />
                09h - 13h
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">Dimanche</span>
                <br />
                Fermé
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-semibold text-lg mb-5 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="p-2 rounded-lg bg-slate-700 group-hover:bg-primary transition-colors duration-300 mt-1">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Téléphone</p>
                  <p className="text-white font-medium">+33 1 23 45 67 89</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="p-2 rounded-lg bg-slate-700 group-hover:bg-primary transition-colors duration-300 mt-1">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Email</p>
                  <p className="text-white font-medium">info@dentacare.fr</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="p-2 rounded-lg bg-slate-700 group-hover:bg-primary transition-colors duration-300 mt-1">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Adresse</p>
                  <p className="text-white font-medium">
                    123 Rue de la Santé
                    <br />
                    75000 Paris
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">&copy; 2025 DentaCare. Tous droits réservés.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-accent transition-colors duration-300">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-accent transition-colors duration-300">
              Conditions d'utilisation
            </Link>
            <Link href="#" className="hover:text-accent transition-colors duration-300">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
