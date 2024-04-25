import { ROUTES } from "../../../constants/ROUTES";

export const permissionAction = {
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update',
  DELETE: 'delete',
};
export const allPermissions = [
  '',
  'ACCOUNT',
  'ASSET',
  'AUTH_SERVICE',
  'CHANNEL',
  'COA_MAPPING',
  'INCOMPLETE_TXN',
  'OWNER',
  'PROCESS',
  'PRODUCT',
  'REPORT',
  'REPORTING_GROUP',
  'SUB_ACCOUNT_BALANCE',
  'TARRIF',
  'TRANSACTION_CONTROL',
  'TRIAL_BALANCE',
  'USER_TYPE',
  'JV',
];
// eslint-disable-next-line @typescript-eslint/naming-convention
export enum allPermission {
  ACCOUNT = 'ACCOUNT',
  ASSET = 'ASSET',
  AUTH_SERVICE = 'AUTH_SERVICE',
  CHANNEL = 'CHANNEL',
  COA_MAPPING = 'COA_MAPPING',
  INCOMPLETE_TXN = 'INCOMPLETE_TXN',
  JV = 'JV',
  OWNER = 'OWNER',
  POSTING = 'POSTING',
  PROCESS = 'PROCESS',
  PRODUCT = 'PRODUCT',
  REPORT = 'REPORT',
  REPORTING_GROUP = 'REPORTING_GROUP',
  SUB_ACCOUNT_BALANCE = 'SUB_ACCOUNT_BALANCE',
  TARRIF = 'TARRIF',
  TRANSACTION = 'TRANSACTION',
  TRANSACTION_CONTROL = 'TRANSACTION_CONTROL',
  TRIAL_BALANCE = 'TRIAL_BALANCE',
  USER_TYPE = 'USER_TYPE',
  UTILS = 'UTILS',
}

export const routeWithPermission = [
  {
    permission: allPermission.ACCOUNT,
    routes: [ROUTES.PRODUCT_ACCOUNTS_LIST],
  },
  {
    permission: allPermission.INCOMPLETE_TXN,
    routes: [ROUTES.PROCESS_OPERATIONS_LIST],
  },
  {
    permission: allPermission.POSTING,
    routes: [ROUTES.TRANSACTIONS_REPORT_LIST],
  },
  {
    permission: allPermission.TRANSACTION,
    routes: [ROUTES.PROCESS_TXNS_LIST],
  },
  {
    permission: allPermission.PROCESS,
    routes: [ROUTES.PROCESS_LIST],
  },
  {
    permission: allPermission.TRIAL_BALANCE,
    routes: [ROUTES.TRIAL_BALANCE_LIST],
  },
  {
    permission: allPermission.OWNER,
    routes: [ROUTES.OWNER_LIST],
  },
  {
    permission: allPermission.JV,
    routes: [ROUTES.JV_POSTING_ADD],
  },
  {
    permission: allPermission.COA_MAPPING,
    routes: [ROUTES.COA_MAPPING_LIST],
  },
  {
    permission: allPermission.TARRIF,
    routes: [ROUTES.TARIFF_LIST],
  },
  {
    permission: allPermission.TRANSACTION_CONTROL,
    routes: [ROUTES.TRANSACTION_CONTROL_LIST],
  },
  {
    permission: allPermission.PRODUCT,
    routes: [ROUTES.PRODUCT_LIST],
  },
  {
    permission: allPermission.REPORTING_GROUP,
    routes: [ROUTES.REPORTING_GROUP_LIST],
  },
  {
    permission: allPermission.CHANNEL,
    routes: [ROUTES.CHANNEL_LIST],
  },
  {
    permission: allPermission.ASSET,
    routes: [ROUTES.ASSET_GROUP_LIST],
  },
  {
    permission: allPermission.USER_TYPE,
    routes: [ROUTES.USERS_LIST],
  },
];
