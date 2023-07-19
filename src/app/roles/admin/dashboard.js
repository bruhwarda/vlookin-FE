import React, { useState } from 'react'
import SideBar from '../../components/Layouts/SideBar'
import { getItem } from '../../utils/functions';
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { MdApartment } from 'react-icons/md';
import { RiWalkFill } from 'react-icons/ri';
import { BsBuildingFillAdd } from 'react-icons/bs';
import { routePaths } from '../../routes/config';
import MobileHeader from '../../components/Header/MobileHeader';
import { useMediaQuery } from 'react-responsive';
import AdminForm from '../../components/Form/adminForm';

const AdminDashboard = ({ data }) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const role = localStorage.getItem('adminRole');
    const userName = localStorage.getItem('adminName');

    const items = [
        getItem('Visitor', 'add_visitor', <RiWalkFill />),
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
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

    return (
        <div>
            <SideBar children={data} items={items} showDrawer={showDrawer} open={open} setOpen={setOpen}/>
        </div>
    )
}

export default AdminDashboard;
