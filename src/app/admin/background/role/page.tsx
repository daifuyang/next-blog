"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {Skeleton} from "antd";

export default function Admin() {
  const router = useRouter()
  useEffect(() =>{
    router.push("/admin/background/role/list")
  } ,[])
  return <Skeleton />
}
