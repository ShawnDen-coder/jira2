import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);

// 在一个函数里改变传入的对象是不好的
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      // 当value没有实际的值的时候 去掉这个参数，这里对0进行了优化
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
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
