import React, { useState } from 'react';
import { getItem } from '../../utils/functions';
import { FaThList} from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { RiWalkFill } from 'react-icons/ri';
import SideBar from '../../components/Layouts/SideBar';
import AddVisitorForm from '../../components/Form/addVisitorForm';

const VistorDashboard = () => {
    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

    const role = localStorage.getItem('visitorRole');
    const userName = localStorage.getItem('visitorName');

    const items = [
        getItem('Visitor', '1', <RiWalkFill />,
            [getItem('Add Visitor', 'add_visitor', <HiUserAdd />)]),
    ];
    
    return (
        <div style={{width:'98vw', height:'100vh'}}>
            <SideBar children={<AddVisitorForm showDrawer={showDrawer}/>} items={items} role={role} userName={userName} showDrawer={showDrawer} open={open} setOpen={setOpen}/>
        </div>
    )
}


export default VistorDashboard;