import React from 'react'
import SideBar from '../../components/Layouts/SideBar'
import TenateForm from '../../components/Form/TenateForm';
import { getItem } from '../../utils/functions';
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { MdApartment } from 'react-icons/md';
import { RiWalkFill } from 'react-icons/ri';

const DashboardScr = () => {
    const items = [
        getItem('Visitor', '1', <RiWalkFill />),
        getItem('Tenant', '2', <FaWarehouse />,
            [getItem('Add Tenant', 'sub1', <HiUserAdd />),
            getItem('List Tenant', 'sub2', <FaThList />)]),
        getItem('Building', '3', <FaBuilding />),
        getItem('Appartment', '4', <MdApartment />),
    ];

    return (
        <div>
            <SideBar children={<TenateForm  title={'Add Tenant Details'}/>} items={items} />
        </div>
    )
}

export default DashboardScr;