"use client"

import type React from "react"

// Dashboard wrapper provided by app/doctor/layout.tsx
import { useState } from "react"
import { Plus, Download, Eye } from "lucide-react"

interface Consultation {
  id: number
  patient: string
  date: string
  service: string
  diagnosis: string
  treatment: string
  prescription: string
  notes: string
  amount: number
  status: "DRAFT" | "COMPLETED"
}

export default function DoctorConsultations() {
  const [consultations, setConsultations] = useState<Consultation[]>([
    {
      id: 1,
      patient: "Jean Dupont",
      date: "2025-11-15",
      service: "Détartrage",
      diagnosis: "Tartre modéré",
      treatment: "Nettoyage complet",
      prescription: "Bain de bouche quotidien",
      notes: "Suivi de caries détectées",
      amount: 80,
      status: "COMPLETED",
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null)
  const [formData, setFormData] = useState({
    patient: "",
    service: "",
    diagnosis: "",
    treatment: "",
    prescription: "",
    notes: "",
    amount: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newConsultation: Consultation = {
      id: consultations.length + 1,
      patient: formData.patient,
      date: new Date().toISOString().split("T")[0],
      service: formData.service,
      diagnosis: formData.diagnosis,
      treatment: formData.treatment,
      prescription: formData.prescription,
      notes: formData.notes,
      amount: Number.parseFloat(formData.amount),
      status: "COMPLETED",
    }
    setConsultations([...consultations, newConsultation])
    setFormData({
      patient: "",
      service: "",
      diagnosis: "",
      treatment: "",
      prescription: "",
      notes: "",
      amount: "",
    })
    setShowForm(false)
    alert("Consultation créée avec succès !")
  }

  const handleDownloadPDF = (consultation: Consultation) => {
    alert(`PDF d'ordonnance pour ${consultation.patient} - À implémenter`)
  }

  return (
    <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Dossiers de Consultation</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Plus size={20} />
              Nouvelle Consultation
            </button>
          </div>

          {showForm && (
            <div className="bg-white rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-bold mb-6">Créer un Dossier de Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">Nom du patient</label>
                    <input
                      type="text"
                      name="patient"
                      value={formData.patient}
                      onChange={handleChange}
                      required
                      placeholder="Nom du patient"
                      className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="">Sélectionner</option>
                      <option value="Consultation">Consultation Dentaire</option>
                      <option value="Détartrage">Détartrage et Polissage</option>
                      <option value="Carie">Traitement des Caries</option>
                      <option value="Extraction">Extraction Dentaire</option>
                      <option value="Canal">Traitement de Canal</option>
                      <option value="Blanchiment">Blanchiment Dentaire</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Diagnostic</label>
                  <textarea
                    name="diagnosis"
                    value={formData.diagnosis}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Diagnostic et observations cliniques"
                    className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Traitement Effectué</label>
                  <textarea
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Description du traitement"
                    className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Prescription</label>
                  <textarea
                    name="prescription"
                    value={formData.prescription}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Médicaments et recommandations"
                    className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Notes Additionnelles</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Prochain rendez-vous, suivi nécessaire, etc."
                    className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Montant (€)</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    step="0.01"
                    required
                    placeholder="0.00"
                    className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Enregistrer la Consultation
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

          {/* Consultations List */}
          <div className="bg-white rounded-lg border border-muted p-6">
            <h2 className="text-2xl font-bold mb-4">Dossiers</h2>
            <div className="space-y-4">
              {consultations.map((consultation) => (
                <div key={consultation.id} className="p-4 border border-muted rounded-lg hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{consultation.patient}</h3>
                      <p className="text-muted-foreground text-sm">{consultation.service}</p>
                      <p className="text-sm text-primary mt-1">
                        {new Date(consultation.date).toLocaleDateString("fr-FR")} - {consultation.amount}€
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Complétée</span>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => setSelectedConsultation(consultation)}
                      className="flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 transition"
                    >
                      <Eye size={16} />
                      Voir
                    </button>
                    <button
                      onClick={() => handleDownloadPDF(consultation)}
                      className="flex items-center gap-1 px-3 py-2 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200 transition"
                    >
                      <Download size={16} />
                      Ordonnance PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        {/* Detail Modal */}
        {selectedConsultation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedConsultation.patient}</h2>
                <button onClick={() => setSelectedConsultation(null)} className="text-muted-foreground hover:text-foreground">✕</button>
              </div>

              <p className="text-sm text-primary font-semibold mb-4">
                {new Date(selectedConsultation.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {"  "}- {selectedConsultation.amount}€
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground font-semibold">Service</p>
                  <p className="text-foreground">{selectedConsultation.service}</p>
                </div>

                <div>
                  <p className="text-muted-foreground font-semibold">Diagnostic</p>
                  <p className="text-foreground">{selectedConsultation.diagnosis}</p>
                </div>

                <div>
                  <p className="text-muted-foreground font-semibold">Traitement</p>
                  <p className="text-foreground">{selectedConsultation.treatment}</p>
                </div>

                <div>
                  <p className="text-muted-foreground font-semibold">Prescription</p>
                  <p className="text-foreground">{selectedConsultation.prescription}</p>
                </div>

                {selectedConsultation.notes && (
                  <div>
                    <p className="text-muted-foreground font-semibold">Notes</p>
                    <p className="text-foreground">{selectedConsultation.notes}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => handleDownloadPDF(selectedConsultation)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-semibold"
                >
                  <Download size={18} />
                  Télécharger Ordonnance PDF
                </button>
                <button
                  onClick={() => setSelectedConsultation(null)}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}
