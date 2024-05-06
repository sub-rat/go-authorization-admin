"use client"
import React, { useState } from "react"

import { useRoleServiceGetApiV1Roles } from "@/services/generated/queries"

import RoleModal from "./componesnts/modal"
import { rolesColumn } from "./constant"
import { IRoleModalState } from "./types"
import { Button } from "../../../common/button/Button"
import Table from "../../../common/table/Table"

const RolesPage = () => {
  const [userModal, setUserModal] = useState<IRoleModalState>({
    open: false,
    editData: null,
  })
  const [tableFilter, setTableFilter] = useState({
    queryValue: "",
    current: 1,
    pageSize: 20,
  })

  const { data: roleList, isLoading: roleLoading } =
    useRoleServiceGetApiV1Roles({ ...tableFilter })

  return (
    <div>
      <Button onClick={() => setUserModal({ open: true })}>Add Role</Button>
      <Table
        columns={rolesColumn(setUserModal)}
        data={roleList?.data?.list ?? []}
        isLoading={roleLoading}
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
        <RoleModal
          open={userModal.open}
          onClose={(e) => setUserModal({ open: e, editData: null })}
          editData={userModal.editData}
        />
      )}
    </div>
  )
}
export default RolesPage
