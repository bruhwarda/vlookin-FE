import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from '../components/Login';
import { routePaths } from './config';
import SideBar from '../components/Layouts/SideBar';
import { AddUser } from '../roles/superAdmin/AddUser';
import { ListUser } from '../roles/superAdmin/ListUser';
import TenateForm from '../components/Form/TenateForm';
import LoginScr from '../roles/Tenant/LoginScr';
import DashboardScr from '../roles/Tenant/DashboardScr';
import VisitorDashboard from '../roles/staff/dashboard';
import ListVisitor from '../roles/staff/ListVisitor';
import ListTenant from '../roles/Tenant/ListTenant';
import EditVisitor from '../roles/staff/editVisitor';
import AppartmentForm from '../components/Form/AppartmentForm';
import AddAppartment from '../roles/admin/AddAppartment';
import { ListAppartment } from '../roles/admin/ListApartment';
import { AddBuilding } from '../roles/admin/AddBuilding';
import { ListBuilding } from '../roles/admin/ListBuilding';
import AdminDashboard from '../roles/admin/dashboard';

const Authetication = () => {
  console.log(routePaths.Admin.login);

  return (
    <Router>
      <Routes>
                          {/* AAdmin Routes */}
        <Route path={routePaths.Admin.login} exact element={<Login loginHeading={'Login'}/>} />
        <Route path={routePaths.Admin.dashboard} exact element={<AdminDashboard />} />
        <Route path={routePaths.Admin.addUser} exact element={<AddUser />} />
        <Route path={routePaths.Admin.listUser} exact element={<ListUser />} />
        <Route path={routePaths.Admin.addAppartment} exact element={<AddAppartment />} />
        <Route path={routePaths.Admin.listAppartment} exact element={<ListAppartment/>}/>
        <Route path={routePaths.Admin.addBuilding} exact element={<AddBuilding/>}/>
        <Route path={routePaths.Admin.listBuilding} exact element={<ListBuilding/>}/>
        <Route path={routePaths.Admin.addAppartment} exact element={<AddAppartment/>} />
        <Route path={routePaths.Admin.addbuilding} exact element={<AddBuilding />} />

                          {/* Tenant Routes */}

        <Route path={routePaths.Tenant.dashboard} exact element={<DashboardScr />} />
        <Route path={routePaths.Tenant.login} exact element={<LoginScr />} />
        <Route path={routePaths.Tenant.listTenant} exact element={<ListTenant />} />
        {/* <Route path={routePaths.Tenant.editTenant} exact element={<EditTenant/>}/> */}

                          {/* Visitor Routes */}

        <Route path={routePaths.Visitor.dashboard} exact element={<VisitorDashboard />} />
        <Route path={routePaths.Visitor.listVisitor} exact element={<ListVisitor />} />
        <Route path={routePaths.Visitor.login} exact element={<Login loginHeading={'Login'} />} />
        <Route path={routePaths.Visitor.editVisitor} exact element={<EditVisitor />} />
      </Routes>
    </Router>
  );
}

export default Authetication;