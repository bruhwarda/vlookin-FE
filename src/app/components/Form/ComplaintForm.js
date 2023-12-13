import React, { useState } from "react";
import { Form, Col, Input, Row, Select, Upload, Button, Dropdown } from "antd";
import { CustomButton } from "../Button";
import "./style.css";
import { Header } from "../Header";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { CustomAlert } from "../Alert";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../Header/MobileHeader";
import { UploadOutlined } from "@ant-design/icons";
import { apiRoutes, routePaths } from "../../routes/config";
import { IoMdArrowDropdown } from "react-icons/io";

const ComplaintForm = ({ showDrawer }) => {
  const { TextArea } = Input;
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    userName: "",
    desc: "",
  });
  const [fileList, setFileList] = useState([]);
  const [category, setCategory] = useState("Electrician");

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const onChange = (info) => {
    setFileList(info.fileList);
  };
  const handleSave = (e) => {
    e.preventDefault();
    try {
      if (inputs.desc && inputs.userName) {
        const res = submitForm(inputs);
      } else {
        toast.error("Complete Form");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const items = [
    {
      label: "Electrician",
      key: "Electrician",
    },
    {
      label: "Plumber",
      key: "Plumber",
    },
    {
      label: "Insulation",
      key: "Insulation",
    },
    {
      label: "Glass Replacement",
      key: "Glass Replacement",
    },
  ];

  const handleMenuClick = (e) => {
    setCategory(e.key);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    console.log(e?.fileList);
    return e?.fileList;
  };

  const submitForm = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let url = apiRoutes.createComplaints;
    try {
      await axios
        .post(
          url,
          {
            images: fileList,
            createdBy: inputs.userName,
            description: inputs.desc,
            tenantId: "64a94a7ccd172273800a8c8a",
            category: category,
          },
          config
        )
        .then((response) => {
          if (response.data.status === 200) {
            toast.success("Complaint Generated Successfully");
          } else {
            toast.error("Something went wrong");
          }
        });
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div>
        {isMobile ? (
          <MobileHeader
            route={routePaths.Admin.login}
            showDrawer={showDrawer}
          />
        ) : (
          <Header
            title={"Add Complaint"}
            subtitle={"Welcome to Tenant Panel"}
            route={routePaths.Admin.login}
          />
        )}
        <div className="mb_form_heading">
          <h2>Add Complaint</h2>
          <p className="headerText">Welcome to Admin Panel</p>
        </div>
      </div>
      <div className="body">
        <Row>
          <Col md={10} sm={16}>
            <div style={{ marginTop: "15px" }}>
              <p className="form_label">Category</p>
              <Form.Item>
                <Dropdown.Button
                  menu={menuProps}
                  trigger={["click"]}
                  icon={<IoMdArrowDropdown />}
                >
                  {category}
                </Dropdown.Button>
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: "Please enter Name" }]}
              >
                <Input
                  placeholder="User name"
                  className="form_input"
                  name="userName"
                  value={inputs.userName}
                  onChange={handleChange}
                />
              </Form.Item>
              <TextArea
                showCount
                maxLength={100}
                style={{
                  height: 120,
                  marginBottom: 24,
                }}
                name="desc"
                value={inputs.desc}
                onChange={handleChange}
                placeholder="Add Description"
              />
            </div>
          </Col>
          <Col offset={isMobile ? 0 : 4} md={10} sm={16}>
            <div style={{ marginTop: "15px" }}>
              <Form.Item
                name="upload"
                label="Upload Picture"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload
                  name="logo"
                  listType="picture"
                  beforeUpload={(file) => {
                    return false;
                  }}
                  onChange={onChange} // Use the onChange callback to manage fileList state
                  fileList={fileList} // Pass the fileList state to the Upload component
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Form.Item>
            </div>
          </Col>
        </Row>
        <div className="addform_btn">
          <CustomButton
            handleClick={handleSave}
            buttonName={"Save"}
            bgColor={"#4A0D37"}
            color={"#F8F8F8"}
          />
          <CustomAlert />
        </div>
      </div>
    </>
  );
};

export default ComplaintForm;
