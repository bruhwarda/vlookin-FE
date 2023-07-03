import React from 'react';
import { getItem } from '../../utils/functions';
import { FaThList} from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { RiWalkFill } from 'react-icons/ri';
import SideBar from '../../components/Layouts/SideBar';
import AddVisitorForm from '../../components/Form/addVisitorForm';

const VistorDashboard = () => {

    const role = localStorage.getItem('visitorRole');
    const userName = localStorage.getItem('visitorName');

    const items = [
        getItem('Visitor', '1', <RiWalkFill />,
            [getItem('Add Visitor', 'add_visitor', <HiUserAdd />),
            getItem('List Visitor', 'list_visitor', <FaThList />)]),
    ];
    return (
        <div>
            <SideBar children={<AddVisitorForm/>} items={items} role={role} userName={userName} />
        </div>
    )
}


export default VistorDashboard;