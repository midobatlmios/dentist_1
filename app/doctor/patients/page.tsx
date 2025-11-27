"use client"

// Wrapped by app/doctor/layout.tsx – dashboard layout provided there
import { useState } from "react"
import { Edit2, Trash2, Eye, Plus, Search } from "lucide-react"

interface Patient {
  id: number
  name: string
  email: string
  phone: string
  lastVisit: string
  consultations: number
  status: "active" | "inactive"
}

export default function DoctorPatients() {
  const [patients] = useState<Patient[]>([
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean@example.com",
      phone: "+33 1 23 45 67 89",
      lastVisit: "2025-11-15",
      consultations: 5,
      status: "active",
    },
    {
      id: 2,
      name: "Marie Martin",
      email: "marie@example.com",
      phone: "+33 1 98 76 54 32",
      lastVisit: "2025-10-20",
      consultations: 3,
      status: "active",
    },
    {
      id: 3,
      name: "Pierre Lefebvre",
      email: "pierre@example.com",
      phone: "+33 1 55 44 33 22",
      lastVisit: "2025-08-10",
      consultations: 2,
      status: "inactive",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
              placeholder="Rechercher par nom ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          {/* Patients Table */}
          <div className="bg-white rounded-lg border border-muted overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 border-b border-muted">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold">Nom</th>
                    <th className="text-left py-3 px-4 font-semibold">Email</th>
                    <th className="text-left py-3 px-4 font-semibold">Téléphone</th>
                    <th className="text-center py-3 px-4 font-semibold">Consultations</th>
                    <th className="text-center py-3 px-4 font-semibold">Dernière Visite</th>
                    <th className="text-center py-3 px-4 font-semibold">Statut</th>
                    <th className="text-center py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.map((patient) => (
                    <tr key={patient.id} className="border-b border-muted hover:bg-neutral-50">
                      <td className="py-3 px-4 font-semibold">{patient.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{patient.email}</td>
                      <td className="py-3 px-4 text-muted-foreground">{patient.phone}</td>
                      <td className="py-3 px-4 text-center">{patient.consultations}</td>
                      <td className="py-3 px-4 text-center text-sm">
                        {new Date(patient.lastVisit).toLocaleDateString("fr-FR")}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            patient.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {patient.status === "active" ? "Actif" : "Inactif"}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => setSelectedPatient(patient)}
                            className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                            title="Voir détails"
                          >
                            <Eye size={18} />
                          </button>
                          <button className="p-1 text-primary hover:bg-primary-light rounded" title="Modifier">
                            <Edit2 size={18} />
                          </button>
                          <button className="p-1 text-red-600 hover:bg-red-50 rounded" title="Supprimer">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Patient Detail Modal */}
          {selectedPatient && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
                <h2 className="text-2xl font-bold mb-6">{selectedPatient.name}</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-muted-foreground font-semibold">Email</p>
                    <p className="text-foreground">{selectedPatient.email}</p>
                  </div>

                  <div>
                    <p className="text-muted-foreground font-semibold">Téléphone</p>
                    <p className="text-foreground">{selectedPatient.phone}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted-foreground font-semibold">Consultations</p>
                      <p className="text-3xl font-bold text-primary">{selectedPatient.consultations}</p>
                    </div>

                    <div>
                      <p className="text-muted-foreground font-semibold">Dernière Visite</p>
                      <p className="text-foreground">
                        {new Date(selectedPatient.lastVisit).toLocaleDateString("fr-FR")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
                    Modifier Patient
                  </button>
                  <button
                    onClick={() => setSelectedPatient(null)}
                    className="flex-1 px-4 py-2 border-2 border-muted text-foreground rounded-lg hover:bg-neutral-50 transition"
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
