import React from 'react';
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { getItem } from '../../utils/functions';
import EditTenantForm from '../../components/Form/EditTenantForm';
import SideBar from '../../components/Layouts/SideBar';


export const EditTenant = () => {
    const items = [
        getItem('Tenant', '1', <FaWarehouse />,
            [getItem('Add Tenant', 'addtenant', <HiUserAdd />),
            getItem('List Tenant', 'tenantlist', <FaThList />)]),
    ];

    return(
        <div>
            <SideBar children={<EditTenantForm title={'Edit Tenant Details'} />} items={items} />
        </div>
    )
}