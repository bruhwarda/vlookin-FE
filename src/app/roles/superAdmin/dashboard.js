import React from 'react'
import SideBar from '../../components/Layouts/SideBar'
import { getItem } from '../../utils/functions';
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { MdApartment } from 'react-icons/md';
import { RiWalkFill } from 'react-icons/ri';
import { BsBuildingFillAdd } from 'react-icons/bs';

const SuperAdminDashboard = ({data}) => {
    const role = localStorage.getItem('superadminRole');
    const userName = localStorage.getItem('adminName');

    const items = [
        getItem('Visitor', '1', <RiWalkFill />),
        getItem('Tenant', '2', <FaWarehouse />,
            [getItem('Add Tenant', 'addtenant', <HiUserAdd />),
            getItem('List Tenant', 'tenantlist', <FaThList />)]),
        getItem('Building', '3', <FaBuilding />,
            [getItem('Add building', 'addbuilding', <BsBuildingFillAdd />),
            getItem('List building', 'listbuilding', <FaThList />),
            getItem('Add Appartment', 'addApartment', <BsBuildingFillAdd />)
        ]),
        getItem('Appartment', '4', <MdApartment />,
            [getItem('List Appartment', 'listApartment', <FaThList />)]),
    ];

    return (
        <div>
            <SideBar children={data} items={items} userName={userName} role={role}/>
        </div>
    )
}

export default SuperSuperAdminDashboard;