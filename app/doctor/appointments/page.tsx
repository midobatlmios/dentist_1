"use client"

// wrapped by role layout -> DashboardLayout provided at app/doctor/layout.tsx
import { Calendar, Clock, User, MapPin } from "lucide-react"

export default function DoctorAppointments() {
  const appointments = [
    {
      id: 1,
      patient: "Jean Dupont",
      service: "Consultation Générale",
      date: "2025-12-10",
      time: "10:00",
      status: "CONFIRMED",
      phone: "+33 1 23 45 67 89",
    },
    {
      id: 2,
      patient: "Marie Martin",
      service: "Détartrage",
      date: "2025-12-10",
      time: "11:00",
      status: "CONFIRMED",
      phone: "+33 1 98 76 54 32",
    },
    {
      id: 3,
      patient: "Pierre Lefebvre",
      service: "Traitement Carie",
      date: "2025-12-10",
      time: "14:00",
      status: "CONFIRMED",
      phone: "+33 7 12 34 56 78",
    },
    {
      id: 4,
      patient: "Sophie Bernard",
      service: "Implant Dentaire",
      date: "2025-12-11",
      time: "09:30",
      status: "EN_ATTENTE",
      phone: "+33 6 87 65 43 21",
    },
    {
      id: 5,
      patient: "Luc Devereaux",
      service: "Nettoyage",
      date: "2025-12-11",
      time: "15:00",
      status: "CONFIRMED",
      phone: "+33 1 55 44 33 22",
    },
  ]

  const confirmedCount = appointments.filter((a) => a.status === "CONFIRMED").length
  const pendingCount = appointments.filter((a) => a.status === "EN_ATTENTE").length

  const getStatusColor = (status: string) => {
    if (status === "CONFIRMED") return "bg-green-100 text-green-700"
    if (status === "EN_ATTENTE") return "bg-yellow-100 text-yellow-700"
    return "bg-gray-100 text-gray-700"
  }

  const getStatusLabel = (status: string) => {
    if (status === "CONFIRMED") return "Confirmé"
    if (status === "EN_ATTENTE") return "En attente"
    return "Annulé"
  }

  return (
    <div className="space-y-8">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-2">Mes Rendez-vous</h1>
            <p className="text-blue-100">Gérez tous vos rendez-vous avec les patients</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 border border-muted">
              <p className="text-muted-foreground text-sm mb-2">Total Rendez-vous</p>
              <p className="text-3xl font-bold text-primary">{appointments.length}</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-muted">
              <p className="text-muted-foreground text-sm mb-2">Confirmés</p>
              <p className="text-3xl font-bold text-green-600">{confirmedCount}</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-muted">
              <p className="text-muted-foreground text-sm mb-2">En attente</p>
              <p className="text-3xl font-bold text-yellow-600">{pendingCount}</p>
            </div>
          </div>

          {/* Appointments List */}
          <div className="bg-white rounded-lg border border-muted p-6">
            <h2 className="text-2xl font-bold mb-6">Liste des Rendez-vous</h2>

            <div className="space-y-4">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="p-6 border border-muted rounded-lg hover:shadow-lg transition hover:border-primary"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left Section */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <User className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">{apt.patient}</h3>
                          <p className="text-muted-foreground text-sm">{apt.service}</p>
                        </div>
                      </div>
                    </div>

                    {/* Middle Section */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={18} className="text-primary" />
                        <span className="font-semibold">
                          {new Date(apt.date).toLocaleDateString("fr-FR", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock size={18} className="text-accent" />
                        <span className="font-semibold">{apt.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={18} className="text-pink-600" />
                        <a href={`tel:${apt.phone}`} className="font-semibold hover:text-primary transition">
                          {apt.phone}
                        </a>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-3">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(apt.status)}`}>
                        {getStatusLabel(apt.status)}
                      </span>
                      <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold">
                        Détails
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}
