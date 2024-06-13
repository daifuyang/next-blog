import {
  ModalForm,
  ProForm,
  ProFormRadio,
  ProFormText,
  ProFormTextArea,
  ProFormTreeSelect
} from "@ant-design/pro-components";
import { Form, message } from "antd";
import { useEffect, useState } from "react";

interface FormProps {
  title: string;
}

interface Props {
  title: string;
  onFinish?: () => void;
  children?: JSX.Element | undefined; // 或者具体的组件类型
  initialValues?: any; // 根据实际情况指定类型
}

export default function Save(props: Props) {
  const { onFinish, children, initialValues, title } = props;
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm<FormProps>();

  useEffect(() => {
    if (form && initialValues?.id && open) {
    }
  }, [form, initialValues?.id, open]);

  return (
    <ModalForm<FormProps>
      title={title}
      trigger={children}
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
      }}
      form={form}
      modalProps={{
        destroyOnClose: true
      }}
      initialValues={initialValues}
      onFinish={async (values: any) => {
        const { id = 0 } = values;
        let res: any = null;
        if (res.code === 1) {
          if (onFinish) {
            onFinish();
          }

          return true;
        }
        message.error(res.msg);
        return false;
      }}
    >
      <ProForm.Group>
        <ProFormText width="md" name="userName" label="用户昵称" placeholder="请输入用户昵称" />

        <ProFormTreeSelect
          width="md"
          name="deptId"
          label="归属部门"
          placeholder="请选中归属部门"
          fieldProps={{
            fieldNames: {
              label: "deptName",
              value: "deptId"
            }
          }}
          request={async () => {
            const res = await getDepartments();
            if (res.code === 1) {
              return res.data;
            }
            return [];
          }}
        ></ProFormTreeSelect>
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="phoneNumber"
          label="手机号"
          placeholder="请输入名称"
          rules={[
            {
              type: "method",
              validator: (rule, value, callback) => {
                if (!!value) {
                  const phoneNumberRegex = /^1[3456789]\d{9}$/;
                  // 示例用法
                  if (!phoneNumberRegex.test(value)) {
                    callback("请输入正确的手机号");
                  } else {
                    callback();
                  }
                }
              }
            }
          ]}
        />
        <ProFormText
          width="md"
          label="邮箱"
          name="email"
          placeholder="请输入邮箱"
          rules={[
            {
              type: "method",
              validator: (rule, value, callback) => {
                if (!!value) {
                  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                  // 示例用法
                  if (!emailRegex.test(value)) {
                    callback("请输入正确的邮箱  ");
                  } else {
                    callback();
                  }
                }
              }
            }
          ]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          label="登录账号"
          name="loginName"
          placeholder="请输入登录账号"
          rules={[
            {
              required: true,
              message: "登录账号不能为空"
            }
          ]}
        />
        <ProFormText.Password
          width="md"
          name="password"
          label="登录密码"
          placeholder="请输入登录密码"
          rules={[
            {
              type: "method",
              validator(rule, value, callback) {
                if (value.length < 6) {
                  callback("密码长度不能小于6位");
                } else {
                  callback();
                }
              }
            }
          ]}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          width="md"
          name="gender"
          options={[
            {
              label: "男",
              value: 1
            },
            {
              label: "女",
              value: 0
            },
            {
              label: "保密",
              value: 2
            }
          ]}
          label="性别"
          placeholder="请选择性别"
        />
        <ProFormRadio.Group
          width="md"
          name="status"
          label="状态"
          options={[
            {
              label: "正常",
              value: 1
            },
            {
              label: "停用",
              value: 0
            }
          ]}
        />
      </ProForm.Group>
      <ProFormCheckbox.Group
        name="postIds"
        label="岗位"
        request={async () => {
          const res = await getPosts({ pageSize: 0 });
          if (res.code === 1) {
            return res.data?.map((item: any) => ({
              label: item.postName,
              value: item.postCode
            }));
          }
          return [];
        }}
      />
      <ProFormCheckbox.Group
        formItemProps={{ className: styles.formItem }}
        name="roleIds"
        label="角色"
        request={async () => {
          const res = await getRoles({ pageSize: 0 });
          if (res.code === 1) {
            return res.data?.map((item: any) => ({
              label: item.roleName,
              value: item.roleId
            }));
          }
          return [];
        }}
      />
      <ProFormTextArea
        formItemProps={{
          style: {
            width: "688px"
          }
        }}
        name="remark"
        label="备注"
      />
    </ModalForm>
  );
}
