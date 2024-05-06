import { models_Role } from "../../../../services/generated/requests"

export interface IRoleModal {
  open: boolean
  onClose: (e: boolean) => void
  editData?: null | models_Role
}

export interface IRoleModalState {
  open: boolean
  editData?: null | models_Role
}
