
import { NextRequest } from "next/server";
import api from "@/app/lib/response";

// 获取用户列表
export async function GET(request: NextRequest) {
  return api.success("获取成功！");
}

export async function save(request: NextRequest, id: string = "") {

}

// 创建用户
export async function POST(request: NextRequest) {
  return api.success("创建成功！");
}