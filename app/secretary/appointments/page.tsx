"use client"

// app/secretary/layout.tsx wraps children with DashboardLayout
import { useState } from "react"
import { Filter } from "lucide-react"

export default function SecretaryAppointments() {
  const [filterStatus, setFilterStatus] = useState("all")

  const appointments = [
    {
      id: 1,
      patient: "Jean Dupont",
      service: "Consultation",
      date: "2025-12-10",
      time: "14:00",
      doctor: "Dr. Pierre Bernard",
      status: "EN_ATTENTE",
    },
    {
      id: 2,
      patient: "Marie Martin",
      service: "Détartrage",
      date: "2025-12-11",
      time: "10:30",
      doctor: "Dr. Sophie Leclerc",
      status: "EN_ATTENTE",
    },
    {
      id: 3,
      patient: "Pierre Lefebvre",
      service: "Traitement carie",
      date: "2025-12-09",
      time: "15:00",
      doctor: "Dr. Pierre Bernard",
      status: "CONFIRMED",
    },
  ]

  const filteredAppointments =
    filterStatus === "all" ? appointments : appointments.filter((apt) => apt.status === filterStatus)

  const handleConfirm = (id: number) => {
    alert(`Rendez-vous ${id} confirmé`)
  }

  const handleCancel = (id: number) => {
    alert(`Rendez-vous ${id} annulé`)
  }

  return (
    <div className="space-y-8">
          <h1 className="text-3xl font-bold">Gestion des Rendez-vous</h1>

          {/* Filter */}
          <div className="flex items-center gap-2">
            <Filter size={20} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary"
            >
              <option value="all">Tous les rendez-vous</option>
              <option value="EN_ATTENTE">En attente</option>
              <option value="CONFIRMED">Confirmés</option>
            </select>
          </div>

          {/* Appointments */}
          <div className="bg-white rounded-lg border border-muted p-6">
            <div className="space-y-4">
              {filteredAppointments.map((apt) => (
                <div key={apt.id} className="p-4 border border-muted rounded-lg hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{apt.patient}</h3>
                      <p className="text-muted-foreground text-sm">{apt.service}</p>
                      <p className="text-muted-foreground text-sm">Médecin: {apt.doctor}</p>
                    </div>
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        apt.status === "CONFIRMED" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {apt.status === "CONFIRMED" ? "Confirmé" : "En attente"}
                    </span>
                  </div>
                  <p className="text-primary font-semibold mb-3">
                    {new Date(apt.date).toLocaleDateString("fr-FR")} à {apt.time}
                  </p>
                  {apt.status === "EN_ATTENTE" && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleConfirm(apt.id)}
                        className="px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 transition text-sm"
                      >
                        Confirmer
                      </button>
                      <button
                        onClick={() => handleCancel(apt.id)}
                        className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition text-sm"
                      >
                        Annuler
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}
