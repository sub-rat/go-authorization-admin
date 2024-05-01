import * as React from "react"

import { BaseInput } from "./components/base-input"
import { EmailInput } from "./components/email-input"
import { PasswordInput } from "./components/password-input"
import { PhoneInput } from "./components/phone-input"
import { RateInput } from "./components/rate-input"
import { SearchInput } from "./components/search-input"
import { SlugInput } from "./components/slug-input"
import { URLInput } from "./components/url-input"
import { InputProps } from "./input.types"

const InputTypes = {
  email: "email",
  password: "password",
  tel: "tel",
  slug: "slug",
  url: "url",
  text: "text",
  rate: "rate",
  search: "search",
} as const

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, onChange, slugOptions, ...props }, ref) => {
    switch (type) {
      case InputTypes.password:
        return (
          <PasswordInput
            onChange={onChange}
            ref={ref}
            {...props}
            type="password"
          />
        )
      case InputTypes.url:
        return <URLInput onChange={onChange} ref={ref} {...props} type="url" />
      case InputTypes.slug:
        return (
          <SlugInput
            onChange={onChange}
            ref={ref}
            {...props}
            type="slug"
            slugOptions={slugOptions}
          />
        )
      case InputTypes.tel:
        return (
          <PhoneInput onChange={onChange} ref={ref} {...props} type="tel" />
        )
      case InputTypes.email:
        return (
          <EmailInput onChange={onChange} ref={ref} {...props} type="email" />
        )

      case InputTypes.rate:
        return (
          <RateInput onChange={onChange} ref={ref} {...props} type="number" />
        )
      case InputTypes.search:
        return (
          <SearchInput onChange={onChange} ref={ref} {...props} type="text" />
        )
      default:
        return (
          <BaseInput onChange={onChange} ref={ref} {...props} type={type} />
        )
    }
  },
)

export default Input
Input.displayName = "Input"
export * from "./input.types"
