import bcrypt from "bcrypt";
import { now } from "@/app/lib/date";
import api from "@/app/lib/response";
import { createUser, getTotal, getUserList, updateUser } from "@/app/model/user";
import { NextRequest } from "next/server";
import _ from "lodash";
import { Prisma } from "@prisma/client";

interface UserQuery {
  userType?: number;
  loginName: string;
  nickname?: string;
  realname?: string;
  password: string;
  phoneNumber: string;
  email?: string;
  gender?: number;
  avatar?: string;
  remark?: string;
}
// 获取用户列表
export async function GET(request: NextRequest) {
  // 获取分页参数
  const current = request.nextUrl.searchParams.get("current") || "1";
  const pageSize = request.nextUrl.searchParams.get("pageSize") || "10";

  const query = {
    userType: 1
  };

  const list = await getUserList(current, pageSize, query);

  let pagination:
    | {
        current: number;
        pageSize: number;
        data: any;
      }
    | any = {};

  if (pageSize !== "0") {
    const total = await getTotal(query);
    pagination.current = Number(current);
    pagination.pageSize = Number(pageSize);
    pagination.total = total;
    pagination.data = list;
  } else {
    pagination = list;
  }

  return api.success("获取成功！", pagination);
}

export async function save(request: NextRequest, id: string = "") {
  const json: UserQuery = await request.json();
  const { loginName, password, phoneNumber } = json;
  if (!_.trim(loginName) && !_.trim(phoneNumber)) {
    return api.error("用户名和手机号不能同时为空！");
  }

  // 查询当前登录名是否存在

  // 查询手机号是否存在

  let { DEFAULT_PASSWORD = "123456" } = process.env;
  if (password) {
    DEFAULT_PASSWORD = password;
  }

  const hashPwd = bcrypt.hashSync(DEFAULT_PASSWORD, bcrypt.genSaltSync(10));

  // 对必填字段进行验证
  const formData = {
    ...json,
    password: hashPwd,
    createId: 1,
    creator: "admin",
    updateId: 1,
    updater: "admin",
    createdAt: now(),
    updatedAt: now()
  };

  if (_.trim(id)) {
    const user = await updateUser(id,formData as Prisma.cmsUserCreateInput);
    return api.success("更新成功！", user);    
  } else {
    const user = await createUser(formData as Prisma.cmsUserCreateInput);
    return api.success("创建成功！", user);
  }
}

// 创建用户
export async function POST(request: NextRequest) {
    return await save(request)
}
