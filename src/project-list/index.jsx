import { SearchPanel } from "./search-panel";
import { List } from "./list";
import React, { useEffect, useState } from "react";
import { cleanObject } from "../utils";
import * as qs from "qs";

// 定义数据链接
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  // 这个是下拉框的用户选项的状态
  const [users, setUsers] = useState([]);

  // 这个是搜索框的状态
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  // 请求结果的列表状态
  const [list, setList] = useState([]);

  // 异步请求数据，当param变化的时候
  useEffect(() => {
    // 这里使用qs对对象进行参数化解析 会将对象解析成 key=value&key=value
    // console.log(`param 后的:${param}`);
    // console.log(`cleanobject 后的:${cleanObject(param)}`);
    // console.log(`拼接完成后的:${qs.stringify(cleanObject(param))}`);
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (respone) => {
        // 当请求数据返回ok的状态的时候
        if (respone.ok) {
          setList(await respone.json());
        }
      }
    );
  }, [param]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (respone) => {
      if (respone.ok) {
        setUsers(await respone.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  );
};
