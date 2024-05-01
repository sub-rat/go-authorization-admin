/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { dto_Pagination } from "./dto_Pagination"
import type { models_Menu } from "./models_Menu"

export type models_MenuQueryResult = {
  list?: Array<models_Menu>
  pagination?: dto_Pagination
}
