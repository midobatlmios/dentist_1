"use client"

import { Calendar, Users, TrendingUp, Clock } from "lucide-react"

export default function DoctorDashboard() {
  const stats = [
    { label: "Consultations aujourd'hui", value: 4, icon: Calendar },
    { label: "Patients totaux", value: 156, icon: Users },
    { label: "Revenus ce mois", value: "3 850€", icon: TrendingUp },
    { label: "Temps moyen consultation", value: "28 min", icon: Clock },
  ]

  const todayAppointments = [
    {
      id: 1,
      patient: "Jean Dupont",
      time: "10:00",
      service: "Consultation",
      status: "CONFIRMED",
    },
    {
      id: 2,
      patient: "Marie Martin",
      time: "11:00",
      service: "Détartrage",
      status: "CONFIRMED",
    },
    {
      id: 3,
      patient: "Pierre Lefebvre",
      time: "14:00",
      service: "Traitement carie",
      status: "CONFIRMED",
    },
  ]

  return (
    <div className="space-y-8">
          {/* Welcome */}
          <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-2">Tableau de Bord Médecin</h1>
            <p className="text-blue-100">Gérez vos consultations et vos patients</p>
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

          {/* Today's Appointments */}
          <div className="bg-white rounded-lg border border-muted p-6">
            <h2 className="text-2xl font-bold mb-4">Rendez-vous d'aujourd'hui</h2>
            <div className="space-y-4">
              {todayAppointments.map((apt) => (
                <div key={apt.id} className="p-4 border border-muted rounded-lg hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{apt.patient}</h3>
                      <p className="text-muted-foreground text-sm">{apt.service}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-bold">{apt.time}</p>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full mt-1">
                        Confirmé
                      </span>
                    </div>
                  </div>
                  <button className="mt-3 px-4 py-2 bg-primary text-white text-sm rounded hover:bg-blue-700 transition">
                    Commencer la consultation
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}
