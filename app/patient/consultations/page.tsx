"use client"

import { useState } from "react"
import { Download, Eye, FileText } from "lucide-react"

interface Consultation {
  id: number
  date: string
  service: string
  doctor: string
  diagnosis: string
  treatment: string
  prescription: string
  notes: string
}

export default function PatientConsultations() {
  const [consultations] = useState<Consultation[]>([
    {
      id: 1,
      date: "2025-11-15",
      service: "Détartrage et Polissage",
      doctor: "Dr. Pierre Bernard",
      diagnosis: "Tartre modéré, plaque dentaire présente",
      treatment: "Nettoyage professionnel complet des surfaces dentaires",
      prescription: "Bain de bouche antiseptique quotidien, brossage 2 fois par jour",
      notes: "Suivi : Prochain rendez-vous dans 6 mois. Attention : caries détectées",
    },
    {
      id: 2,
      date: "2025-09-20",
      service: "Consultation Dentaire",
      doctor: "Dr. Sophie Leclerc",
      diagnosis: "Contrôle général satisfaisant",
      treatment: "Examen complet, pas d'intervention nécessaire",
      prescription: "Maintenir l'hygiène dentaire actuelle",
      notes: "Consultation annuelle de prévention",
    },
  ])

  const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null)

  const handleDownloadPDF = (consultation: Consultation) => {
    alert(`Téléchargement de l'ordonnance pour la consultation du ${consultation.date}`)
  }

  return (
    <div className="space-y-8">
          <h1 className="text-3xl font-bold">Mes Consultations</h1>

          {/* Consultations Grid */}
          <div className="bg-white rounded-lg border border-muted p-6">
            <div className="space-y-4">
              {consultations.length > 0 ? (
                consultations.map((consultation) => (
                  <div key={consultation.id} className="p-4 border border-muted rounded-lg hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{consultation.service}</h3>
                        <p className="text-muted-foreground text-sm">Médecin: {consultation.doctor}</p>
                        <p className="text-sm text-primary font-semibold mt-1">
                          {new Date(consultation.date).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <FileText className="text-primary" size={32} />
                    </div>

                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => setSelectedConsultation(consultation)}
                        className="flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 transition"
                      >
                        <Eye size={16} />
                        Voir Détails
                      </button>
                      <button
                        onClick={() => handleDownloadPDF(consultation)}
                        className="flex items-center gap-1 px-3 py-2 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200 transition"
                      >
                        <Download size={16} />
                        Télécharger Ordonnance
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-center py-8">Aucune consultation enregistrée</p>
              )}
            </div>
          </div>

          {/* Detail Modal */}
        {selectedConsultation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedConsultation.service}</h2>
                <button onClick={() => setSelectedConsultation(null)} className="text-muted-foreground hover:text-foreground">✕</button>
              </div>

              <p className="text-sm text-primary font-semibold mb-4">
                {new Date(selectedConsultation.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground font-semibold text-sm uppercase mb-2">Médecin</p>
                  <p className="text-foreground">{selectedConsultation.doctor}</p>
                </div>

                <div>
                  <p className="text-muted-foreground font-semibold text-sm uppercase mb-2">Diagnostic</p>
                  <p className="text-foreground">{selectedConsultation.diagnosis}</p>
                </div>

                <div>
                  <p className="text-muted-foreground font-semibold text-sm uppercase mb-2">Traitement Reçu</p>
                  <p className="text-foreground">{selectedConsultation.treatment}</p>
                </div>

                <div>
                  <p className="text-muted-foreground font-semibold text-sm uppercase mb-2">Recommandations & Prescription</p>
                  <p className="text-foreground">{selectedConsultation.prescription}</p>
                </div>

                {selectedConsultation.notes && (
                  <div>
                    <p className="text-muted-foreground font-semibold text-sm uppercase mb-2">Notes Importantes</p>
                    <p className="text-foreground">{selectedConsultation.notes}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-2 mt-8">
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
