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
