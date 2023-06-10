import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from 'antd';
import { Login } from '../components/Login';
import ApplicationRoutes from './Pages';


const Authetication = () => {

    return (
      <Router>
        <Login/>
        {/* <ApplicationRoutes/> */}
    </Router>
  );
}

export default Authetication;