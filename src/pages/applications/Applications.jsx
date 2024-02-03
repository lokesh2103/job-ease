import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ApplicationHeader from "./../../components/dashboard/rightSideCompoents/applicationHeader/ApplicationHeader";

import "./Applications.scss";
import Coloumns from "../../components/dashboard/rightSideCompoents/Columns/Coloumns";
import List from "../../components/dashboard/rightSideCompoents/list/List";
const Applications = () => {
  const selectedToggle = useSelector((state) => state.applications.toggle);

  return (
    <div className="applicationsPage">
      <ApplicationHeader />
      {selectedToggle == "list" ? <List /> : <Coloumns />}
    </div>
  );
};

export default Applications;
