import { cn } from "../../../../utils/cn"
import { Icon } from "../../../icon"

interface MessageProps {
  errorText: string | undefined
  helperText: string | undefined
  isDisabled?: boolean
}

const Message = ({ errorText, helperText, isDisabled }: MessageProps) => {
  if (errorText) {
    return (
      <div className="text-critical-primary flex gap-1 items-center text-[13px]">
        <Icon className="text-critical-primary" size="xs" icon="InfoIcon" />
        {errorText}
      </div>
    )
  }
  if (helperText) {
    return (
      <div
        className={cn("text-secondary text-[13px] flex gap-1 items-center", {
          "text-disabled cursor-not-allowed": isDisabled,
        })}
      >
        <Icon className="text-secondary" size="xs" icon="InfoIcon" />
        {helperText}
      </div>
    )
  }
  return null
}

export { Message }
