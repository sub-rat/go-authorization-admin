"use client"

import { useRouter } from "next/navigation"

import Sidebar from "./components/sidebar"
import { usePublicServicePostApiV1PublicsUserLogout } from "../../../services/generated/queries"

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const router = useRouter()
  const { mutate } = usePublicServicePostApiV1PublicsUserLogout({
    onSuccess: () => {
      localStorage.clear()
      router.push("/login")
    },
  })
  return (
    <div className="flex h-screen">
      <div className="w-[200px] shrink-0  border-r border-layout flex flex-col">
        <button
          onClick={() => {
            mutate()
          }}
          className="h-12 shrink-0 px-3 flex items-center border-b border-layout"
        >
          Logout
          {/* <Image src="/images/main-logo.svg" alt="Logo" width={150} height={20} /> */}
        </button>
        <Sidebar />
      </div>
      <div className="w-[calc(100vw-200px)] flex flex-col bg-surface-background">
        {children}
      </div>
    </div>
  )
}

export default MainLayout
