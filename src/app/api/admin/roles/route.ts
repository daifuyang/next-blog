import { NextRequest } from "next/server";
import api from "@/app/lib/response";
import {
  createRole,
  getRoleById,
  getRoleByName,
  getRoleList,
  getRoleTotal,
  updateRole
} from "@/app/model/role";
import { Prisma } from "@prisma/client";
import { now } from "@/app/lib/date";
import {
  CREATE_SUCCESS,
  GET_SUCCESS,
  ROLE_EXISTS,
  ROLE_NOT_FOUND,
  UPDATE_SUCCESS
} from "../../const";

interface RoleJson {
  name: string;
  description: string;
}
// 获取用户列表
export async function GET(request: NextRequest) {
  // 获取分页参数
  const current = request.nextUrl.searchParams.get("current") || "1";
  const pageSize = request.nextUrl.searchParams.get("pageSize") || "10";

  const query = {};

  const list = await getRoleList(current, pageSize, query);

  let pagination:
    | {
        current: number;
        pageSize: number;
        data: any;
      }
    | any = {};

  if (pageSize !== "0") {
    const total = await getRoleTotal(query);
    pagination.current = Number(current);
    pagination.pageSize = Number(pageSize);
    pagination.total = total;
    pagination.data = list;
  } else {
    pagination = list;
  }

  return api.success(GET_SUCCESS, pagination);
}

export async function save(request: NextRequest, id: string = "") {
  const json: RoleJson = await request.json();
  const { name, description } = json;

  if (id) {
    const one = await getRoleById(id);
    if (!one) {
      return api.error(ROLE_NOT_FOUND);
    }
  }

  const exist = await getRoleByName(name);

  if (id) {
    if (exist && exist.id !== Number(id)) {
      return api.error(ROLE_EXISTS);
    }
  } else if (exist) {
    return api.error(ROLE_EXISTS);
  }

  const data: Prisma.cmsRoleCreateInput = {
    name,
    description,
    createId: 1,
    creator: "admin",
    updateId: 1,
    updater: "admin",
    createdAt: now(),
    updatedAt: now()
  };

  if (exist) {
    const role = await updateRole(id, data);
    return api.success(UPDATE_SUCCESS, role);
  } else {
    const role = await createRole(data);
    return api.success(CREATE_SUCCESS, role);
  }
}

// 创建用户
export async function POST(request: NextRequest) {
  return await save(request);
}
