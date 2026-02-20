import { createFileRoute } from '@tanstack/react-router'
import { AppSidebar } from "@/components/app-sidebar"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
<<<<<<< HEAD:src/routes/(app)/dashboard.tsx
import { CampaignsPage } from '@/routes/(app)/campanhas'
=======
// import { Campaigns } from '@/routes/'
>>>>>>> 141da2a4a411dee539494ba406c23f918fb0ff56:src/routes/dashboard.tsx

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

export function Dashboard() {
  return (
    <>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
            <div className="flex flex-1 flex-col">
              <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                  <SectionCards /> 
                  {/* <DataTable data={data} /> */}
<<<<<<< HEAD:src/routes/(app)/dashboard.tsx
                  <CampaignsPage />
=======
                  {/* <Campaigns /> */}
>>>>>>> 141da2a4a411dee539494ba406c23f918fb0ff56:src/routes/dashboard.tsx
                </div>
              </div>
            </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}