import React from 'react'
import SideBar from '../../components/Layouts/SideBar'
import TenateForm from '../../components/Form/TenateForm';
import { getItem } from '../../utils/functions';
import { FaThList, FaWarehouse} from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';

const DashboardScr = () => {

    const role = localStorage.getItem('tenantRole');
    const userName = localStorage.getItem('tenantName');

    const items = [
        getItem('Tenant', '1', <FaWarehouse />,
            [getItem('Add Tenant', 'addtenant', <HiUserAdd />),
            getItem('List Tenant', 'tenantlist', <FaThList />)]),
    ];

    return (
        <div>
            <SideBar children={<TenateForm />} items={items} role={role ? role : ''} userName={userName ? userName : ''}/>
        </div>
    )
}

export default DashboardScr;
