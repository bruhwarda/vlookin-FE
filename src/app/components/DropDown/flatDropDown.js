import React, { useState, useEffect } from 'react';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

import { apiRoutes } from '../../routes/config';
import axios from 'axios';
import './style.css'
import { DownOutlined } from '@ant-design/icons';


const FlatDropDown = ({items, title, handleButtonClick}) => {
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Dropdown.Button 
    menu={menuProps} 
    onClick={handleButtonClick}
    icon={<DownOutlined />}>
      {title}
    </Dropdown.Button>
  );
};

export default FlatDropDown;
