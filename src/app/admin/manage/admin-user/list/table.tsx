import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import { ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
import Save from "./save";
import { useRef } from "react";

type userItem = {
  id: number;
  loginName: string;
  lastLoginAt: string;
  lastLoginIp: string;
  status: number;
};

const columns: ProColumns<userItem>[] = [
  {
    dataIndex: "id",
    width: 48
  },
  {
    title: "用户名",
    dataIndex: "loginName"
  },
  {
    title: "上次登录时间",
    dataIndex: "lastLoginAt"
  },
  {
    title: "上次登录IP",
    dataIndex: "lastLoginIp"
  },
  {
    disable: true,
    title: "状态",
    dataIndex: "status"
  },
  {
    title: "操作",
    valueType: "option",
    key: "option",
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>
    ]
  }
];

export default function UserTable() {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<userItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params, sort, filter) => {
        return {
          success: false
        }
      }}
    
      rowKey="id"
      search={{
        labelWidth: "auto"
      }}
      options={{
        setting: {
          listsHeight: 400
        }
      }}
     
      pagination={{
        pageSize: 10,
      }}
      dateFormatter="string"
      headerTitle="用户列表"
      toolBarRender={() => [
        <Save>
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef.current?.reload();
          }}
          type="primary"
        >
          新建
        </Button>
        </Save>
      ]}
    />
  );
}
