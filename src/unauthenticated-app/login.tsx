import React from "react";
import { useAuth } from "../context/auth-context";
import { Form, Input } from "antd";
import { LoginButton } from "./index";

export const LoginScreen = () => {
  // 这种类型标注是一个interface的一个快速写法
  const { login } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
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
        <LoginButton htmlType={"submit"} type="primary">
          登陆
        </LoginButton>
      </Form.Item>
    </Form>
  );
};
