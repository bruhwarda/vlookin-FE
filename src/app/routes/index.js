import React from 'react';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { Login } from '../components/Login';
import { routePaths } from './config';
import SideBar from '../components/Layouts/SideBar';
import { AddUser } from '../roles/superAdmin/AddUser';
import { ListUser } from '../roles/superAdmin/ListUser';


const Authetication = () => {
  console.log(routePaths.Admin.login);

    return (
      <Router>
        <Routes>
          <Route path = {routePaths.Admin.login} exact element = {<Login loginHeading = {'Super admin login'}/>} />
          <Route path = {routePaths.Admin.dashboard} exact element = {<SideBar/>} />
          <Route path = {routePaths.Admin.addUser} exact element = {<AddUser/>} />
          <Route path = {routePaths.Admin.listUser} exact element = {<ListUser/>} />
        </Routes>
    </Router>
  );
}

export default Authetication;