"use client"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"

import { Button } from "../../../../components/common/button/Button"
import FormSelect from "../../../../components/common/form/form-select"
import { Input } from "../../../../components/common/input"
import { Modal } from "../../../../components/common/modal/modal"
import Table from "../../../../components/common/table/Table"
import {
  useRoleServiceGetApiV1Roles,
  useUserServiceGetApiV1Users,
  useUserServicePostApiV1Users,
} from "../../../../services/generated/queries"
import {
  models_Role,
  models_User,
} from "../../../../services/generated/requests"

const User = () => {
  // const { data, isPending } = useUserServiceGetApiV1Users({

  // })
  const [userModal, setUserModal] = useState(false)
  const queryClient = useQueryClient()

  const { mutate } = useUserServicePostApiV1Users({
    onSuccess: () => {
      setUserModal(false),
        queryClient.invalidateQueries({
          queryKey: ["UserServiceGetApiV1Users"],
        })
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
  const methods = useForm()
  const { data, isLoading } = useUserServiceGetApiV1Users({})

  const mainData = data?.data.list as models_User[] | undefined

  return (
    <div>
      <Button onClick={() => setUserModal(true)}>Add user</Button>
      <Table
        columns={[
          {
            header: "Name",
            accessorKey: "full_name",
          },
          {
            header: "Roles",
            cell: ({ row }) => {
              if (
                row.original.user_roles != null &&
                row.original.user_roles.length > 0
              ) {
                return row.original.user_roles.map((role, index) => (
                  <div key={index}>{role.role_id}</div>
                ))
              } else {
                return null // or any default value you want to display when there are no roles
              }
            },
          },
          {
            header: "UserName",
            accessorKey: "username",
          },
          {
            header: "Phone",
            accessorKey: "phone",
          },
        ]}
        isLoading={isLoading}
        data={mainData ?? []}
      />
      {userModal && (
        <Modal
          onClose={() => setUserModal(false)}
          open={userModal}
          footerLeft={
            <Button
              onClick={methods.handleSubmit(async (data) => {
                mutate({
                  data: {
                    username: data.full_name,
                    full_name: data.full_name,
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
              Add User
            </Button>
          }
          title={"Add New User"}
        >
          <FormProvider {...methods}>
            <div className="flex flex-col gap-4">
              <Input
                {...methods.register("full_name")}
                placeHolder="Name"
                isRequired
                required
              />
              <Input
                {...methods.register("password")}
                type="password"
                placeHolder="password"
                isRequired
                required
              />
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
      )}
    </div>
  )
}
export default User
