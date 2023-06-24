import React from 'react';
import { getItem } from '../../utils/functions';
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { MdApartment } from 'react-icons/md';
import { RiWalkFill } from 'react-icons/ri';
import VisitorForm from '../../components/Form/editVisitorForm';
import SideBar from '../../components/Layouts/SideBar';
import AddVisitorForm from '../../components/Form/addVisitorForm';

const VistorDashboard = () => {
    const items = [
        getItem('Visitor', '1', <RiWalkFill />,
            [getItem('Add Visitor', 'add_visitor', <HiUserAdd />),
            getItem('List Visitor', 'list_visitor', <FaThList />)]),
    ];
    return (
        <div>
            <SideBar children={<AddVisitorForm title={'Add Visitor Details'} />} items={items} role={'visitor'} userName={'AleezaVisitor'} />
        </div>
    )
}


export default VistorDashboard;