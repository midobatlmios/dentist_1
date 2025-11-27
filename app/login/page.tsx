"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Erreur lors de la connexion")
        return
      }

      // Redirect based on role
      const role = data.user.role
      if (role === "PATIENT") {
        router.push("/patient/dashboard")
      } else if (role === "SECRETARY") {
        router.push("/secretary/dashboard")
      } else if (role === "DOCTOR") {
        router.push("/doctor/dashboard")
      }
    } catch (err) {
      setError("Une erreur est survenue")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-neutral-50 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-primary">Connexion</h1>

            {error && <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Mot de passe</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:border-primary"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
              >
                {loading ? "Connexion en cours..." : "Se Connecter"}
              </button>
            </form>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold mb-2">Comptes de Démonstration :</h3>
              <p className="text-sm mb-2">
                <strong>Patient :</strong> patient@dentacare.fr / patient123
              </p>
              <p className="text-sm mb-2">
                <strong>Secrétaire :</strong> secretary@dentacare.fr / secretary123
              </p>
              <p className="text-sm">
                <strong>Médecin :</strong> doctor@dentacare.fr / doctor123
              </p>
            </div>

            <p className="mt-4 text-center text-muted-foreground">
              Pas encore de compte ?{" "}
              <a href="/register" className="text-primary hover:underline font-semibold">
                S'inscrire ici
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
