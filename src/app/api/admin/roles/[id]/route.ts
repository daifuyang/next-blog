import { NextRequest } from "next/server";
import api from "@/app/lib/response";
import { save } from "../route";
import { getRoleById, updateRole } from "@/app/model/role";
import { now } from "@/app/lib/date";
import { DELETE_SUCCESS, GET_SUCCESS, ROLE_NOT_FOUND } from "@/app/api/const";

// 获取角色
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const role = await getRoleById(params.id);
  if (!role) {
    return api.error(ROLE_NOT_FOUND);
  }
  return api.success(GET_SUCCESS, role);
}

// 更新角色
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  return await save(request, params.id);
}

// 删除角色
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const role = await getRoleById(params.id);
  if (!role) {
    return api.error(ROLE_NOT_FOUND);
  }
  const delRole = await updateRole(params.id, {
    name: role.name,
    deletedAt: now()
  });
  return api.success(DELETE_SUCCESS, delRole);
}
