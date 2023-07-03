import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { apiRoutes } from '../../routes/config';
import axios from 'axios';
import './style.css'

const {Option} = Select;

const FlatDropDown = ({value, handleChange}) => {
  const [buildingData, setBuildingData] = useState([]);

  useEffect(() => {
    // Fetch building data from the API and update state
    fetchBuildingData();
  }, []);

  const fetchBuildingData = async () => {
    try {
      axios.get(apiRoutes.getBuilding)
            .then((response)=>{
                const data = response.data.data;
                setBuildingData(data);
                console.log(data);
            })
    } catch (error) {
      console.error('Error fetching building data:', error);
    }
  };


  return (
    <Select
      placeholder="Select a building"
      onChange={handleChange}
      value={value}
      className='building_selector'
    >
      {buildingData.map((building) => (
        <Option key={building.buildingCode} value={building.buildingName}>
          {building.buildingName} - {building.buildingCode}
        </Option>
      ))}
    </Select>
  );
};

export default FlatDropDown;
