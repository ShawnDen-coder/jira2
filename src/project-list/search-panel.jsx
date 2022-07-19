import React from "react";

export const SearchPanel = ({ users, param, setParam }) => {
  // 对传递的props进行解构

  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(event) => setParam({ ...param, name: event.target.value })}
        ></input>
        <select
          value={param.personId}
          onChange={(event) =>
            setParam({ ...param, personId: event.target.value })
          }
        >
          <option value={""}>负责人</option>
          {/* 这里通过循环users的状态生成多个用户的select */}
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
