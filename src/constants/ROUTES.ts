export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  TRIAL_BALANCE_LIST: '/trialbalance/list',
  SUB_ACCOUNT_BALANCE_LIST: '/sub_account_balance/list',
  TRANSACTIONS_REPORT_LIST: '/transaction_report/list',

  COA_LIST: '/settings/coa/list',
  PRODUCT_LIST: '/products/list',
  PROCESS_LIST: '/process/list',
  ASSET_GROUP_LIST: '/assets/list',
  OWNER_LIST: '/owner/list',
  JV_POSTING_ADD: '/jv-posting/add',
  TRANSACTION_CONTROL_LIST: '/transcation-control/list',
  TRANSACTION_CONTROL_ADD: '/transcation-control/add',
  TARIFF_ADD: '/tariff/add',
  TARIFF_LIST: '/tariff/list',
  USERS_LIST: '/users/list',
  PRODUCT_ACCOUNTS_LIST: '/product-accounts/list',
  PROCESS_TXNS_LIST: '/process-txns/list',
  PROCESS_OPERATIONS_LIST: '/process-operations/list',
  CHANNEL_LIST: '/channels/list',
  REPORTING_GROUP_LIST: '/reporting-group/list',
  COA_MAPPING_LIST: '/coa-mapping/list',
  ADD_PRODUCT: '/products/add',
  ADD_ASSET: '/assets/add',
  SETTINGS_COA: '/settings/coa/list',
  SETTINGS_ORPHAN: '/settings/coa/list?type=orphan',
  USER: '/auth-user/list',
  ROLE: '/role/list',
  Log: '/log/list?log=access',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];
