import React, { useState } from "react";
import SideBar from "../../../components/Layouts/SideBar";
import { superAdminSidebar } from "../../../utils/superAdminSideBar";
import { Cookies } from "react-cookie";
import ListReceiptsForm from "./subComponents/ListReceiptsForm";
const ListReceipt = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const cookies = new Cookies();
  const name = cookies.get("name");
  const role = cookies.get("role");
  return (
    <div>
      <SideBar
        children={<ListReceiptsForm showDrawer={showDrawer} />}
        items={superAdminSidebar}
        heading={"View Buildings"}
        subHeading={"Super Admin Panel"}
        role={role ? role : ""}
        userName={name}
        showDrawer={showDrawer}
        open={open}
        setOpen={setOpen}
      ></SideBar>
    </div>
  );
};

export default ListReceipt;
