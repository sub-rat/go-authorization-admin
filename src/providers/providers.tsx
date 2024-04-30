"use client"

import React from "react"
import { useRouter } from "next/navigation"
import {
  keepPreviousData,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import axios from "axios"

import PermisionContext from "../components/layouts/permissionWrapper/permissionContext"
import { ProtectedRoute } from "../components/layouts/permissionWrapper/protected-route"
import { AppConfig } from "../config"
import { OpenAPI } from "../services/generated/requests"

// import PermisionContext from '@/components/permissionWrapper/permissionContext';
// import { ProtectedRoute } from '@/components/protected-route';

const fiveMinutesinMs = 1000 * 60 * 5

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: fiveMinutesinMs,
      //   cacheTime: fiveMinutesinMs,
      //   keepPreviousData: true,
      gcTime: fiveMinutesinMs,
      placeholderData: keepPreviousData,

      refetchOnWindowFocus: false,
      retry: false,
      // useErrorBoundary: (error) => {
      //   const errors = error as Record<string, string>;

      //   toast({
      //     title: errors.message || 'Something went wrong!',
      //     state: 'error',
      //     variant: 'danger',
      //   });
      //   return false;
      // },
    },
  },
})
OpenAPI.BASE = AppConfig.BASE_URL as string
if (typeof window !== "undefined") {
  OpenAPI.TOKEN = localStorage.getItem("token") as string
}

const Providers = ({ children }: React.PropsWithChildren) => {
  const [client] = React.useState(queryClient)
  const router = useRouter()
  axios.interceptors.response.use(
    (config) => {
      return config
    },
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem("token")
        router.push("/login")
      }

      return Promise.reject(error)
    },
  )
  axios.interceptors.request.use((config: any) => {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") as string}`,
      },
      // Headers: {
      //     Authorization: 'asdfasdf'
      // }
      // headers: {
      //     Authorization: `Bearar ${localStorage.getItem('token') as string}`,
      // },
    }
  })

  return (
    <QueryClientProvider client={client}>
      <ProtectedRoute>
        <PermisionContext>
          {children}
          <ReactQueryDevtools position="bottom" />
        </PermisionContext>
      </ProtectedRoute>
    </QueryClientProvider>
  )
}

export default Providers
