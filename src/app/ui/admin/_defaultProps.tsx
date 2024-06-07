import {
  SettingOutlined,
  UserOutlined,
  DashboardOutlined,
  FileTextOutlined
} from "@ant-design/icons";

const routes = {
  route: {
    path: "/admin",
    name: "首页",
    routes: [
      {
        path: "/admin/dashboard",
        name: "系统概况",
        icon: <DashboardOutlined />
      },
      {
        path: "/admin/article",
        name: "文章管理",
        icon: <FileTextOutlined />,
        routes: [
          {
            path: "/admin/article/article",
            name: "文章内容",
            routes: [
              {
                path: "/admin/article/article/list",
                name: "文章列表",
                hideInMenu: true
              }
            ]
          },
          {
            path: "/admin/article/category",
            name: "文章分类",
            routes: [
              {
                path: "/admin/article/category/list",
                name: "分类列表",
                hideInMenu: true
              }
            ]
          }
        ]
      },
      {
        path: "/admin/background",
        name: "后台管理",
        icon: <UserOutlined />,
        routes: [
          {
            path: "/admin/background/admin-user",
            name: "管理员",
            routes: [
              {
                path: "/admin/background/admin-user/list",
                name: "管理员列表",
                hideInMenu: true
              }
            ]
          },
          {
            path: "/admin/background/role",
            name: "角色管理",
            routes: [
              {
                path: "/admin/background/role/list",
                name: "角色列表",
                hideInMenu: true
              }
            ]
          },
          {
            path: "/admin/background/log",
            name: "日志管理",
            routes: [
              {
                path: "/admin/background/log/list",
                name: "日志列表",
                hideInMenu: true
              }
            ]
          }
        ]
      },
      {
        name: "系统设置",
        path: "/admin/settings",
        icon: <SettingOutlined />,
        routes: [
          {
            path: "/admin/settings/assets",
            name: "素材管理",
            routes: [
              {
                path: "/admin/settings/assets/list",
                name: "素材列表",
                hideInMenu: true
              }
            ]
          }
        ]
      }
    ]
  },
  location: {
    pathname: "/"
  },
  appList: [
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      title: "Ant Design",
      desc: "杭州市较知名的 UI 设计语言",
      url: "https://ant.design"
    },
    {
      icon: "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",
      title: "AntV",
      desc: "蚂蚁集团全新一代数据可视化解决方案",
      url: "https://antv.vision/",
      target: "_blank"
    },
    {
      icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
      title: "Pro Components",
      desc: "专业级 UI 组件库",
      url: "https://procomponents.ant.design/"
    },
    {
      icon: "https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png",
      title: "umi",
      desc: "插件化的企业级前端应用框架。",
      url: "https://umijs.org/zh-CN/docs"
    },

    {
      icon: "https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png",
      title: "qiankun",
      desc: "可能是你见过最完善的微前端解决方案🧐",
      url: "https://qiankun.umijs.org/"
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",
      title: "语雀",
      desc: "知识创作与分享工具",
      url: "https://www.yuque.com/"
    },
    {
      icon: "https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg",
      title: "Kitchen ",
      desc: "Sketch 工具集",
      url: "https://kitchen.alipay.com/"
    },
    {
      icon: "https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png",
      title: "dumi",
      desc: "为组件开发场景而生的文档工具",
      url: "https://d.umijs.org/zh-CN"
    }
  ]
};

export default routes;