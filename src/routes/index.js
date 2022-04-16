import React from "react";
import { Routes, Route } from "react-router-dom";
import WorkflowDetails from "../pages/WorkflowRequest";

export default function RoutesFile() {
  return (
    <Routes>
      <Route path="/" element={<WorkflowDetails />} />
    </Routes>
  );
}
