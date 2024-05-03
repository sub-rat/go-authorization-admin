"use client"

import { redirect, usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { ROUTES } from "@/constants/ROUTES"

import { usePublicServiceGetApiV1PublicsUser } from "../../../services/generated/queries"

const UNPROTECTED_ROUTES = [ROUTES.LOGIN]

const isBrowser = () => typeof window !== "undefined"

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  //   const ability = useAbilityContext()
  const pathIsProtected = UNPROTECTED_ROUTES.indexOf(pathname) === -1
  const { data, isError, isLoading: userLoading } = usePublicServiceGetApiV1PublicsUser()

  useEffect(() => {

    if (
      isBrowser() &&
      !localStorage.getItem("token") &&
      pathIsProtected &&
      userLoading
    ) {
      setIsLoading(false)

      redirect(ROUTES.LOGIN)
    } else if (isBrowser() && pathIsProtected) {
      setIsLoading(false)
      // redirect(ROUTES.DASHBOARD)
      // useAbilityContext(ability,data?.data)
      // console.log({ data });

      //   const response = axiosAgent.post(
      //     '/api/v1/getRole',
      //     {},
      //     { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //   ) as Promise<Record<string, { features: any }>>;
      //   response.then((res) => {
      //     updateAbility(ability, res.data.features);
      //   });

      setIsLoading(false)
    }
    setIsLoading(false)
  }, [pathIsProtected, router, pathname])

  return (
    <div suppressHydrationWarning>
      {isLoading ? (
        <div
          suppressHydrationWarning
          className="min-h-screen flex items-center justify-center"
        >
          ...loading
          {/* <Icon icon="Loader2" className="animate-spin w-5 h-5" /> */}
        </div>
      ) : (
        children
      )}
    </div>
  )
}
