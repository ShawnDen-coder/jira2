// 登陆状态 app
import React from "react";
import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <PageHeader />
      <button onClick={logout}>登出</button>
      <Main>
        <ProjectListScreen />
      </Main>
    </div>
  );
};

const PageHeader = styled.header`
  background-color: gray;
  height: 6rem;
`;

const Main = styled.main`
  height: calc(100vh - 6rem);
`;
