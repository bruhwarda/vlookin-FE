import React, { useEffect, useState } from "react";
import { FaEye, FaThList } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { RiWalkFill } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router";
import { EditOutlined } from "@ant-design/icons";
import { DeleteModal } from "../../../components/Modal";
import CusTable from "../../../components/Table/Table";
import { apiRoutes, routePaths } from "../../../routes/config";
import { getItem } from "../../../utils/functions";
import SideBar from "../../../components/Layouts/SideBar";
import { superAdminSidebar } from "../../../utils/superAdminSideBar";
import VisitorModal from "../../../components/Modal/VisitorModal";

const SuperAdminListVisitor = () => {
  const [visitor, setVisitor] = useState([
    {
      visitorName: "",
      comments: "",
      buildingName: "",
      flatNo: "",
      email: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  const showDrawer = () => {
    setOpen(true);
  };

  const navigate = useNavigate();

  const handleEdit = (record) => {
    navigate(`/visitor/edit/${record._id}`);
    localStorage.setItem("visitorData", record);
  };

  const handleDelete = async (record) => {
    try {
      const url = `http://localhost:4000/visitor?id=${record._id}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
    } catch (error) {}
  };

  const handleView = (record) => {
    setVisibleModal(true);
    setId(record._id);
    setData(record);
  };

  const columns = [
    {
      title: "Visitor Name",
      dataIndex: "visitorName",
      key: "visitorName",
    },
    {
      title: "Building",
      dataIndex: "buildingName",
      key: "buildingName",
    },
    {
      title: "Date",
      dataIndex: "visitDate",
      key: "visitDate",
    },
    {
      title: "Flat No",
      dataIndex: "flatNo",
      key: "flatNo",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Update",
      key: "Update",
      render: (_, record) => (
        <div className="icon">
          <FaEye onClick={() => handleView(record)} />
          <DeleteModal handleDelete={() => handleDelete(record)} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiRoutes.getVisitor)
      .then((res) => {
        setVisitor(res.data.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const filteredData = visitor.filter((item) =>
    item?.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SideBar
        children={
          <CusTable
            columns={columns}
            data={filteredData ? filteredData : visitor}
            heading={"View Visitors"}
            subHeading={"Welcome to Super Admin Panel"}
            route={routePaths.Visitor.login}
            loading={loading}
            showDrawer={showDrawer}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        }
        items={superAdminSidebar}
        showDrawer={showDrawer}
        open={open}
        setOpen={setOpen}
      />
      <VisitorModal
        id={id}
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        data={data}
      />
    </div>
  );
};

export default SuperAdminListVisitor;
