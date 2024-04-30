import * as Switch from "@radix-ui/react-switch"

export type ToggleProps = {
  label?: string
  checked: boolean
  onChange: (event: boolean) => void
}

const Toggle = ({ label, checked, onChange }: ToggleProps) => {
  return (
    <div className="flex flex-row items-center">
      <Switch.Root
        checked={checked}
        className="w-[31px] h-4 rounded-full relative data-[state=checked]:bg-brand-primary bg-surface-muted outline-none cursor-default"
        id="airplane-mode"
        onCheckedChange={(e) => onChange(e)}
      >
        <Switch.Thumb className="block w-[14px] h-[14px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-4" />
      </Switch.Root>
      {label && (
        <p className="text-base text-primary font-medium px-2">{label}</p>
      )}
    </div>
  )
}

export default Toggle
