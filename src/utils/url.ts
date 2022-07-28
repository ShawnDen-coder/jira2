/*
 * 返回页面url中指定建的参数值
 * */

import { useSearchParams } from "react-router-dom";

export const useUrlQueryParam = (keys: string[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return [
    keys.reduce((prev, key) => {
      return { ...prev, [key]: searchParams.get(key) || "" };
    }, {} as { [key in string]: string }),
    setSearchParams,
  ] as const; // 在typescript 中，数组内的数据类型应该是一致的，所以会返回 {}[] 作为返回类型，加上const 就不会有这个问题
};
