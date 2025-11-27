"use client"

// Dashboard wrapper provided by app/secretary/layout.tsx
import { Calendar, Users, MessageSquare, CheckCircle } from "lucide-react"

export default function SecretaryDashboard() {
  const stats = [
    { label: "Rendez-vous à confirmer", value: 3, icon: Calendar },
    { label: "Patients", value: 42, icon: Users },
    { label: "Messages", value: 7, icon: MessageSquare },
    { label: "RDV confirmés aujourd'hui", value: 8, icon: CheckCircle },
  ]

  const pendingAppointments = [
    {
      id: 1,
      patient: "Jean Dupont",
      service: "Consultation",
      date: "2025-12-10",
      time: "14:00",
      status: "EN_ATTENTE",
    },
    {
      id: 2,
      patient: "Marie Martin",
      service: "Détartrage",
      date: "2025-12-11",
      time: "10:30",
      status: "EN_ATTENTE",
    },
  ]

  return (
    <div className="space-y-8">
          {/* Welcome */}
          <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-2">Tableau de Bord Secrétariat</h1>
            <p className="text-blue-100">Gérez les rendez-vous et les patients</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg p-6 border border-muted">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold text-primary mt-2">{stat.value}</p>
                  </div>
                  <stat.icon className="text-primary" size={32} />
                </div>
              </div>
            ))}
          </div>

          {/* Pending Appointments */}
          <div className="bg-white rounded-lg border border-muted p-6">
            <h2 className="text-2xl font-bold mb-4">Rendez-vous en attente</h2>
            <div className="space-y-4">
              {pendingAppointments.map((apt) => (
                <div key={apt.id} className="p-4 border border-muted rounded-lg hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{apt.patient}</h3>
                      <p className="text-muted-foreground text-sm">{apt.service}</p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">En attente</span>
                  </div>
                  <p className="text-sm text-primary font-semibold">
                    {new Date(apt.date).toLocaleDateString("fr-FR")} à {apt.time}
                  </p>
                  <div className="flex gap-2 mt-3">
                    <button className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded hover:bg-green-200 transition">
                      Confirmer
                    </button>
                    <button className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded hover:bg-red-200 transition">
                      Annuler
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}
