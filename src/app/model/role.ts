import { Prisma, cmsRole } from "@prisma/client";
import prisma from "../lib/prisma";
import redis from "../lib/redis";

export const roleIdKey = `nextblog:role:id:`;
export const roleNameKey = `nextblog:role:name:`;

// 获取总角色数
export async function getRoleTotal(where: Prisma.cmsRoleWhereInput = {}, tx = prisma) {
  return await tx.cmsRole.count({
    where: {
      ...where,
      deletedAt: 0
    }
  });
}

// 获取角色列表
export async function getRoleList(
  current: string,
  pageSize: string,
  where: Prisma.cmsRoleWhereInput = {},
  tx = prisma
) {
  if (!current) {
    current = "1";
  }

  if (!pageSize) {
    pageSize = "10";
  }

  const query: {
    skip?: number;
    take?: number;
  } = {};

  if (pageSize && Number(pageSize) > 0) {
    // 分页参数处理
    const skip = (Number(current) - 1) * Number(pageSize);
    const take = Number(pageSize);
    query.skip = skip;
    query.take = take;
  }

  return await tx.cmsRole.findMany({
    ...query,
    where: {
      ...where,
      deletedAt: 0
    }
  });
}

// 创建一个用户角色
export async function createRole(data: Prisma.cmsRoleCreateInput, tx = prisma) {
  return await tx.cmsRole.create({
    data
  });
}

// 更新一个用户
export async function updateRole(id: string, data: Prisma.cmsRoleUpdateInput, tx = prisma) {
  const role = await tx.cmsRole.update({
    where: {
      id: Number(id)
    },
    data
  });
  if (role) {
    const key = `${roleIdKey}${id}`;
    redis.del(key);
    clearRoleCacheByName(data.name as string);
  }
  return role;
}

// 根据id获取用户信息
export async function getRoleById(id: string) {
  const key = `${roleIdKey}${id}`;
  const cacahe = await redis.get(key);
  let role: cmsRole | null = null;
  if (cacahe) {
    role = JSON.parse(cacahe);
  } else {
    role = await prisma.cmsRole.findUnique({
      where: {
        id: Number(id),
        deletedAt: 0
      }
    });
    if (role) {
      redis.set(key, JSON.stringify(role));
    }
  }
  return role;
}

// 根据name清空redis缓存
export function clearRoleCacheByName(name: string) {
  const key = `${roleNameKey}${name}`;
  redis.del(key);
}

// 根据name获取用户信息
export async function getRoleByName(name: string) {
  const key = `${roleNameKey}${name}`;
  const cacahe = await redis.get(key);
  let role: cmsRole | null = null;
  if (cacahe) {
    role = JSON.parse(cacahe);
  } else {
    role = await prisma.cmsRole.findFirst({
      where: {
        name: {
          contains: name
        },
        deletedAt: 0
      }
    });
    if (role) {
      redis.set(key, JSON.stringify(role));
    }
  }
  return role;
}

// 绑定用户和角色的关系
export async function bindRoleByUser(userId: number, roleId: number, tx = prisma) {
  return await tx.cmsUserRole.create({
    data: {
      userId,
      roleId
    }
  });
}
