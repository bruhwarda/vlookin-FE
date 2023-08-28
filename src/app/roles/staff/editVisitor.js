import React, { useState } from 'react';
import { getItem } from '../../utils/functions';
import { FaThList} from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { RiWalkFill } from 'react-icons/ri';
import EditVisitorForm from '../../components/Form/editVisitorForm';
import SideBar from '../../components/Layouts/SideBar';

const EditVisitor = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const items = [
        getItem('Visitor', '1', <RiWalkFill />,
            [getItem('Add Visitor', 'add_visitor', <HiUserAdd />)]),
    ];

    return (
        <div>
            <SideBar children={<EditVisitorForm title={'Edit Visitor Details'} showDrawer={showDrawer}/>} items={items} role={'visitor'} userName={'AleezaVisitor'}  showDrawer={showDrawer} open={open} setOpen={setOpen}/>
        </div>
    )
}


export default EditVisitor;