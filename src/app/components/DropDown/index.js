import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { apiRoutes } from "../../routes/config";
import axios from "axios";
import "./style.css";

const { Option } = Select;

const BuildingDropDown = ({ value, handleChange, placeholder, disabled }) => {
  const [buildingData, setBuildingData] = useState([]);

  useEffect(() => {
    // Fetch building data from the API and update state
    fetchBuildingData();
  }, []);

  const fetchBuildingData = async () => {
    try {
      axios.get(apiRoutes.getBuilding).then((response) => {
        const data = response.data.data;
        setBuildingData(data);
      });
    } catch (error) {
      console.error("Error fetching building data:", error);
    }
  };

  return (
    <Select
      placeholder={placeholder ? placeholder : "Select a Building"}
      onChange={handleChange}
      value={value}
      className="building_selector"
      disabled={disabled && disabled}
    >
      {buildingData?.map((building) => (
        <Option key={building?._id} value={building?._id}>
          {building?.buildingName} - {building?.buildingCode}
        </Option>
      ))}
    </Select>
  );
};

export default BuildingDropDown;
