import React, { useContext } from "react"

import { AbilityContext, defaultAbility } from "."

const PermisionContext = ({ children }: { children: React.ReactNode }) => (
  <AbilityContext.Provider value={defaultAbility}>
    {children}
  </AbilityContext.Provider>
)

const useAbilityContext = () => useContext(AbilityContext)

export { useAbilityContext }
export default PermisionContext
