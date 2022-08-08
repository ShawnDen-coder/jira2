import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useDebounce, useDocumentTitle } from "../../utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProject } from "../../utils/project";
import { useUsers } from "../../utils/users";
import { useProjectsSearchParams } from "./util";

export const ProjectListScreen = () => {
  useDocumentTitle("项目列表", false);

  // 基本类型、组件状态、可以放到依赖里，非组件状态的对象，不可以放到依赖里
  const [param, setParam] = useProjectsSearchParams();

  const { isLoading, error, data: list } = useProject(useDebounce(param, 200));
  const { data: users } = useUsers();

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

ProjectListScreen.whyDidYouRender = true;

const Container = styled.div`
  padding: 3.2rem;
`;
