import api from "@/app/lib/response";

// 获取用户列表
export function GET() {
  return api.success("获取成功！");
}

// 创建用户
export function POST() {
  return api.success("创建成功！");
}