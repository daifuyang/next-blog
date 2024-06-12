import { NextRequest } from "next/server";
import api from "@/app/lib/response"

export function GET(request: NextRequest) {
   return api.success("获取成功！",{"hello": "next blog"})
}