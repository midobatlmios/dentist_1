"use client"

// app/secretary/layout.tsx provides the dashboard wrapper and auth
import { useState } from "react"
import { Plus, Search } from "lucide-react"

interface Patient {
  id: number
  name: string
  email: string
  phone: string
  registeredDate: string
  totalAppointments: number
}

export default function SecretaryPatients() {
  const [patients] = useState<Patient[]>([
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean@example.com",
      phone: "+33 1 23 45 67 89",
      registeredDate: "2024-06-15",
      totalAppointments: 8,
    },
    {
      id: 2,
      name: "Marie Martin",
      email: "marie@example.com",
      phone: "+33 1 98 76 54 32",
      registeredDate: "2024-08-20",
      totalAppointments: 5,
    },
    {
      id: 3,
      name: "Sophie Bernard",
      email: "sophie@example.com",
      phone: "+33 1 55 44 33 22",
      registeredDate: "2024-10-10",
      totalAppointments: 3,
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)

  const filteredPatients = patients.filter((patient) => patient.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Gestion des Patients</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
              <Plus size={20} />
              Ajouter Patient
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Rechercher par nom..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          {/* Patients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPatients.map((patient) => (
              <div key={patient.id} className="bg-white rounded-lg border border-muted p-6 hover:shadow-md transition">
                <h3 className="font-bold text-lg mb-2">{patient.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">{patient.email}</p>
                  <p className="text-sm text-muted-foreground">{patient.phone}</p>
                  <p className="text-sm text-primary font-semibold">{patient.totalAppointments} rendez-vous</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedPatient(patient)}
                    className="flex-1 px-2 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
                  >
                    Voir
                  </button>
                  <button className="flex-1 px-2 py-1 text-sm bg-primary text-white rounded hover:bg-blue-700 transition">
                    Modifier
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Patient Detail Modal */}
          {selectedPatient && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6">{selectedPatient.name}</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-muted-foreground font-semibold text-sm">Email</p>
                    <p className="text-foreground">{selectedPatient.email}</p>
                  </div>

                  <div>
                    <p className="text-muted-foreground font-semibold text-sm">Téléphone</p>
                    <p className="text-foreground">{selectedPatient.phone}</p>
                  </div>

                  <div>
                    <p className="text-muted-foreground font-semibold text-sm">Date d\'inscription</p>
                    <p className="text-foreground">
                      {new Date(selectedPatient.registeredDate).toLocaleDateString("fr-FR")}
                    </p>
                  </div>

                  <div>
                    <p className="text-muted-foreground font-semibold text-sm">Total Rendez-vous</p>
                    <p className="text-3xl font-bold text-primary">{selectedPatient.totalAppointments}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPatient(null)}
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>
  )
}
