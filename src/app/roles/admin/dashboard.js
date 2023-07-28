import React, { useState } from 'react'
import SideBar from '../../components/Layouts/SideBar'
import { useMediaQuery } from 'react-responsive';
import { adminSidebar } from '../../utils/roleSidebar';

const AdminDashboard = ({ data }) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const role = localStorage.getItem('adminRole');
    const userName = localStorage.getItem('adminName');
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    return (
        <div>
            <SideBar children={data} items={adminSidebar} showDrawer={showDrawer} open={open} setOpen={setOpen} />
        </div>
    )
}

export default AdminDashboard;
