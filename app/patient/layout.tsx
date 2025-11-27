import { redirect } from "next/navigation"
import { DashboardLayout as ClientDashboardLayout } from "@/components/dashboard-layout"
import { requireAuth, NotAuthorizedError } from "@/lib/auth"

export default async function PatientLayout({ children }: { children: React.ReactNode }) {
  try {
    const user = await requireAuth("PATIENT")

    const userName = `${user.firstName} ${user.lastName}`

    return <ClientDashboardLayout userRole="PATIENT" userName={userName}>{children}</ClientDashboardLayout>
  } catch (err) {
    if (err instanceof NotAuthorizedError && err.user) {
      const role = err.user.role.toLowerCase()
      redirect(`/${role}/dashboard`)
    }

    redirect("/login")
  }
}
