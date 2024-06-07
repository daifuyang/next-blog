"use client";

import {
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined
} from "@ant-design/icons";
import type { ProSettings } from "@ant-design/pro-components";
import {
  ProConfigProvider,
  ProLayout,
  SettingDrawer
} from "@ant-design/pro-components";
import { ConfigProvider, Dropdown, Input, theme } from "antd";
import React, { useState } from "react";
import defaultProps from "./_defaultProps";
import Footer from "./footer";
import { usePathname, useRouter } from "next/navigation";

const SearchInput = () => {
  const { token } = theme.useToken();
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: "flex",
        alignItems: "center",
        marginInlineEnd: 24
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
          backgroundColor: token.colorBgTextHover
        }}
        prefix={
          <SearchOutlined
            style={{
              color: token.colorTextLightSolid
            }}
          />
        }
        placeholder="搜索方案"
        variant="borderless"
      />
      <PlusCircleFilled
        style={{
          color: token.colorPrimary,
          fontSize: 24
        }}
      />
    </div>
  );
};

export default function Layout(props: any) {
  const { children } = props;

  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: "mix",
    splitMenus: false
  });

  const pathname = usePathname()

  const router = useRouter()
  
  if (typeof document === "undefined") {
    return <div />;
  }
  return (
    <div
      id="pro-layout"
      style={{
        height: "100vh",
        overflow: "auto"
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById("pro-layout") || document.body;
          }}
        >
          <ProLayout
            title={process.env.NEXT_PUBLIC_ADMIN_TITLE}
            bgLayoutImgList={[
              {
                src: "/images/nav/bg1.png",
                left: 85,
                bottom: 100,
                height: "303px"
              },
              {
                src: "/images/nav/bg1.png",
                bottom: -68,
                right: -45,
                height: "303px"
              },
              {
                src: "/images/nav/bg2.png",
                bottom: 0,
                left: 0,
                width: "331px"
              }
            ]}
            {...defaultProps}
            location={{
              pathname
            }}
            token={{
              header: {
                colorBgMenuItemSelected: "rgba(0,0,0,0.04)"
              }
            }}
            appList={[]}
            siderMenuType="sub"
            menu={{
              collapsedShowGroupTitle: true
            }}
            avatarProps={{
              src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
              size: "small",
              title: "七妮妮",
              render: (props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: "logout",
                          icon: <LogoutOutlined />,
                          label: "退出登录"
                        }
                      ]
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              }
            }}
            actionsRender={(props) => {
              if (props.isMobile) return [];
              if (typeof window === "undefined") return [];
              return [
                props.layout !== "side" && document.body.clientWidth > 1400 ? (
                  <SearchInput />
                ) : undefined,
                // <InfoCircleFilled key="InfoCircleFilled" />,
                // <QuestionCircleFilled key="QuestionCircleFilled" />,
                // <GithubFilled key="GithubFilled" />
              ];
            }}
            headerTitleRender={(logo, title, _) => {
              const defaultDom = (
                <a>
                  {logo}
                  {title}
                </a>
              );
              if (typeof window === "undefined") return defaultDom;
              if (document.body.clientWidth < 1400) {
                return defaultDom;
              }
              if (_.isMobile) return defaultDom;
              return <>{defaultDom}</>;
            }}
            footerRender={Footer}
            menuProps={{
              onSelect: function({ key }) {
                router.push(key);
              }
            }}  
            {...settings}
          >
            {children}

            <SettingDrawer
              pathname={pathname}
              enableDarkTheme
              getContainer={(e: any) => {
                if (typeof window === "undefined") return e;
                return document.getElementById("test-pro-layout");
              }}
              settings={settings}
              onSettingChange={(changeSetting) => {
                setSetting(changeSetting);
              }}
              disableUrlParams={false}
            />
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
}
