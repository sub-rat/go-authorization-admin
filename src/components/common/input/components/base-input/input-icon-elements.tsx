import { cn } from "../../../../utils/cn"
import { Icon, IconType } from "../../../icon"

interface IconElementProps {
  isLoading: boolean | undefined
  loadingIcon?: IconType | React.ReactNode
  element: React.ReactNode
  icon?: IconType | React.ReactNode
  className?: string
  iconClassName?: string
  loadingIconClassName?: string
  showLoader?: boolean
  testId?: string
}

const IconElements = ({
  isLoading,
  loadingIcon,
  element,
  icon,
  className,
  showLoader,
  testId,
  loadingIconClassName,
  iconClassName,
}: IconElementProps) => {
  const elements = () => {
    if (isLoading && showLoader) {
      if (loadingIcon) {
        return typeof loadingIcon === "string" ? (
          <Icon
            icon={loadingIcon as IconType}
            className={loadingIconClassName}
          />
        ) : (
          loadingIcon
        )
      }
      return <Icon icon="Loader2" className="animate-spin" testid={testId} />
    }
    if (element) {
      return element
    }
    if (icon) {
      return typeof icon === "string" ? (
        <Icon icon={icon as IconType} className={iconClassName} />
      ) : (
        icon
      )
    }
    return null
  }

  return (
    <div className={cn("h-full flex items-center justify-cente", className)}>
      {elements()}
    </div>
  )
}

export { IconElements }
