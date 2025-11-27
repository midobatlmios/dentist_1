import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

// Mock user database (in production, use real DB)
const mockUsers: Record<string, any> = {
  "patient@dentacare.fr": {
    id: "1",
    email: "patient@dentacare.fr",
    password: Buffer.from("patient123").toString("base64"),
    firstName: "Jean",
    lastName: "Dupont",
    role: "PATIENT",
  },
  "secretary@dentacare.fr": {
    id: "2",
    email: "secretary@dentacare.fr",
    password: Buffer.from("secretary123").toString("base64"),
    firstName: "Marie",
    lastName: "Martin",
    role: "SECRETARY",
  },
  "doctor@dentacare.fr": {
    id: "3",
    email: "doctor@dentacare.fr",
    password: Buffer.from("doctor123").toString("base64"),
    firstName: "Pierre",
    lastName: "Bernard",
    role: "DOCTOR",
  },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: "Email et mot de passe requis" }, { status: 400 })
    }

    const user = mockUsers[email]

    if (!user) {
      return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 })
    }

    const decodedPassword = Buffer.from(user.password, "base64").toString()
    if (decodedPassword !== password) {
      return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 })
    }

    // Create session token
    const token = Buffer.from(`${user.id}:${user.email}:${user.role}`).toString("base64")

    // Set cookie
    const cookieStore = await cookies()
    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return NextResponse.json(
      {
        message: "Connexion réussie",
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la connexion" }, { status: 500 })
  }
}
