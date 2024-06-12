import { NextRequest } from "next/server";
import api from "@/app/lib/response";


// 获取用户
export function GET(request: NextRequest, { params }: { params: { id: string } }) {
  return api.success("获取成功！");
}

// 更新用户
export function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  return api.success("更新成功！");
}

// 删除用户
export function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  return api.success("删除成功！");
}
