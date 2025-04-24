import { ProtectedLayout } from "@/components/dashboard/protected-layout";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <ProtectedLayout>
        <DashboardLayout>
          <main className="flex-1 overflow-x-hidden bg-white overflow-y-auto p-6">
            {children}
          </main>
        </DashboardLayout>
      </ProtectedLayout>
    );
  }