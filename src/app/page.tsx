import List from "@/app/ui/list";
import Pagination from "./ui/pagination";
import Recommend from "./ui/widget/recommend";
import Category from "./ui/widget/category";
import Tag from "./ui/widget/tag";

export default function Home() {
  const data = [
    {
      title: "Next.js 入门教程",
      desc: "学习如何使用 Next.js 构建你的第一个服务器渲染的 React 应用。"
    },
    {
      title: "深入了解 Next.js 的静态生成",
      desc: "了解如何使用 Next.js 的静态生成功能提升网站性能和 SEO。"
    },
    {
      title: "Next.js 动态路由指南",
      desc: "掌握 Next.js 动态路由的使用技巧，创建更灵活的应用。"
    },
    {
      title: "使用 Next.js 创建 API 路由",
      desc: "探索在 Next.js 中创建和使用 API 路由的方法。"
    },
    {
      title: "优化你的 Next.js 应用",
      desc: "学习优化 Next.js 应用性能的最佳实践和策略。"
    },
    {
      title: "Next.js 与 Tailwind CSS 集成",
      desc: "结合 Next.js 和 Tailwind CSS 构建美观且高效的用户界面。"
    },
    {
      title: "Next.js 应用的安全性",
      desc: "了解如何保护你的 Next.js 应用免受常见安全威胁。"
    },
    {
      title: "在 Next.js 中实现国际化",
      desc: "学习如何在 Next.js 应用中添加多语言支持。"
    },
    {
      title: "从 React 迁移到 Next.js",
      desc: "了解从 React 迁移到 Next.js 的步骤和注意事项。"
    },
    {
      title: "Next.js 的部署与优化",
      desc: "掌握将 Next.js 应用部署到生产环境并进行优化的方法。"
    }
  ];

  const category = [
    {
      id: 1,
      title: "React",
      desc: "",
      children: [
        {
          id: 11,
          title: "状态管理",
          desc: "",
          children: [
            {
              id: 111,
              title: "Redux",
              desc: "一个用于JavaScript应用的可预测状态容器。"
            },
            {
              id: 112,
              title: "MobX",
              desc: "简单、可扩展的状态管理。"
            }
          ]
        },
        {
          id: 12,
          title: "组件库",
          desc: "",
          children: [
            {
              id: 121,
              title: "Material-UI",
              desc: "用于更快更容易的Web开发的React组件。"
            },
            {
              id: 122,
              title: "Ant Design",
              desc: "具有自然和确定性价值的设计系统，用于提升企业应用的用户体验。"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Go",
      desc: "",
      children: [
        {
          id: 21,
          title: "Web框架",
          desc: "",
          children: [
            {
              id: 211,
              title: "Gin",
              desc: "一个用Go编写的Web框架。"
            },
            {
              id: 212,
              title: "Echo",
              desc: "高性能、可扩展的简约Go Web框架。"
            }
          ]
        },
        {
          id: 22,
          title: "数据库驱动",
          desc: "",
          children: [
            {
              id: 221,
              title: "GORM",
              desc: "一个出色的Golang ORM库。"
            },
            {
              id: 222,
              title: "MongoDB驱动",
              desc: "MongoDB的Go驱动程序。"
            }
          ]
        }
      ]
    }
  ];

  const tags = [
    {
      id: 1,
      name: "React"
    },
    {
      id: 2,
      name: "React Hooks"
    },
    {
      id: 3,
      name: "Redux"
    },
    {
      id: 4,
      name: "MobX"
    },
    {
      id: 5,
      name: "Material-UI"
    },
    {
      id: 6,
      name: "Ant Design"
    },
    {
      id: 7,
      name: "React Router"
    },
    {
      id: 8,
      name: "Next.js"
    },
    {
      id: 9,
      name: "Create React App"
    },
    {
      id: 10,
      name: "Go"
    },
    {
      id: 11,
      name: "Gin"
    },
    {
      id: 12,
      name: "Echo"
    },
    {
      id: 13,
      name: "GORM"
    },
    {
      id: 14,
      name: "MongoDB Driver"
    },
    {
      id: 15,
      name: "Go Modules"
    },
    {
      id: 16,
      name: "Go Concurrency"
    },
    {
      id: 17,
      name: "Go Testing"
    },
    {
      id: 18,
      name: "Go WebAssembly"
    }
  ];

  return (
    <div className="max-w-container m-auto">
      <div className="flex flex-row justify-evenly">
        <main className="max-w-[728px] min-w-[728px] flex-1 block">
          <List data={data} />
          <Pagination />
        </main>
        <div className="max-w-[368px] min-w-[368px] border-l pl-10 pr-6 border-custom-gray">
          <div className="sticky top-0 z-40 mt-10">
            <Recommend data={data} />
            <Category data={category} />
            <Tag data={tags} />
          </div>
        </div>
      </div>
    </div>
  );
}
