import { Spin } from "antd";
import dynamic from "next/dynamic";
import "./layout.css";
import { headers } from "next/headers";

const AdminLayout = dynamic(() => import("@/app/ui/admin/layout"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        minHeight: "362px"
      }}
    >
      <div className="page-loading-warp">
        <Spin size="large" />
      </div>
      <div className="loading-title">正在加载资源</div>
      <div className="loading-sub-title">初次加载资源可能需要较多时间 请耐心等待</div>
    </div>
  )
});

export default function Layout(props: any) {
  const { children } = props;

  const headersList = headers();
  const pathname = headersList.get("pathname");
  if (pathname === "/admin/user/login") {
    return <>{children}</>;
  }

  return <AdminLayout>{children}</AdminLayout>;
}
