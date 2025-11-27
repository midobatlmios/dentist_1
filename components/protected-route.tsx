"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function ProtectedRoute({ children, requiredRole }: { children: React.ReactNode; requiredRole?: string }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    // Verify session by calling server endpoint which reads HttpOnly cookie
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me", { method: "GET", credentials: "same-origin" })

        if (!res.ok) {
          router.push("/login")
          return
        }

        const data = await res.json()
        const user = data?.user

        if (!user) {
          router.push("/login")
          return
        }

        // If a requiredRole is provided, make sure the user has access
        if (requiredRole && user.role !== requiredRole) {
          // Optionally redirect to their dashboard or login
          router.push("/login")
          return
        }

        setIsAuthorized(true)
      } catch (error) {
        router.push("/login")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Chargement...</p>
        </div>
      </div>
    )
  }

  if (!isAuthorized) {
    return null
  }

  return <>{children}</>
}
