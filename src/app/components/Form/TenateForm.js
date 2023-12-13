import React, { useState } from "react";
import { Col, Input, Row, Form } from "antd";
import { CustomButton, CustomOutlineButton } from "../Button";
import "./style.css";
import { Header } from "../Header";
import OTPmodal from "../Modal/OTPmodal";
import { apiRoutes, routePaths } from "../../routes/config";
import axios from "axios";
import { toast } from "react-toastify";
import { CustomAlert } from "../Alert";
import BuildingDropDown from "../DropDown";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../Header/MobileHeader";
import ReceiptModal from "../Modal/ReceiptModal";

const TenateForm = ({ title, showDrawer }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [modalOpen, setModalOpen] = useState(false);

  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    buildingNo: "",
    flatNo: "",
    mobileNo: "",
    officeNo: "",
    nationality: "",
  });

  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [receiptModal, setReceiptModal] = useState(false);
  const [tableShow, setTableShow] = useState(false);

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleBuildingChange = (value) => {
    setSelectedBuilding(value);
  };

  const onCancel = () => {
    setModalOpen(false);
    setReceiptModal(false);
    setTableShow(false);
  };

  const handleReceiptButton = () => {
    setReceiptModal(false);
    setModalOpen(true);
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (
      inputs.name &&
      inputs.email &&
      selectedBuilding &&
      inputs.flatNo &&
      inputs.mobileNo &&
      inputs.nationality &&
      inputs.officeNo
    ) {
      createTenant(inputs);
    } else {
      toast.error("Complete Form");
    }
  };

  const createTenant = async (inputs) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let url = apiRoutes.postTenant;
    try {
      await axios
        .post(
          url,
          {
            tenantName: inputs.name,
            email: inputs.email,
            buildingName: selectedBuilding,
            flatNo: inputs.flatNo,
            contact: inputs.mobileNo,
            nationality: inputs.nationality,
            officeNo: inputs.officeNo,
          },
          config
        )
        .then((response) => {
          if (response?.data?.status === 200) {
            setReceiptModal(true);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message);
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
            route={routePaths.Visitor.login}
            showDrawer={showDrawer}
          />
        ) : (
          <Header
            title={"Add Tenant Details"}
            subtitle={"Welcome to Tenant Panel"}
            route={routePaths.Tenant.login}
          />
        )}
        <div className="mb_form_heading">
          <h2>Add Tenant Details</h2>
          <p className="headerText">Welcome to Tenant Panel</p>
        </div>
      </div>
      <div className="body">
        <Row>
          <Col md={10} sm={16}>
            <Input
              placeholder="Full name"
              className="form_input"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
            <Input
              placeholder="Email"
              className="form_input"
              name="email"
              type="email"
              value={inputs.email}
              onChange={handleChange}
            />
            <div>
              <Input
                placeholder="Mobile No."
                className="form_input"
                name="mobileNo"
                value={inputs.mobileNo}
                onChange={handleChange}
              />
              <Input
                placeholder="Nationality"
                className="form_input"
                name="nationality"
                value={inputs.nationality}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col offset={isMobile ? 0 : 4} md={10} sm={16}>
            <label style={{ color: "#4A0D37" }}>Building Name</label>
            <BuildingDropDown
              value={selectedBuilding}
              handleChange={handleBuildingChange}
            />
            <Input
              placeholder="Flat no"
              className="form_input"
              name="flatNo"
              value={inputs.flatNo}
              onChange={handleChange}
            />
            <Input
              placeholder="Office No. "
              className="form_input"
              name="officeNo"
              value={inputs.officeNo}
              onChange={handleChange}
            />
            <CustomButton
              handleClick={handleSave}
              buttonName={"Save"}
              bgColor={"#4A0D37"}
              color={"#F8F8F8"}
            />
          </Col>
        </Row>
      </div>
      {/* for receipt modal testing */}
      <ReceiptModal
        route={routePaths.Visitor.listVisitor}
        open={receiptModal}
        setOpen={setReceiptModal}
        onCancel={onCancel}
        handleButton={handleReceiptButton}
        setTableShow={setTableShow}
        tableShow={tableShow}
      />
      <OTPmodal open={modalOpen} onCancel={onCancel} />
      <CustomAlert />
    </>
  );
};

export default TenateForm;
