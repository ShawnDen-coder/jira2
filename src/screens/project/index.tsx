import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import { KanbanScreen } from "../Kanban";
import { EpicScreen } from "../epic";

export const ProjectScreen = () => {
  return (
    <>
      <h1>ProjectScreen</h1>
      <Link to={"kanban"}>看板</Link>
      <Link to={"epic"}>任务组</Link>
      <Routes>
        <Route index element={<KanbanScreen />}></Route>
        <Route path={"kanban"} element={<KanbanScreen />}></Route>
        <Route path={"epic"} element={<EpicScreen />}></Route>
      </Routes>
    </>
  );
};
