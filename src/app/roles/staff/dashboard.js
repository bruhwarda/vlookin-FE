import React from 'react';
import { getItem } from '../../utils/functions';
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { MdApartment } from 'react-icons/md';
import { RiWalkFill } from 'react-icons/ri';
import VisitorForm from '../../components/Form/vistoreForm';
import SideBar from '../../components/Layouts/SideBar';

const VistorDashboard =()=>{
    const items = [
        getItem('Visitor', '1', <RiWalkFill />,
            [getItem('Add Visitor', 'sub1', <HiUserAdd />),
            getItem('List Visitor', 'sub2', <FaThList />)]),
    ];
    return(
        <div>
        <SideBar children={<VisitorForm  title={'Add Visitor Details'}/>} items={items} />
        </div>
        )
}


export default VistorDashboard;