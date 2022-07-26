import { SearchPanel } from "./search-panel";
import { List } from "./list";
import React, { useState } from "react";
import { useDebounce, useDocumentTitle } from "../../utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProject } from "../../utils/project";
import { useUsers } from "../../utils/users";

export const ProjectListScreen = () => {
  // 这个是搜索框的状态
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debounceParam = useDebounce(param, 200);

  const { isLoading, error, data: list } = useProject(debounceParam);
  const { data: users } = useUsers();

  useDocumentTitle("项目列表", false);

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel
        users={users || []}
        param={param}
        setParam={setParam}
      ></SearchPanel>

      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List
        loading={isLoading}
        users={users || []}
        dataSource={list || []}
      ></List>
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
