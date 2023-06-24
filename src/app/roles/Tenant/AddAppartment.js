import React from 'react'
import SideBar from '../../components/Layouts/SideBar'
import TenateForm from '../../components/Form/TenateForm';
import { getItem } from '../../utils/functions';
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { MdApartment } from 'react-icons/md';
import { RiWalkFill } from 'react-icons/ri';
import { BsBuildingFillAdd } from 'react-icons/bs';
import AppartmentForm from '../../components/Form/AppartmentForm';

const AddAppartment = () => {
    const items = [
        getItem('Visitor', '1', <RiWalkFill />),
        getItem('Tenant', '2', <FaWarehouse />,
            [getItem('Add Tenant', 'addtenant', <HiUserAdd />),
            getItem('List Tenant', 'tenantlist', <FaThList />)]),
        getItem('Building', '3', <FaBuilding />,
            [getItem('Add building', 'addbuilding', <BsBuildingFillAdd />),
            getItem('List building', 'listbuilding', <FaThList />)]),
        getItem('Appartment', '4', <MdApartment />,
            [getItem('Add Appartment', 'addAppartment', <BsBuildingFillAdd />),
            getItem('List Appartment', 'listAppartment', <FaThList />)]),
    ];

    return (
        <div>
            <SideBar children={<AppartmentForm title={'Add Appartment Details'} />} items={items} />
        </div>
    )
}

export default AddAppartment;
