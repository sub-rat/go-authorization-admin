"use client"

import SidebarLink from "./sidebar-link"
import { usePublicServiceGetApiV1PublicsUserMenutree } from "../../../../services/generated/queries"

export const Sidebar = () => {
  const { data, isLoading } = usePublicServiceGetApiV1PublicsUserMenutree()

  if (isLoading) {
    return <>loading...</>
  }
  return (
    <div className="px-2 py-4 flex flex-col h-full justify-between">
      <div className="flex flex-col">
        {data?.data.map(
          (x: {
            router: string
            name: string
            children?: [
              {
                router: string
                name: string
              },
            ]
          }) => (
            // <Can I={permissionAction.READ} a={allPermission.ACCOUNT}>zzaac z
            <div key={x.router}>
              <SidebarLink
                icon="FileBarChart2"
                route={x.router}
                title={x.name}
                isSub={x.children}
              />
            </div>
            // </Can>
          ),
        )}
        {/* <Can I={permissionAction.READ} a={allPermission.ACCOUNT}>
          <SidebarLink icon="FileBarChart2" route={ROUTES.PRODUCT_ACCOUNTS_LIST} title="Accounts" />
        </Can>
        */}
      </div>
    </div>
  )
}

export default Sidebar
