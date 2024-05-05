import { Button } from '@/components/common/button/Button'
import Checkbox from '@/components/common/checkbox/checkbox'
import FormSelect from '@/components/common/form/form-select'
import { Input } from '@/components/common/input'
import { Modal } from '@/components/common/modal/modal'
import { useMenuServiceGetApiV1Menus, useRoleServicePostApiV1Roles, useRoleServicePutApiV1Roles } from '@/services/generated/queries'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { models_MenuQueryResult, models_RoleMenu } from '../../../../../../services/generated/requests'
import { Switch } from '../../../../../common/switch'
import { IRoleModal } from '../../types'
const RoleModal = ({
    open, onClose, editData
}: IRoleModal) => {
    const methods = useForm({
        defaultValues: {
            ...editData,
            rolesIds: [...new Set(editData?.role_menus?.map(x => x.menu_id!))].map((x) => ({ value: x })) as []
        }
    })
    const queryClient = useQueryClient()
    const defaultAction = editData?.role_menus?.map((x) => {
        return ({ menu_id: x.menu_id, action_id: x.action_id })
    })
    console.log({ defaultAction });

    const { mutate } = useRoleServicePostApiV1Roles({
        onSuccess: () => {
            onClose(false)
            queryClient.invalidateQueries({ queryKey: ["RoleServiceGetApiV1Roles"] })
        },
    })
    const { mutate: editRole } = useRoleServicePutApiV1Roles({
        onSuccess: () => {
            onClose(false)
            queryClient.invalidateQueries({ queryKey: ["RoleServiceGetApiV1Roles"] })
        },
    })
    const [action, setAction] = useState<
        { menu_id: string; action_id: string }[]
    >(defaultAction || [])
    const { data, isLoading } = useMenuServiceGetApiV1Menus({})

    const optionData = data?.data as models_MenuQueryResult | undefined
    const rolesList = [...new Set(methods
        .watch("rolesIds")
        ?.map((x: { value: string }) => x?.value))]

    return (

        <Modal
            onClose={() => onClose(false)}
            open={open}
            footerLeft={
                <Button
                    onClick={methods.handleSubmit((e) => {
                        editData ?
                            editRole({
                                data: {
                                    name: e.name as string,
                                    role_menus: action as models_RoleMenu[],
                                    remark: e.remark as string,
                                    sequence: Number(e.sequence) ?? 0,
                                    status: e.status ?? 0,
                                },
                                id: editData.id!
                            })
                            : mutate({
                                data: {
                                    name: e.name as string,
                                    role_menus: action as models_RoleMenu[],
                                    remark: e.remark as string,
                                    sequence: Number(e.sequence) ?? 0,
                                    status: e.status ?? 0,
                                },
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
                    {editData ? 'Edit Role' : ` Add Role`}
                </Button>
            }
            title={editData ? "Edit Role" : "Add New Role"}
        >
            {isLoading ? null : <FormProvider {...methods}>
                <div className='flex flex-col gap-2'>
                    <Input
                        {...methods.register("name")}
                        placeHolder="Name"
                        label="Name"
                        required
                        isRequired
                    />
                    <Input
                        {...methods.register("remark")}
                        placeHolder="Remarks"
                        label="Remarks"
                    />
                    <FormSelect
                        required
                        isRequired
                        label="Role List"
                        name="rolesIds"
                        isMulti
                        isLoading={isLoading}
                        options={(optionData as models_MenuQueryResult)?.list?.map(
                            (x) => {
                                return (
                                    {
                                        label: x.name!,
                                        value: x.id!,
                                    } ?? []
                                )
                            },
                        )}
                        onChangeAction={(e) => {
                            if (e instanceof Array) {
                                const selected = e?.map((g) => g.value)
                                setAction((prev) =>
                                    prev.filter((f) => selected.includes(f.menu_id)),
                                )
                            }
                        }}
                    />
                    <div className="flex flex-col gap-2">
                        {rolesList && rolesList?.length > 0 &&
                            optionData?.list
                                ?.filter((item) => rolesList?.includes(item.id as string))
                                .map((e) => {

                                    return (
                                        <div className="flex flex-col gap-1" key={e.id}>
                                            <p>{e.name}</p>
                                            <div className="flex gap-4">
                                                {e?.actions?.map((g) => {

                                                    return (
                                                        <Checkbox
                                                            key={g.id}
                                                            label={g.name}
                                                            // value={g.id}
                                                            defaultChecked={editData?.role_menus?.map(x => x.action_id).includes(g.id!)}
                                                            // defaultChecked={g.id}
                                                            // defaultChecked={action}
                                                            onCheckedChange={(f) => {
                                                                f
                                                                    ? setAction((prev) => [
                                                                        ...prev,
                                                                        { menu_id: e.id!, action_id: g.id! },
                                                                    ])
                                                                    : setAction((prev) =>
                                                                        prev.filter(
                                                                            (x) => x.action_id !== g.id,
                                                                        ),
                                                                    )
                                                            }}
                                                        />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                    </div>
                    <Switch name='status'
                        label='Status'
                        defaultChecked={!!editData?.status}
                        onCheckedChange={(e) => {
                            if (e) {
                                methods.setValue('status', 1)
                            }
                            else {
                                methods.setValue('status', 0)
                            }
                        }}
                    />
                    <Input
                        {...methods.register("sequence")}
                        placeHolder="Sequence"
                        label="Sequence"
                        type='number'
                        required
                        isRequired
                    />
                </div>
                {/* <Input
                                label="Phone"
                                {...methods.register('phone')} type="number" placeHolder="Phone" /> */}
            </FormProvider>}
        </Modal>

    )
}
export default RoleModal