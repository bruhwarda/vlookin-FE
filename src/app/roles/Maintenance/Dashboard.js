import React, { useState } from "react";
import SideBar from "../../components/Layouts/SideBar";
import { getItem } from "../../utils/functions";
import { FaThList, FaWarehouse, FaBuilding } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { routePaths } from "../../routes/config";
import MobileHeader from "../../components/Header/MobileHeader";
import { useMediaQuery } from "react-responsive";

const MaintanceDashboard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const items = [
    getItem("Maintenance", "1", <FaWarehouse />, [
      getItem("List Complaints", "maintenanceList", <FaThList />),
    ]),
  ];
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <div>
      {isMobile ? (
        <MobileHeader route={routePaths.Admin.login} showDrawer={showDrawer} />
      ) : (
        <SideBar children={data} items={items} />
      )}
    </div>
  );
};

export default MaintanceDashboard;
