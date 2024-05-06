"use client"
import { useState } from "react"

import UserModal from "./components/modal"
import { userColumns } from "./constant"
import { IUserModalState } from "./types"
import { Button } from "../../../../components/common/button/Button"
import Table from "../../../../components/common/table/Table"
import { useUserServiceGetApiV1Users } from "../../../../services/generated/queries"
import { models_User } from "../../../../services/generated/requests"

const UserPage = () => {
  // const { data, isPending } = useUserServiceGetApiV1Users({

  // })
  const [userModal, setUserModal] = useState<IUserModalState>({
    open: false,
    editData: null,
  })
  const [tableFilter, setTableFilter] = useState({
    queryValue: "",
    current: 1,
    pageSize: 20,
  })

  const { data, isLoading } = useUserServiceGetApiV1Users({})

  const mainData = data?.data.list as models_User[] | undefined

  return (
    <div>
      <Button onClick={() => setUserModal({ open: true })}>Add user</Button>
      <Table
        columns={userColumns(setUserModal)}
        data={mainData ?? []}
        isLoading={isLoading}
        // manualFiltering
        manualPagination
        manualSearching
        hideControls={false}
        hidePagination={false}
        onTableStateChange={(e) => {
          setTableFilter((prev) => ({
            ...prev,
            queryValue: e?.search ?? prev.queryValue,
            pageSize: e.pagination?.size ?? prev.pageSize,
            current: e.pagination?.page ?? prev.current,
          }))
        }}
        tableState={{
          search: tableFilter.queryValue,
          pagination: {
            page: tableFilter.current,
            size: tableFilter.pageSize,
          },
        }}
        pageSizes={[10, 20, 30]}
      />
      {userModal.open && (
        <UserModal
          open={userModal.open}
          onClose={(e) => setUserModal({ open: e, editData: null })}
          editData={userModal.editData}
        />
      )}
    </div>
  )
}
export default UserPage
