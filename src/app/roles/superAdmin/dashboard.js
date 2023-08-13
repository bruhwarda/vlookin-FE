import React, { useState } from 'react'
import SideBar from '../../components/Layouts/SideBar'
import { getItem } from '../../utils/functions';
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { MdApartment } from 'react-icons/md';
import { RiWalkFill } from 'react-icons/ri';
import { BsBuildingFillAdd } from 'react-icons/bs';
import { AddSuperAdminUser } from './AddUser';

const SuperAdminDashboard = ({ data }) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const role = localStorage.getItem('superadminRole');
    const userName = localStorage.getItem('adminName');

    const items = [
        getItem('Super Admin', '1', <FaWarehouse />,
            [getItem('Add User', 'addSuperAdminUser', <HiUserAdd />),
            getItem('List User', 'superAdminUserList', <FaThList />)]),
        getItem('Maintenance', '2', <FaWarehouse />,
            [getItem('Comaplaints', 'complaints', <FaThList />)]),
        getItem('Visitor', '3', <FaWarehouse />,
            [getItem('Visitors', 'visitor', <FaThList />)])
    ];

    return (
        <div>
            <SideBar children={<AddSuperAdminUser showDrawer={showDrawer} />} items={items} role={role ? role : ''} userName={userName ? userName : ''} showDrawer={showDrawer} open={open} setOpen={setOpen} />
        </div>
    )
}

export default SuperAdminDashboard;


