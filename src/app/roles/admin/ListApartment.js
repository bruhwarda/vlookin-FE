import React, { useState, useEffect } from "react";
import { apiRoutes, routePaths } from "../../routes/config";
import CusTable from "../../components/Table/Table";
import axios from "axios";
import { DeleteModal } from "../../components/Modal";
import { EditOutlined } from "@ant-design/icons";
import { toast } from 'react-toastify';
import { CustomAlert } from "../../components/Alert";
import { useNavigate } from "react-router";
import SideBar from "../../components/Layouts/SideBar";
import { adminSidebar } from "../../utils/roleSidebar";

export const ListAppartment = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const handleEdit = (record) => {
        navigate(`/admin/editApartment/${record._id}`);
        localStorage.setItem('apartmentData', record);
    }

    const handleDelete = async (record) => {
        try {
            const url = `http://203.161.57.248:4000/apartment?id=${record._id}`
            const response = await fetch(url, {
                method: 'DELETE'
            });
            console.log(response)
            // if(response.status)
            // toast.success('Building Deleted Successfully')
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }

    const columns = [
        {
            title: 'Apartment Type',
            dataIndex: 'apartmentType',
            key: 'apartmentType',
        },
        {
            title: 'Floor Number',
            dataIndex: 'floorNo',
            key: 'floorNo',
        },
        {
            title: 'Area',
            dataIndex: 'area',
            key: 'area',
        },
        {
            title: 'Rent',
            dataIndex: 'rent',
            key: 'rent',
        },
        {
            title: 'Furnished',
            dataIndex: 'furnished',
            key: 'furnished',
        },
        {
            title: 'Update',
            key: 'Update',
            render: (_, record) => (
                <div className='icon'>
                    <EditOutlined onClick={() => handleEdit(record)} />
                    <DeleteModal handleDelete={() => handleDelete(record)} />
                </div>
            ),
        }
    ]

    useEffect(() => {
        setLoading(true)
        axios.get(apiRoutes.getApartment)
            .then((res) => {
                setData(res?.data.data)
                setLoading(false)
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <div>
            <SideBar children={<CusTable columns={columns} data={data} heading={'View Apartments'} subHeading={'admin panel'} loading={loading} route={routePaths.Admin.login} showDrawer={showDrawer} />} items={adminSidebar} showDrawer={showDrawer} open={open} setOpen={setOpen} />
            <CustomAlert />
        </div>
    )
}