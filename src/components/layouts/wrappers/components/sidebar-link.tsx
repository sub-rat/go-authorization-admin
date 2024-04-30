"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import NavMenu from "./nav-menu"
import { IconType } from "../../../common/icon"

interface SidebarLinkProps {
  route?: string
  onClick?: () => void
  title: string
  icon: IconType
  isSub?: Record<string, string | number>[]
  onSubClick?: () => void
}

export const SidebarLink = ({
  route,
  title,
  icon,
  onClick,
  isSub = [],
}: SidebarLinkProps) => {
  const pathname = usePathname()
  const isActive = onClick ? false : pathname.includes(route || "")
  const [close, setClose] = useState(false)

  if (route) {
    return (
      <Link href={route} className="w-full relative " prefetch>
        <NavMenu icon={icon} title={title} isActive={isActive} />
      </Link>
    )
  }
  // else if (isSub.length > 0 && close) {
  //   return (

  //     isSub.map((y) => (
  //       <div className='ml-2'>
  //         <Link href={y.router as string} className="w-full relative " prefetch>
  //           <NavMenu icon={icon} title={y.name as string} isActive={isActive} />

  //         </Link>
  //       </div>

  //     )))

  // }
  return (
    <div onClick={onClick} suppressHydrationWarning>
      <NavMenu
        icon={icon}
        title={title}
        isActive={isActive}
        isSub={isSub.length > 0}
        onSubClick={() => setClose(!close)}
        close={close}
      />
      {close &&
        isSub.length > 0 &&
        isSub.map((y) => (
          <div className="ml-2" key={y.route}>
            <SidebarLink
              icon="FileBarChart2"
              route={y.router as string}
              title={y.name as string}
            />
          </div>
        ))}
    </div>
  )
}

export default SidebarLink
