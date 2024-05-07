import { FormProvider, useForm } from "react-hook-form"
import { useQueryClient } from "@tanstack/react-query"

import { Button } from "@/components/common/button/Button"
import FormSelect from "@/components/common/form/form-select"
import { Input } from "@/components/common/input"
import { Modal } from "@/components/common/modal/modal"
import {
  useRoleServiceGetApiV1Roles,
  useUserServicePostApiV1Users,
  useUserServicePutApiV1Users,
} from "@/services/generated/queries"

import { IUserModal } from "../../types"
import { models_Role } from "../../../../../../services/generated/requests"
const UserModal = ({ open, onClose, editData }: IUserModal) => {
  const methods = useForm({
    defaultValues: {
      ...editData,
      role_id: [...new Set(editData?.user_roles?.map((x) => x.role_id!))].map(
        (x) => ({ value: x }),
      ) as [],
    },
  })
  const queryClient = useQueryClient()

  const { mutate } = useUserServicePostApiV1Users({
    onSuccess: () => {
      onClose(false)

      queryClient.invalidateQueries({
        queryKey: ["UserServiceGetApiV1Users"],
      })
    },
  })

  const { mutate: editUser } = useUserServicePutApiV1Users({
    onSuccess: () => {
      onClose(false)
      queryClient.invalidateQueries({ queryKey: ["UserServiceGetApiV1Users"] })
    },
  })
  const { data: rolesData, isLoading: rolesLoading } =
    useRoleServiceGetApiV1Roles({})
  const rolesSelect = rolesData?.data?.list?.map((x: models_Role) => {
    return {
      label: x.name,
      value: x.id,
    }
  })
  return (
    <Modal
      onClose={() => onClose(false)}
      open={open}
      footerLeft={
        <Button
          onClick={methods.handleSubmit(async (data) => {
            editData
              ? editUser({
                  id: editData.id as string,
                  data: {
                    username: data.full_name ?? "",
                    full_name: data.full_name ?? "",
                    password: data.password,
                    status: 1,
                    user_roles: data.role_id.map(
                      (x: { lable: string; value: string }) => ({
                        role_id: x.value,
                      }),
                    ),
                  },
                })
              : mutate({
                  data: {
                    username: data.full_name ?? "",
                    full_name: data.full_name ?? "",
                    password: data.password,
                    status: 1,
                    user_roles: data.role_id.map(
                      (x: { lable: string; value: string }) => ({
                        role_id: x.value,
                      }),
                    ),
                  },
                })
          })}
        >
          {editData ? "Edit User" : ` Add User`}
        </Button>
      }
      title={editData ? "Edit User" : "Add New User"}
    >
      <FormProvider {...methods}>
        <div className="flex flex-col gap-4">
          <Input
            {...methods.register("full_name")}
            placeHolder="Name"
            isRequired
            required
          />
          {!editData && (
            <Input
              {...methods.register("password")}
              type="password"
              placeHolder="password"
              isRequired
              required
            />
          )}
          <Input
            {...methods.register("phone")}
            type="number"
            placeHolder="Phone"
          />
          <FormSelect
            isRequired
            required
            name="role_id"
            isMulti
            isLoading={rolesLoading}
            options={rolesSelect ?? []}
            // {...Button('')}
          />
        </div>
      </FormProvider>
    </Modal>
  )
}
export default UserModal
