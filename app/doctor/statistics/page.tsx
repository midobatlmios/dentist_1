"use client"

// Dashboard provided by app/doctor/layout.tsx
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Download, TrendingUp } from "lucide-react"

export default function DoctorStatistics() {
  // Revenue data
  const revenueData = [
    { month: "Jan", revenue: 2400, consultations: 12 },
    { month: "Feb", revenue: 2210, consultations: 11 },
    { month: "Mar", revenue: 2290, consultations: 13 },
    { month: "Apr", revenue: 2000, consultations: 10 },
    { month: "May", revenue: 2181, consultations: 11 },
    { month: "Jun", revenue: 2500, consultations: 14 },
    { month: "Jul", revenue: 3100, consultations: 16 },
  ]

  // Service distribution
  const serviceData = [
    { name: "Consultation", value: 25, color: "#0066cc" },
    { name: "Détartrage", value: 20, color: "#00d084" },
    { name: "Traitement carie", value: 18, color: "#fbbf24" },
    { name: "Extraction", value: 15, color: "#f87171" },
    { name: "Traitement canal", value: 12, color: "#8b5cf6" },
    { name: "Autres", value: 10, color: "#6b7280" },
  ]

  // Key metrics
  const metrics = [
    { label: "Consultations ce mois", value: "42", trend: "+12%" },
    { label: "Revenu ce mois", value: "3 100€", trend: "+8%" },
    { label: "Nouveaux patients", value: "8", trend: "+25%" },
    { label: "Taux de remplissage", value: "78%", trend: "+5%" },
  ]

  const handleExport = () => {
    alert("Export PDF des statistiques en cours...")
  }

  return (
    <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Archives et Statistiques</h1>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Download size={20} />
              Exporter PDF
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-white rounded-lg p-6 border border-muted">
                <p className="text-muted-foreground text-sm mb-2">{metric.label}</p>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-primary">{metric.value}</p>
                  <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                    <TrendingUp size={16} />
                    {metric.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Revenue Chart */}
          <div className="bg-white rounded-lg border border-muted p-6">
            <h2 className="text-2xl font-bold mb-4">Revenu et Consultations (7 derniers mois)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="revenue" fill="#0066cc" name="Revenu (€)" />
                <Bar yAxisId="right" dataKey="consultations" fill="#00d084" name="Consultations" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Service Distribution */}
            <div className="bg-white rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-bold mb-4">Distribution par Service</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={serviceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {serviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Top Services */}
            <div className="bg-white rounded-lg border border-muted p-6">
              <h2 className="text-2xl font-bold mb-4">Services les Plus Demandés</h2>
              <div className="space-y-4">
                {serviceData.map((service) => (
                  <div key={service.name}>
                    <div className="flex justify-between mb-1">
                      <p className="font-semibold">{service.name}</p>
                      <p className="text-primary font-bold">{service.value}%</p>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${service.value * 2}%`, backgroundColor: service.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Consultation Trend */}
          <div className="bg-white rounded-lg border border-muted p-6">
            <h2 className="text-2xl font-bold mb-4">Tendance des Consultations</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="consultations"
                  stroke="#0066cc"
                  name="Nombre de consultations"
                  strokeWidth={2}
                  dot={{ fill: "#0066cc", r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Detailed Report Table */}
          <div className="bg-white rounded-lg border border-muted p-6">
            <h2 className="text-2xl font-bold mb-4">Résumé Mensuel</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-muted">
                    <th className="text-left py-3 px-4 font-semibold">Mois</th>
                    <th className="text-center py-3 px-4 font-semibold">Consultations</th>
                    <th className="text-center py-3 px-4 font-semibold">Revenu</th>
                    <th className="text-center py-3 px-4 font-semibold">Revenu Moyen</th>
                    <th className="text-center py-3 px-4 font-semibold">Nouveaux Patients</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueData.map((row, idx) => (
                    <tr key={idx} className="border-b border-muted hover:bg-neutral-50">
                      <td className="py-3 px-4 font-semibold">{row.month}</td>
                      <td className="py-3 px-4 text-center">{row.consultations}</td>
                      <td className="py-3 px-4 text-center text-primary font-bold">{row.revenue}€</td>
                      <td className="py-3 px-4 text-center">{Math.round(row.revenue / row.consultations)}€</td>
                      {/* Use deterministic value based on row index to avoid SSR/CSR mismatch */}
                      <td className="py-3 px-4 text-center">{(idx % 5) + 1}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  )
}
