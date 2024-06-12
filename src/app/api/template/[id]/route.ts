import api from "@/app/lib/response";

// 获取用户
export function GET(req: Request, { params }: { params: { id: string } }) {
  return api.success("获取成功！");
}

// 更新用户
export function PUT(req: Request, { params }: { params: { id: string } }) {
  return api.success("更新成功！");
}

// 删除用户
export function DELETE(req: Request, { params }: { params: { id: string } }) {
  return api.success("删除成功！");
}
