'use client'
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../../../components/common/button/Button";
import Checkbox from "../../../../components/common/checkbox/checkbox";
import FormSelect from "../../../../components/common/form/form-select";
import { Input } from "../../../../components/common/input";
import { Modal } from "../../../../components/common/modal/modal";
import Table from "../../../../components/common/table/Table";
import { Column } from "../../../../components/common/table/table.types";
import { useMenuServiceGetApiV1Menus, useRoleServiceGetApiV1Roles, useRoleServicePostApiV1Roles } from "../../../../services/generated/queries";
import { models_MenuQueryResult, models_Role, models_RoleMenu } from "../../../../services/generated/requests";

const Role = () => {
    const queryClient = useQueryClient();


    const { data: roleList, isLoading: roleLoading } = useRoleServiceGetApiV1Roles({

    })

    const rolesColumn: Column<models_Role>[] = [
        {
            header: 'Roles',
            accessorKey: 'name'
        }
    ]
    // const { data, isPending } = useUserServiceGetApiV1Users({

    // })
    const [userModal, setUserModal] = useState(false)
    const { mutate } = useRoleServicePostApiV1Roles({
        onSuccess: () => {
            setUserModal(false)
            queryClient.invalidateQueries({ queryKey: ['RoleServiceGetApiV1Roles'] })
        }
    })
    const { data, isLoading } = useMenuServiceGetApiV1Menus({

    })
    const methods = useForm();
    const optionData = data?.data as models_MenuQueryResult | undefined
    const rolesList = methods.watch('rolesIds')?.map((x: { value: string }) => x.value)
    // console.log(methods.watch('rolesIds'), optionData,
    //     optionData.list.filter(item => rolesList.includes(item.id)));
    const [action, setAction] = useState<{ menu_id: string, action_id: string }[]>([])

    return (
        <div>
            <Button
                onClick={() => setUserModal(true)}
            >
                Add Role
            </Button>
            <Table
                columns={rolesColumn}
                data={roleList?.data?.list ?? []}
                isLoading={roleLoading}
            />
            {
                userModal &&
                <Modal
                    onClose={() => setUserModal(false)}
                    open={userModal}
                    footerLeft={
                        <Button
                            onClick={methods.handleSubmit((e) => {
                                mutate({
                                    data: {
                                        name: e.full_name,
                                        role_menus: action as models_RoleMenu[],
                                        remark: e.remark,
                                        sequence: 1,
                                        status: 1
                                    }
                                })
                            })}
                        // onClick={handleSubmit(async (data) => {
                        //     mutate(
                        //         {
                        //             data: { ...data }
                        //         }
                        //     )
                        // })}
                        >
                            Add Role
                        </Button>
                    }
                    title={'Add New Role'}
                >

                    <FormProvider {...methods}>
                        <Input {...methods.register("full_name")} placeHolder="Name" label="Name" required
                            isRequired
                        />
                        <Input {...methods.register("remark")} placeHolder="Remarks" label="Remarks" />
                        <FormSelect
                            required
                            isRequired
                            label="Role List"
                            name="rolesIds"
                            isMulti
                            isLoading={isLoading}
                            options={(optionData as models_MenuQueryResult)?.list?.map((x) => {
                                return ({
                                    label: x.name!,
                                    value: x.id!
                                } ?? [])
                            })}
                            onChangeAction={(e) => {
                                if (e instanceof Array) {
                                    const selected = e?.map(g => g.value)
                                    setAction((prev) => prev.filter((f) => selected.includes(f.menu_id)));
                                }
                            }}
                        />
                        <div className="flex flex-col gap-2">
                            {
                                rolesList?.length > 0 && (
                                    optionData?.list?.filter(item => rolesList.includes(item.id)).map((e) => {
                                        return (
                                            <div className="flex flex-col gap-1" key={e.id}>
                                                <p>
                                                    {e.name}
                                                </p>
                                                <div className="flex gap-4">
                                                    {e?.actions?.map((g) => {
                                                        return (
                                                            <Checkbox label={g.name} value={g.id}
                                                                onCheckedChange={(f) => {

                                                                    f ? setAction((prev) => [...prev, { menu_id: e.id!, action_id: g.id! }]) : setAction((prev) => prev.filter((x) => x.action_id !== g.id))
                                                                }}
                                                            />
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    }))
                            }
                        </div>
                        {/* <Input
                            label="Phone"
                            {...methods.register('phone')} type="number" placeHolder="Phone" /> */}
                    </FormProvider>

                </Modal>
            }
        </div>
    )
}
export default Role