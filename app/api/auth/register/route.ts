import { type NextRequest, NextResponse } from "next/server"

// Temporary in-memory storage for users
const users: Record<string, any> = {}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, firstName, lastName, phone, birthDate, address, role = "PATIENT" } = body

    // Validation
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 })
    }

    // Check if email already exists
    if (users[email]) {
      return NextResponse.json({ error: "Cet email est déjà utilisé" }, { status: 409 })
    }

    // Create user
    const newUser = {
      id: Date.now().toString(),
      email,
      password: Buffer.from(password).toString("base64"), // Simple encoding (should use bcrypt in production)
      firstName,
      lastName,
      phone,
      birthDate,
      address,
      role,
      createdAt: new Date(),
    }

    users[email] = newUser

    // Return success
    return NextResponse.json(
      {
        message: "Inscription réussie",
        user: {
          id: newUser.id,
          email: newUser.email,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          role: newUser.role,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de l'inscription" }, { status: 500 })
  }
}

// Export users for login route
export { users }
