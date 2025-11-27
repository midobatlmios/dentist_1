"use client"
import { Calendar, FileText, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function PatientDashboard() {
  const upcomingAppointments = [
    {
      id: 1,
      date: "2025-12-10",
      time: "14:00",
      service: "Consultation Dentaire",
      doctor: "Dr. Pierre Bernard",
      status: "CONFIRMED",
    },
  ]

  const recentConsultations = [
    {
      id: 1,
      date: "2025-11-15",
      service: "Détartrage",
      doctor: "Dr. Pierre Bernard",
    },
  ]

  return (
    <div className="space-y-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-2">Bienvenue, Jean</h1>
            <p className="text-blue-100">Gérez vos rendez-vous et consultations en un seul endroit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stats */}
            <div className="bg-white rounded-lg p-6 border border-muted">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Rendez-vous à venir</p>
                  <p className="text-3xl font-bold text-primary">1</p>
                </div>
                <Calendar className="text-primary" size={32} />
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-muted">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Consultations</p>
                  <p className="text-3xl font-bold text-accent">5</p>
                </div>
                <FileText className="text-accent" size={32} />
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-muted">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Dernière visite</p>
                  <p className="text-lg font-semibold">15 Nov 2025</p>
                </div>
                <AlertCircle className="text-blue-500" size={32} />
              </div>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-lg border border-muted p-6">
            <h2 className="text-2xl font-bold mb-4">Rendez-vous à venir</h2>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((apt) => (
                  <div key={apt.id} className="p-4 border border-muted rounded-lg hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{apt.service}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Confirmé</span>
                    </div>
                    <p className="text-muted-foreground mb-1">Médecin: {apt.doctor}</p>
                    <p className="text-primary font-semibold">
                      {new Date(apt.date).toLocaleDateString("fr-FR")} à {apt.time}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">Aucun rendez-vous à venir</p>
            )}
            <Link
              href="/patient/appointments"
              className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
            >
              Voir tous les rendez-vous
            </Link>
          </div>

          {/* Recent Consultations */}
          <div className="bg-white rounded-lg border border-muted p-6">
            <h2 className="text-2xl font-bold mb-4">Consultations récentes</h2>
            {recentConsultations.length > 0 ? (
              <div className="space-y-4">
                {recentConsultations.map((cons) => (
                  <div key={cons.id} className="p-4 border border-muted rounded-lg hover:shadow-md transition">
                    <h3 className="font-semibold">{cons.service}</h3>
                    <p className="text-muted-foreground text-sm mb-2">Médecin: {cons.doctor}</p>
                    <p className="text-sm text-primary">{new Date(cons.date).toLocaleDateString("fr-FR")}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">Aucune consultation</p>
            )}
          </div>

          {/* CTA */}
          <div className="bg-accent-light rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Besoin d'un rendez-vous ?</h3>
            <Link
              href="/patient/appointments"
              className="inline-block px-6 py-2 bg-accent text-dark font-semibold rounded-lg hover:bg-green-500 transition"
            >
              Prendre un Rendez-Vous
            </Link>
          </div>
        </div>
  )
}
