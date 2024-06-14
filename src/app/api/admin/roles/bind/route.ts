import { DO_ERROR, DO_SUCCESS, USER_NOT_FOUND, ROLE_NOT_FOUND, ROLE_EMPTY } from "@/app/api/const";
import api from "@/app/lib/response";
import { bindRoleByUser, getRoleById } from "@/app/model/role";
import { getUserById } from "@/app/model/user";
import { NextRequest } from "next/server";

interface BindJson {
  userId: number;
  rolesId: number[];
}

// 绑定用户关联角色
// TODO 改成批量绑定逻辑
export async function POST(request: NextRequest) {
  const json: BindJson = await request.json();
  const { userId, rolesId = [] } = json;

  if (!userId) {
    return api.error(USER_NOT_FOUND);
  }

  if (!(rolesId instanceof Array)) {
    return api.error(ROLE_EMPTY);
  }

  // 判断绑定的userId是否存在
  const user = await getUserById(`${userId}`);
  if (!user) {
    return api.error(USER_NOT_FOUND);
  }

  // 判断绑定的roleId是否存在
  for (const roleId of rolesId) {
    const role = await getRoleById(`${roleId}`);
    if (!role) {
      return api.error(`角色${roleId}不存在！`);
    }
  }

  const userRole = await bindRoleByUser(userId, rolesId);
  if (userRole) {
    return api.success(DO_SUCCESS);
  }
  return api.error(DO_ERROR);
}
