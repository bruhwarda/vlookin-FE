import React, { useEffect, useState } from "react";
import { getItem } from "../../utils/functions";
import SideBar from "../../components/Layouts/SideBar";
import CusTable from "../../components/Table/Table";
import { FaBuilding, FaThList, FaWarehouse } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { MdApartment } from "react-icons/md";
import { RiWalkFill } from "react-icons/ri";
import { BsBuildingFillAdd } from "react-icons/bs";
import axios from "axios";
import { apiRoutes, routePaths } from "../../routes/config";
import { DeleteModal } from "../../components/Modal";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { CustomAlert } from "../../components/Alert";
import { toast } from "react-toastify";

const ListTenant = () => {
  const navigate = useNavigate();
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const [searchQuery, setSearchQuery] = useState("");

  const adminRole = localStorage.getItem("adminRole");

  const items = [
    getItem("Tenant", "1", <FaWarehouse />, [
      getItem("Add Tenant", "addtenant", <HiUserAdd />),
      getItem("List Tenant", "tenantlist", <FaThList />),
    ]),
  ];

  const adminItems = [
    getItem("Visitor", "add_visitor", <RiWalkFill />),
    getItem("Tenant", "2", <FaWarehouse />, [
      getItem("Add Tenant", "addtenant", <HiUserAdd />),
      getItem("List Tenant", "tenantlist", <FaThList />),
    ]),
    getItem("Building", "3", <FaBuilding />, [
      getItem("Add building", "addbuilding", <BsBuildingFillAdd />),
      getItem("List building", "listbuilding", <FaThList />),
      getItem("Add Appartment", "addApartment", <BsBuildingFillAdd />),
    ]),
    getItem("Appartment", "4", <MdApartment />, [
      getItem("List Appartment", "listApartment", <FaThList />),
    ]),
  ];

  const handleEdit = (record) => {
    navigate(`/tenant/edit/${record._id}`);
    localStorage.setItem("tenantData", record);
  };

  const handleDelete = async (record) => {
    try {
      const url = `http://localhost:4000/tenant?id=${record._id}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
      toast.success("Tenant Deleted Successfully");
      setListData((prevData) =>
        prevData.filter((item) => item._id !== record._id)
      );
    } catch (error) {
      toast.error(error);
    }
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "tenantName",
      key: "tenantName",
    },
    {
      title: "Building Name",
      dataIndex: "buildingName",
      key: "buildingName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "MobileNo",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Flat No",
      dataIndex: "flatNo",
      key: "flatNo",
    },
    {
      title: "Office No",
      dataIndex: "officeNo",
      key: "officeNo",
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: "Update",
      key: "Update",
      render: (_, record) => (
        <div className="icon">
          <EditOutlined onClick={() => handleEdit(record)} />
          <DeleteModal handleDelete={() => handleDelete(record)} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiRoutes.getTenant)
      .then((res) => {
        setListData(res.data.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const filteredData = listData.filter((item) =>
    item?.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SideBar
        children={
          <CusTable
            columns={columns}
            data={filteredData ? filteredData : listData}
            heading={"View Tenant"}
            subHeading={"Welcome to Tenant Panel"}
            loading={loading}
            showDrawer={showDrawer}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        }
        items={adminItems}
        showDrawer={showDrawer}
        open={open}
        setOpen={setOpen}
      />
      <CustomAlert />
    </div>
  );
};

export default ListTenant;
