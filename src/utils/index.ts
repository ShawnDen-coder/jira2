import { useEffect, useRef, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

// 在一个函数里改变传入的对象是不好的
export const cleanObject = (object: { [key: string]: unknown }) => {
  // 这里的object可能也是函数，不能正常的表示对象，琐细我们要细致约束
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isVoid(value)) {
      // 当value没有实际的值的时候 去掉这个参数，这里对0进行了优化
      // TODO 需要使用范型修复
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();

    // TODO 依赖项里加上callback会造成无限循环，这个和usecallback和useMemo有关系
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number): V => {
  // 这里使用范型来调整返回函数返回的
  // 创建一个debounce 的状态
  const [debounceValue, setDebounceValue] = useState(value);

  // 使用副作用更新debounce的状态
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 当value和delay参数变化，就重新设置debounce的值，并清空delay的值
    return () => clearTimeout(timeout);
    // 每次在上一useEffect执行完毕后再运行
  }, [value, delay]);
  return debounceValue;
};

export const useDocumentTitle = (
  title: string,
  keepOnUnmount: boolean = true
) => {
  const oldTitle = useRef(document.title).current;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};

// 重制路由
export const resetRoute = () => (window.location.href = window.location.origin);
