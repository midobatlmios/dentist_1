import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth-token")?.value

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const decoded = Buffer.from(token, "base64").toString()
    const [userId, email, role] = decoded.split(":")

    return NextResponse.json(
      {
        user: {
          id: userId,
          email,
          role,
          firstName: email.split("@")[0],
          lastName: "User",
        },
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
