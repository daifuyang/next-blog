import api from "@/app/lib/response";
import { NextRequest } from "next/server";
import { getUserById, updateUser } from "@/app/model/user";
import { save } from "../route";
import { now } from "@/app/lib/date";

// 获取用户
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const user = await getUserById(id);
  if (!user) {
    return api.error("用户不存在或已被删除！");
  }
  return api.success("获取成功！", user);
}

// 更新用户
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const user = await getUserById(id);
  if (!user) {
    return api.error("用户不存在或已被删除！");
  }
  return await save(request, id);
}

// 删除用户
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const user = await getUserById(id);
  if (!user) {
    return api.error("用户不存在或已被删除！");
  }
  const delUser = await updateUser(id, { deletedAt: now() });
  return api.success("删除成功！", delUser);
}
