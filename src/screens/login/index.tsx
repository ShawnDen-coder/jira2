import React, { FormEvent } from "react";

// 定义数据链接
const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  // 这种类型标注是一个interface的一个快速写法
  const login = (param: { username: string; password: string }) => {
    // 这里使用qs对对象进行参数化解析 会将对象解析成 key=value&key=value
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (respone) => {
      // 当请求数据返回ok的状态的时候
      if (respone.ok) {
        //setList(await respone.json());
      }
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 阻止表单提交的默认行为
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"}></input>
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"}></input>
      </div>
      <button type="submit">登陆</button>
    </form>
  );
};
