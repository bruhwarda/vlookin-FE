import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from '../components/Login';
import { routePaths } from './config';
import SideBar from '../components/Layouts/SideBar';
import { AddUser } from '../roles/superAdmin/AddUser';
import { ListUser } from '../roles/superAdmin/ListUser';
import LoginScr from '../roles/Tenant/LoginScr';
import DashboardScr from '../roles/Tenant/DashboardScr';
import VisitorDashboard from '../roles/staff/dashboard';
import ListVisitor from '../roles/staff/ListVisitor';
import ListTenant from '../roles/Tenant/ListTenant';
import EditVisitor from '../roles/staff/editVisitor';
import { ListAppartment } from '../roles/admin/ListApartment';
import { ListBuilding } from '../roles/admin/ListBuilding';
import AdminDashboard from '../roles/admin/dashboard';
import AddAppartment from '../roles/admin/AddAppartment';
import EditTenantForm from '../components/Form/EditTenantForm';
import { EditTenant } from '../roles/Tenant/EditTenant';
import AddBuilding from '../roles/admin/AddBuilding';
import AddUsers from '../roles/admin/AddUser';
import EditBuilding from '../roles/admin/EditBuilding';
import Receipt from '../roles/staff/Receipt';

const Authetication = () => {
  console.log(routePaths.Admin.login);

  return (
    <Router>
      <Routes>
                          {/* AAdmin Routes */}
        <Route path={routePaths.Admin.login} exact element={<Login/>} />
        <Route path={routePaths.Admin.dashboard} exact element={<AdminDashboard />} />
        <Route path={routePaths.Admin.addUser} exact element={<AddUsers />} />
        <Route path={routePaths.Admin.listUser} exact element={<ListUser />} />
        <Route path={routePaths.Admin.listAppartment} exact element={<ListAppartment/>}/>
        <Route path={routePaths.Admin.listBuilding} exact element={<ListBuilding/>}/>
        <Route path={routePaths.Admin.addAppartment} exact element={<AddAppartment/>} />
        <Route path={routePaths.Admin.addbuilding} exact element={<AddBuilding/>} />
        <Route path = {routePaths.Admin.editBuilding} exact element = {<EditBuilding/>} />

                          {/* Tenant Routes */}

        <Route path={routePaths.Tenant.dashboard} exact element={<DashboardScr />} />
        <Route path={routePaths.Tenant.login} exact element={<LoginScr />} />
        <Route path={routePaths.Tenant.listTenant} exact element={<ListTenant />} />
        <Route path={routePaths.Tenant.editTenant} exact element={<EditTenant/>}/>

                          {/* Visitor Routes */}

        <Route path={routePaths.Visitor.dashboard} exact element={<VisitorDashboard />} />
        <Route path={routePaths.Visitor.listVisitor} exact element={<ListVisitor />} />
        <Route path={routePaths.Visitor.login} exact element={<Login />} />
        <Route path={routePaths.Visitor.editVisitor} exact element={<EditVisitor />} />
        <Route path={routePaths.Visitor.receipt} exact element={<Receipt />} />
      </Routes>
    </Router>
  );
}

export default Authetication;