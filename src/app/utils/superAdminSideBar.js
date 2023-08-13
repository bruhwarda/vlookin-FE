import { FaThList, FaWarehouse, FaBuilding, FaEye } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { MdApartment, MdOutlineDomainDisabled } from 'react-icons/md';
import { RiWalkFill } from 'react-icons/ri';
import { BsBuildingFillAdd } from 'react-icons/bs';
import { BiMessageError } from 'react-icons/bi';
import { getItem } from './functions';

export const superAdminSidebar = [
    getItem('Super Admin', '1', <FaWarehouse />,
        [getItem('Add User', 'addSuperAdminUser', <HiUserAdd />),
            
        ]), 
    getItem('Maintenance', '2', <FaWarehouse />,
        [getItem('List Comaplaints', 'complaints', <FaThList />)]),
    getItem('Visitor', '3', <FaWarehouse />,
        [getItem('List Visitor', 'visitor', <FaThList />)])

];