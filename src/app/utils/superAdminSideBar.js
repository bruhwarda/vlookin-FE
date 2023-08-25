import { FaThList, FaWarehouse, FaBuilding, FaEye } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { MdApartment, MdOutlineDomainDisabled } from 'react-icons/md';
import { RiWalkFill } from 'react-icons/ri';
import { BsBuildingFillAdd } from 'react-icons/bs';
import { BiMessageError } from 'react-icons/bi';
import { getItem } from './functions';

export const superAdminSidebar = [
    getItem('Super Admin', '2', <FaWarehouse />,
        [getItem('Add User', 'addSuperAdminUser', <HiUserAdd />),
        getItem('List User', 'listSuperAdminUser', <FaThList />)],
        ), 
    getItem('Maintenance', '1', <FaWarehouse />,
        [getItem('List Comaplaints', 'complaints', <FaThList />)]),
    getItem('Visitor', '1', <FaWarehouse />,
        [getItem('List Visitor', 'visitor', <FaThList />)]),
    getItem('Tenants', '1', <FaWarehouse />,
        [getItem('List Tenants', 'tenant', <FaThList />)]),
    getItem('Building', '1', <FaWarehouse />,
        [getItem('List Buildings', 'building', <FaThList />)])
];