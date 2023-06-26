import React, { useEffect, useState } from 'react'
import { getItem } from '../../utils/functions';
import SideBar from '../../components/Layouts/SideBar';
import CusTable from '../../components/Table/Table';
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { MdApartment } from 'react-icons/md';
import { RiWalkFill } from 'react-icons/ri';
import axios from 'axios';
import { apiRoutes, routePaths } from '../../routes/config';
import { DeleteModal } from '../../components/Modal';
import { EditOutlined} from "@ant-design/icons";
import {useNavigate} from 'react-router';

const ListTenant = () => {
    const navigate = useNavigate();
    const [listData, setListData] = useState([])
    const items = [
        getItem('Tenant', '1', <FaWarehouse />,
            [getItem('Add Tenant', 'addtenant', <HiUserAdd />),
            getItem('List Tenant', 'tenantlist', <FaThList />)]),
    ];

    const handleEdit = (record) => {
        navigate(routePaths.Tenant.editTenant,{
          state:{
            visitorData: record
          }
        })
      }
    
      const handleDelete = async (record) => {     
        try {
          const url = `https://dizzy-overcoat-moth.cyclic.app/tenant?id=${record._id}`
          const response = await fetch(url, {
            method: 'DELETE'
          });
        } catch (error) {      
        } 
      }
    

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'tenantName',
            key: 'tenantName',
        },
        {
            title: 'Building Name',
            dataIndex: 'buildingName',
            key: 'buildingName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'MobileNo',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Flat No',
            dataIndex: 'flatNo',
            key: 'flatNo',
        },
        {
            title: 'Office No',
            dataIndex: 'officeNo',
            key: 'officeNo',
        },
        {
            title: 'Nationality',
            dataIndex: 'nationality',
            key: 'nationality',
        },
        {
            title: 'Update',
            key: 'Update',
            render: (_, record) => (
                <div className='icon'>
                    <EditOutlined onClick={()=>handleEdit(record)}/>
                    <DeleteModal handleDelete = {()=>handleDelete(record)}/>
                </div>
            ),
        }
    ]

    useEffect(() => {
        axios.get(apiRoutes.getTenant)
            .then((res) => { setListData(res.data.data) })
            .catch(e => console.log(e))
    }, [])
    return (
        <div>
            <SideBar children={<CusTable columns={columns} data={listData} heading={'View Tenant'} subHeading={'Welcome to Admin panel'} />} items={items} />
        </div>
    )
}

export default ListTenant
