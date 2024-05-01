"use client"

import { Icon, IconType } from "../../../common/icon"
import { cn } from "../../../utils/cn"

interface NavMenuProps {
  onClick?: () => void
  title: string
  icon: IconType
  isActive: boolean
  isSub?: boolean
  onSubClick?: () => void
  close?: boolean
}

export const NavMenu = ({
  isActive,
  title,
  icon,
  onClick,
  isSub,
  onSubClick,
  close,
}: NavMenuProps) => (
  <button
    onClick={onClick}
    className={cn(
      "h-8 px-2 w-full flex items-center gap-2 rounded-sm transition-all text-secondary hover:bg-surface-background",
      {
        "bg-surface-background text-primary font-medium": isActive,
        "justify-between": isSub,
      },
    )}
  >
    <div className="flex items-center gap-2">
      <Icon size="sm" icon={icon} testid={`icon-${title}`} />
      <p>{title}</p>
    </div>
    {isSub && (
      <Icon icon={close ? "ChevronDown" : "ChevronUp"} onClick={onSubClick} />
    )}
  </button>
)

export default NavMenu
