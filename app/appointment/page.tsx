"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Calendar, Clock, User, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "CONSULTATION",
    doctor: "ANY",
    date: "",
    time: "",
    notes: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "CONSULTATION",
        doctor: "ANY",
        date: "",
        time: "",
        notes: "",
      })
    }, 3000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Prendre un Rendez-Vous</h1>
            <p className="text-xl text-blue-100">Réservez facilement votre consultation dentaire en quelques clics</p>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16">
          <div className="container-custom max-w-2xl">
            {submitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h2 className="text-2xl font-bold text-green-600 mb-2">Demande Envoyée !</h2>
                <p className="text-green-700">
                  Nous avons reçu votre demande de rendez-vous. Nous vous appellerons bientôt pour confirmer.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-muted">
                {/* Personal Info Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                    <User size={24} /> Informations Personnelles
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2 text-foreground">Prénom</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2 text-foreground">Nom</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block font-semibold mb-2 text-foreground">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        placeholder="jean@example.com"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2 text-foreground flex items-center gap-1">
                        <Phone size={18} /> Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="mb-8 pb-8 border-b border-muted">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Service Demandé</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2 text-foreground">Type de Service</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                      >
                        <option value="CONSULTATION">Consultation Générale</option>
                        <option value="CLEANING">Détartrage & Polissage</option>
                        <option value="CAVITY">Traitement de Carie</option>
                        <option value="EXTRACTION">Extraction Dentaire</option>
                        <option value="ROOT_CANAL">Traitement de Dévitalisation</option>
                        <option value="CROWN">Couronnes Dentaires</option>
                        <option value="IMPLANT">Implants Dentaires</option>
                        <option value="GUM">Traitement Maladie des Gencives</option>
                        <option value="WHITENING">Blanchiment Dentaire</option>
                        <option value="ORTHODONTICS">Orthodontie</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold mb-2 text-foreground">Médecin Préféré</label>
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                      >
                        <option value="ANY">N'importe quel médecin</option>
                        <option value="DR_BERNARD">Dr. Pierre Bernard</option>
                        <option value="DR_MARTIN">Dr. Sophie Martin</option>
                        <option value="DR_DUBOIS">Dr. Luc Dubois</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                    <Calendar size={24} /> Date et Heure
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2 text-foreground">Date Préférée</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2 text-foreground flex items-center gap-1">
                        <Clock size={18} /> Heure Préférée
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-8">
                  <label className="block font-semibold mb-2 text-foreground">Notes Additionnelles</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
                    placeholder="Décrivez vos préoccupations ou besoins spécifiques..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary to-blue-700 text-white font-bold rounded-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Confirmer la Demande <ArrowRight size={20} />
                </button>

                <p className="text-center text-muted-foreground text-sm mt-4">
                  Votre demande sera traitée dans les 24 heures
                </p>
              </form>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-white border-t border-muted">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Comment Fonctionne Notre Service ?</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Remplissez le formulaire</h3>
                <p className="text-muted-foreground">Entrez vos informations personnelles et vos préférences</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-dark text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Sélectionnez un créneau</h3>
                <p className="text-muted-foreground">Choisissez la date et l'heure qui vous conviennent</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Confirmation</h3>
                <p className="text-muted-foreground">Recevez une confirmation par email et téléphone</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-600 text-white text-2xl font-bold mb-4">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2">Venez nous voir !</h3>
                <p className="text-muted-foreground">Présentez-vous 10 minutes avant votre rendez-vous</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-blue-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Vous Préférez Nous Appeler ?</h2>
            <p className="text-xl text-blue-100 mb-8">Notre équipe est disponible pour répondre à vos questions</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="tel:+33123456789"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition"
              >
                <Phone size={20} className="mr-2" /> Appeler Maintenant
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
