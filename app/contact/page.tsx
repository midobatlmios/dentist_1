"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Nous Contacter</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Vous avez des questions ? Nous sommes ici pour vous aider et vous offrir le meilleur accueil
            </p>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-12">Nos Coordonnées</h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="group flex gap-6 p-6 rounded-2xl bg-white border border-neutral-200 hover:border-primary hover:shadow-lg transition">
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl group-hover:from-primary group-hover:to-blue-600 transition">
                      <MapPin className="text-primary group-hover:text-white transition" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Adresse</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        123 Rue de la Santé
                        <br />
                        75000 Paris, France
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group flex gap-6 p-6 rounded-2xl bg-white border border-neutral-200 hover:border-accent hover:shadow-lg transition">
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-xl group-hover:from-accent group-hover:to-green-600 transition">
                      <Phone className="text-accent group-hover:text-white transition" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Téléphone</h3>
                      <div className="space-y-1">
                        <a
                          href="tel:+33123456789"
                          className="text-muted-foreground hover:text-primary transition block"
                        >
                          +33 1 23 45 67 89
                        </a>
                        <a
                          href="tel:+33198765432"
                          className="text-muted-foreground hover:text-primary transition block"
                        >
                          +33 1 98 76 54 32
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex gap-6 p-6 rounded-2xl bg-white border border-neutral-200 hover:border-pink-500 hover:shadow-lg transition">
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl group-hover:from-pink-500 group-hover:to-pink-600 transition">
                      <Mail className="text-pink-500 group-hover:text-white transition" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <div className="space-y-1">
                        <a
                          href="mailto:info@dentacare.fr"
                          className="text-muted-foreground hover:text-primary transition block"
                        >
                          info@dentacare.fr
                        </a>
                        <a
                          href="mailto:urgence@dentacare.fr"
                          className="text-muted-foreground hover:text-primary transition block"
                        >
                          urgence@dentacare.fr
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="group flex gap-6 p-6 rounded-2xl bg-white border border-neutral-200 hover:border-purple-500 hover:shadow-lg transition">
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl group-hover:from-purple-500 group-hover:to-purple-600 transition">
                      <Clock className="text-purple-500 group-hover:text-white transition" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Horaires d'Ouverture</h3>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Lun - Ven :</span> 08h - 18h
                        <br />
                        <span className="font-semibold text-foreground">Sam :</span> 09h - 13h
                        <br />
                        <span className="font-semibold text-foreground">Dim :</span> Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-12">Envoyez-nous un Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center gap-3 animate-in fade-in">
                    <CheckCircle className="text-green-600" size={24} />
                    <p className="text-green-700 font-semibold">Merci ! Nous vous recontacterons bientôt.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-semibold mb-3 text-foreground">Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-10 transition"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-3 text-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-10 transition"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-3 text-foreground">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-10 transition"
                      placeholder="+33"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-3 text-foreground">Sujet</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-10 transition"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-3 text-foreground">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-10 transition resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary to-blue-700 text-white font-bold rounded-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Envoyer le Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Autres Moyens de Nous Joindre</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-4">Prendre un Rendez-Vous</h3>
                <p className="text-muted-foreground mb-6">Réservez directement en ligne en quelques clics</p>
                <Link
                  href="/appointment"
                  className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  Réserver
                </Link>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-4">Urgence Dentaire</h3>
                <p className="text-muted-foreground mb-6">Appelez-nous immédiatement pour une urgence</p>
                <a
                  href="tel:+33198765432"
                  className="inline-block px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-green-600 transition"
                >
                  Appeler
                </a>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-4">Visiter la Clinique</h3>
                <p className="text-muted-foreground mb-6">Venez nous rencontrer en personne</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition"
                >
                  Localiser
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
