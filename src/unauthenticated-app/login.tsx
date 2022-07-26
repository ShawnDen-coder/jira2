import React from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input } from "antd";
import { LoginButton } from "./index";
import { useAsync } from "../utils/use-async";

export const LoginScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  // 这种类型标注是一个interface的一个快速写法
  const { login } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });

  const handleSubmit = (values: { username: string; password: string }) => {
    run(login(values)).catch(onError);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" type="text" id={"username"}></Input>
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder="密码" type="password" id={"password"}></Input>
      </Form.Item>
      <Form.Item>
        <LoginButton loading={isLoading} htmlType={"submit"} type="primary">
          登陆
        </LoginButton>
      </Form.Item>
    </Form>
  );
};
