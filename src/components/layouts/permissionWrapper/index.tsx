/* eslint-disable @typescript-eslint/no-unused-expressions */
import { AbilityBuilder, defineAbility, PureAbility } from '@casl/ability';
import { createContextualCan } from '@casl/react';
import { createContext } from 'react';

import { permissionAction } from './permissions';

export const defaultAbility = defineAbility(() => {
  null;
});
export const AbilityContext = createContext<PureAbility>(defaultAbility);
export const Can = createContextualCan(AbilityContext.Consumer);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateAbility(ability: any, assignedPermision: string[]) {
  const { can, rules } = new AbilityBuilder(ability);
  assignedPermision?.forEach(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (slug: any) =>
      // can(permissionAction.CREATE, slug),
      can(permissionAction.READ, slug)
    // can(permissionAction.UPDATE, slug),
    // can(permissionAction.DELETE, slug)
  );
  ability?.update(rules);
}
