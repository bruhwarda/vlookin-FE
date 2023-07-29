import React, { useState, useEffect } from "react";
import { apiRoutes, routePaths } from "../../routes/config";
import CusTable from "../../components/Table/Table";
import axios from "axios";
import { toast } from 'react-toastify';
import { CustomAlert } from "../../components/Alert";
import { useNavigate } from "react-router";
import SideBar from "../../components/Layouts/SideBar";
import { FaEye } from 'react-icons/fa';
import { adminSidebar } from "../../utils/roleSidebar";
import ViewCompliantModal from "../../components/Modal/ViewCompliantModal";

export const AdminListComplaint = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([{
        complaintTitle: 'complaint 1',
        fullName: 'reeba',
        description: 'there is something wired in pipelines hshdf jdjfs'
    }]);
    const [open, setOpen] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const handleEdit = (record) => {
        navigate(`/admin/editBuilding/${record._id}`);
        localStorage.setItem('buildingData', record);
    }

    const handleDelete = async (record) => {
        try {
            const url = `http://203.161.57.248:4000/building?id=${record._id}`
            const response = await fetch(url, {
                method: 'DELETE'
            });
            toast.success('Building Deleted Successfully')
        } catch (error) {
            toast.error(error);
        }
    }

    const columns = [
        {
            title: 'Complaint Title',
            dataIndex: 'complaintTitle',
            key: 'complaintTitle',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div className='icon'>
                    <FaEye onClick={() => {
                        console.log('click')
                        setVisibleModal(true)}} />
                </div>
            ),
        }
    ]

    useEffect(() => {
        // setLoading(true)
        // axios.get(apiRoutes.getBuilding)
        //     .then((res) => { 
        //         console.log(res.data.data)
        //         setData(res.data.data) 
        //         setLoading(false)
        //     })
        // .catch(e => console.log(e))
    }, [])

    return (
        <div>
            <SideBar children={<CusTable columns={columns} data={data} heading={'Complaint List'} subHeading={'admin panel'} loading={loading} route={routePaths.Admin.login} showDrawer={showDrawer} />} showDrawer={showDrawer} open={open} setOpen={setOpen} items={adminSidebar} />
            <CustomAlert />
            <ViewCompliantModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} data={data}/>
        </div>
    )
}