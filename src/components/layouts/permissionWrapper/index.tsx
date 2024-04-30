import { createContext } from "react"
import { AbilityBuilder, defineAbility, PureAbility } from "@casl/ability"
import { createContextualCan } from "@casl/react"

import { permissionAction } from "./permissions"

export const defaultAbility = defineAbility(() => {
  null
})
export const AbilityContext = createContext<PureAbility>(defaultAbility)
export const Can = createContextualCan(AbilityContext.Consumer)

export function updateAbility(ability: any, assignedPermision: string[]) {
  const { can, rules } = new AbilityBuilder(ability)
  assignedPermision?.forEach((slug: any) => {
    return (
      can(permissionAction.CREATE, slug),
      can(permissionAction.READ, slug),
      can(permissionAction.UPDATE, slug),
      can(permissionAction.DELETE, slug)
    )
  })
  ability?.update(rules)
}
