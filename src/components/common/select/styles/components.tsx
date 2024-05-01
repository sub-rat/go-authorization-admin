import { Ref } from "react"
import {
  components,
  GroupBase,
  OptionProps,
  SelectComponentsConfig,
} from "react-select"

import Checkbox from "../../checkbox/checkbox"
import { Icon, IconType } from "../../icon"
import { cn } from "../../../utils/cn"

export interface Option {
  label: string | number
  value: string | number
}

export const getComponents: (
  hasRadio?: boolean,
  addItemHandler?: () => void,
  addItemLabel?: string,
  dropDownIcon?: IconType,
) => SelectComponentsConfig<Option, boolean, GroupBase<Option>> = (
  hasRadio,
  addItemHandler,
  addItemLabel,
  dropDownIcon,
) => ({
  Menu: ({ ...props }) => (
    <components.Menu className="text-ellipsis overflow-clip" {...props}>
      <div>
        {props.children}
        {addItemHandler && (
          <button
            onClick={addItemHandler}
            className="w-full flex items-center gap-2 justify-center border border-layout py-2 rounded-b bg-white hover:bg-surface-highlight text-secondary hover:text-primary"
          >
            <Icon icon="Plus" size="md" testid="ADD-ICON" />
            <span className="text-xs  font-medium">
              {addItemLabel ?? "Add Item"}
            </span>
          </button>
        )}
      </div>
    </components.Menu>
  ),
  Placeholder: ({ ...props }) => (
    <components.Placeholder {...props}>
      <PlaceHolder {...props}>{props.children}</PlaceHolder>
    </components.Placeholder>
  ),
  DropdownIndicator: ({ className, selectProps, ...props }) => (
    <components.DropdownIndicator
      {...props}
      selectProps={selectProps}
      className={cn(className, "hover:bg-surface-background")}
    >
      {dropDownIcon && <Icon icon={dropDownIcon} cursor="pointer" />}

      {!dropDownIcon && (
        <Icon
          testid="drop-icon"
          className={cn("transition-transform duration-75", {
            "rotate-180": selectProps.menuIsOpen,
          })}
          icon="ChevronDown"
          cursor="pointer"
        />
      )}

      {/* {!dropDownIcon &&
        (selectProps.menuIsOpen ? (
          <Icon testid="drop-icon" icon="ChevronUp" cursor="pointer" />
        ) : (
          <Icon testid="drop-icon" icon="ChevronDown" cursor="pointer" />
        ))} */}
    </components.DropdownIndicator>
  ),
  ClearIndicator: (props) => (
    <components.ClearIndicator {...props}>
      <Icon icon="X" testid="cross-icon" />
    </components.ClearIndicator>
  ),

  Option: ({ ...props }) =>
    hasRadio ? (
      <components.Option {...props}>
        <input
          onClick={(e) => {
            props.selectOption({ ...props.data })
            e.stopPropagation()
            e.preventDefault()
          }}
          type="radio"
          ref={props.innerRef}
          disabled={props.isDisabled}
          checked={props.isSelected}
        />

        {props.children}
      </components.Option>
    ) : (
      <components.Option {...props}>
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          {props.children}
        </div>
        <IsMultiOptions {...props} />
      </components.Option>
    ),
  SingleValue: ({ ...props }) => {
    const { data } = props
    return (
      <components.SingleValue {...props}>
        <p>{data?.label}</p>
      </components.SingleValue>
    )
  },
})

const IsMultiOptions = (
  props: OptionProps<Option, boolean, GroupBase<Option>>,
) => {
  if (props?.isMulti) {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          // props?.selectOption({ ...props?.data });
        }}
      >
        <Checkbox
          testid="select-checkbox"
          size="md"
          ref={props?.innerRef as Ref<HTMLButtonElement>}
          disabled={props?.isDisabled}
          checked={props?.isSelected}
          onCheckedChange={() => props?.selectOption({ ...props?.data })}
        />
      </button>
    )
  }
  if (props?.isSelected) {
    return <Icon testid="option-icon" icon="Check" cursor="pointer" />
  }

  return null
}

interface PlaceHolderProps
  extends SelectComponentsConfig<Option, boolean, GroupBase<Option>> {
  children: React.ReactNode
  isMulti: boolean
  selectProps: {
    placeholder: React.ReactNode
    value: readonly Option[] | Option | null
  }
}

const PlaceHolder = ({ children, ...props }: PlaceHolderProps) => {
  const { selectProps, isMulti } = props

  if (isMulti) {
    if (Array.isArray(selectProps?.value)) {
      if (
        (selectProps?.value as Option[]).length === 0 ||
        !selectProps?.value
      ) {
        return <div>{selectProps?.placeholder}</div>
      }

      const firstOption = selectProps?.value[0] as Option

      if (firstOption.value === "<SELECT_ALL>") {
        return <p>All items selected</p>
      }
      return (
        <p>{`${(selectProps?.value as Option[]).length} items selected`}</p>
      )
    }
  }

  if (children) {
    return children as JSX.Element
  }

  return null
}
