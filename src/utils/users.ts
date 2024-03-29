import { User } from "../screens/project-list/search-panel";
import { useHttp } from "./http";
import { useAsync } from "./use-async";
import { useEffect } from "react";
import { cleanObject } from "./index";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();

  const { run, ...result } = useAsync<User[]>();

  // 异步请求数据，当param变化的时候
  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
  }, [param]);
  return result;
};
