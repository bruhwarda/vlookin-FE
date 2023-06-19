import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from '../components/Login';
import { routePaths } from './config';
import SideBar from '../components/Layouts/SideBar';
import { AddUser } from '../roles/superAdmin/AddUser';
import { ListUser } from '../roles/superAdmin/ListUser';
import TenateForm from '../components/Form/TenateForm';
import LoginScr from '../roles/Tenate/LoginScr';
import DashboardScr from '../roles/Tenate/DashboardScr';
import VisitorDashboard from '../roles/staff/dashboard';
import ListVisitor from '../roles/staff/ListVisitor';
import ListTenant from '../roles/Tenate/ListTenant';
import EditVisitor from '../roles/staff/editVisitor';

const Authetication = () => {
  console.log(routePaths.Admin.login);

  return (
    <Router>
      <Routes>
        <Route path={routePaths.Admin.login} exact element={<Login loginHeading={'Super admin login'} />} />
        <Route path={routePaths.Admin.dashboard} exact element={<SideBar />} />
        <Route path={routePaths.Admin.addUser} exact element={<AddUser />} />
        <Route path={routePaths.Admin.listUser} exact element={<ListUser />} />
        <Route path={routePaths.Tenant.dashboard} exact element={<DashboardScr />} />
        <Route path={routePaths.Tenant.login} exact element={<LoginScr />} />
        <Route path={routePaths.Tenant.listTenant} exact element={<ListTenant />} />
        <Route path={routePaths.Visitor.dashboard} exact element={<VisitorDashboard />} />
        <Route path={routePaths.Visitor.listVisitor} exact element={<ListVisitor />} />
        <Route path={routePaths.Visitor.login} exact element = {<Login loginHeading={'Visitor Login'} />} />
        <Route path={routePaths.Visitor.editVisitor} exact element = {<EditVisitor/>} />        
      </Routes>
    </Router>
  );
}

export default Authetication;