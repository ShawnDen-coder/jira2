import React from "react";
export const List = ({ list, users }) => {
  return (
    <table>
      <thead>
        <th>名称</th>
        <th>负责人</th>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {/*  这里的find 容易返回undefined 要进行判断处理*/}
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
