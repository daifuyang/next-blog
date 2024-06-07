import { GithubOutlined } from "@ant-design/icons";
import { DefaultFooter } from "@ant-design/pro-components";
import React from "react";

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{background: 'transparent'}}
      copyright={`${new Date().getFullYear()} ${process.env.NEXT_PUBLIC_ADMIN_COPYRIGHT}`}
      links={[]}
    />
  );
};

export default Footer;
