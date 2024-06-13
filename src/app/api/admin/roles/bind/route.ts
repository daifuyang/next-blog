import { DO_ERROR, DO_SUCCESS, USER_NOT_FOUND, ROLE_NOT_FOUND } from "@/app/api/const";
import api from "@/app/lib/response";
import { bindRoleByUser, getRoleById } from "@/app/model/role";
import { getUserById } from "@/app/model/user";
import { NextRequest } from "next/server";

interface BindJson {
  userId: number;
  roleId: number;
}

// 绑定用户关联角色
// TODO 改成批量绑定逻辑
export async function POST(request: NextRequest) {
  const json: BindJson = await request.json();
  const { userId, roleId } = json;

  if (!userId) {
    return api.error(USER_NOT_FOUND);
  }

  if (!roleId) {
    return api.error(ROLE_NOT_FOUND);
  }

  // 判断绑定的userId是否存在
  const user = await getUserById(`${userId}`);
  if (!user) {
    return api.error(USER_NOT_FOUND);
  }

  const role = await getRoleById(`${roleId}`);
  if (!role) {
    return api.error(ROLE_NOT_FOUND);
  }
  const userRole = await bindRoleByUser(userId, roleId);
  if (userRole) {
    return api.success(DO_SUCCESS);
  }
  return api.error(DO_ERROR);
}
