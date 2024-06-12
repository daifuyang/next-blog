import { Prisma, cmsUser } from "@prisma/client";
import prisma from "../lib/prisma";
import redis from "../lib/redis";
import _ from "lodash";

const userIdKey = `nextblog:user:id:`;

// 获取总用户数
export async function getTotal(where: Prisma.cmsUserWhereInput = {}, tx = prisma) {
  return await tx.cmsUser.count({
    where: {
      ...where,
      deletedAt: 0
    }
  });
}

// 获取用户列表
export async function getUserList(
  current: string,
  pageSize: string,
  where: Prisma.cmsUserWhereInput = {},
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

  return await tx.cmsUser.findMany({
    ...query,
    where: {
      ...where,
      deletedAt: 0
    }
  });
}

// 创建一个用户
export async function createUser(data: Prisma.cmsUserCreateInput, tx = prisma) {
  return await tx.cmsUser.create({
    data
  });
}

// 更新一个用户
export async function updateUser(id: string, data: Prisma.cmsUserUpdateInput, tx = prisma) {

    const key = `${userIdKey}${id}`;
    redis.del(key);

    return await tx.cmsUser.update({
        where: {
            id: Number(id)
        },
        data
    })
}

// 根据id获取用户信息
export async function getUserById(id: string) {
  const key = `${userIdKey}${id}`;
  const cacahe = await redis.get(key);
  let user: cmsUser | null = null;
  if (cacahe) {
    user = JSON.parse(cacahe);
  } else {
    user = await prisma.cmsUser.findFirst({
      where: {
        id: Number(id),
        deletedAt: 0
      }
    });
    if (user) {
      redis.set(key, JSON.stringify(user));
    }
  }
  return user;
}
