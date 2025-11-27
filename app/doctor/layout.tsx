import { redirect } from "next/navigation"
import { DashboardLayout as ClientDashboardLayout } from "@/components/dashboard-layout"
import { requireAuth, NotAuthorizedError, NotAuthenticatedError } from "@/lib/auth"

export default async function DoctorLayout({ children }: { children: React.ReactNode }) {
  try {
    const user = await requireAuth("DOCTOR")

    const userName = `${user.firstName} ${user.lastName}`

    // Wrap the doctor area with the app client DashboardLayout
    return <ClientDashboardLayout userRole="DOCTOR" userName={userName}>{children}</ClientDashboardLayout>
  } catch (err) {
    // Role mismatch: if we have the user object, redirect them to their dashboard
    if (err instanceof NotAuthorizedError && err.user) {
      const role = err.user.role.toLowerCase()
      redirect(`/${role}/dashboard`)
    }

    // Unauthenticated or anything else -> login
    redirect("/login")
  }
}
