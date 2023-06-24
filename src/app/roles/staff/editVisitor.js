import React from 'react';
import { getItem } from '../../utils/functions';
import { FaThList} from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { RiWalkFill } from 'react-icons/ri';
import EditVisitorForm from '../../components/Form/editVisitorForm';
import SideBar from '../../components/Layouts/SideBar';

const EditVisitor = () => {
    const items = [
        getItem('Visitor', '1', <RiWalkFill />,
            [getItem('Add Visitor', 'add_visitor', <HiUserAdd />),
            getItem('List Visitor', 'list_visitor', <FaThList />)]),
    ];
    return (
        <div>
            <SideBar children={<EditVisitorForm title={'Edit Visitor Details'} />} items={items} role={'visitor'} userName={'AleezaVisitor'} />
        </div>
    )
}


export default EditVisitor;