import { cookies } from "next/headers"

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: "PATIENT" | "SECRETARY" | "DOCTOR"
}

export class NotAuthenticatedError extends Error {}

export class NotAuthorizedError extends Error {
  user?: User

  constructor(message?: string, user?: User) {
    super(message)
    this.user = user
  }
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")?.value

  if (!token) {
    return null
  }

  try {
    const decoded = Buffer.from(token, "base64").toString()
    const [userId, email, role] = decoded.split(":")

    // In production, verify token and fetch user from DB
    return {
      id: userId,
      email,
      role: role as "PATIENT" | "SECRETARY" | "DOCTOR",
      firstName: email.split("@")[0],
      lastName: "User",
    }
  } catch (error) {
    return null
  }
}

export async function requireAuth(requiredRole?: string) {
  const user = await getCurrentUser()

  if (!user) {
    throw new NotAuthenticatedError("Authentification requise")
  }

  if (requiredRole && user.role !== requiredRole) {
    // include the user in the error so callers can redirect to the correct dashboard
    throw new NotAuthorizedError("Accès non autorisé", user)
  }

  return user
}
