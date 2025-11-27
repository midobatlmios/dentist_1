"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"

const services = [
  { id: 1, name: "Consultation Dentaire", duration: "30 min" },
  { id: 2, name: "Détartrage et Polissage", duration: "45 min" },
  { id: 3, name: "Traitement des Caries", duration: "60 min" },
  { id: 4, name: "Extraction Dentaire", duration: "45 min" },
  { id: 5, name: "Traitement de Canal", duration: "90 min" },
  { id: 6, name: "Blanchiment Dentaire", duration: "60 min" },
]

const doctors = [
  { id: 1, name: "Dr. Pierre Bernard" },
  { id: 2, name: "Dr. Sophie Leclerc" },
  { id: 3, name: "Dr. Marc Rousseau" },
]

export default function PatientAppointments() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    service: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  })

  const myAppointments = [
    {
      id: 1,
      service: "Consultation Dentaire",
      doctor: "Dr. Pierre Bernard",
      date: "2025-12-10",
      time: "14:00",
      status: "CONFIRMED",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Appointment request:", formData)
    alert("Demande de rendez-vous envoyée !")
    setFormData({ service: "", doctor: "", date: "", time: "", notes: "" })
    setShowForm(false)
  }

  return (
    <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Mes Rendez-vous</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Plus size={20} />
              Nouveau RDV
            </button>
          </div>

          {showForm && (
            <div className="bg-white rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-bold mb-6">Demander un Rendez-Vous</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="">Sélectionner un service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} ({service.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Médecin (optionnel)</label>
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="">Médecin au choix</option>
                      {doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>
                          {doctor.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Heure</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="">Sélectionner une heure</option>
                      {["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"].map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Notes (optionnel)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary resize-none"
                    placeholder="Décrivez vos symptômes ou raison de la consultation..."
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Demander le RDV
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-2 border-2 border-muted text-foreground rounded-lg hover:bg-neutral-50 transition"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="bg-white rounded-lg border border-muted p-6">
            <h2 className="text-2xl font-bold mb-4">Mes Rendez-vous</h2>
            <div className="space-y-4">
              {myAppointments.map((apt) => (
                <div key={apt.id} className="p-4 border border-muted rounded-lg hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{apt.service}</h3>
                      <p className="text-muted-foreground">Médecin: {apt.doctor}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Confirmé</span>
                  </div>
                  <p className="text-primary font-semibold mb-3">
                    {new Date(apt.date).toLocaleDateString("fr-FR")} à {apt.time}
                  </p>
                  <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded transition text-sm">
                    Annuler le RDV
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}
