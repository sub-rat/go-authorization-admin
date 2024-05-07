import { models_User } from "../../../../services/generated/requests"

export interface IUserModal {
  open: boolean
  onClose: (e: boolean) => void
  editData?: null | models_User
}

export interface IUserModalState {
  open: boolean
  editData?: null | models_User
}
