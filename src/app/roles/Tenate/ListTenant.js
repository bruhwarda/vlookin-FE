import React, { useEffect, useState } from 'react'
import { getItem } from '../../utils/functions';
import SideBar from '../../components/Layouts/SideBar';
import CusTable from '../../components/Table/Table';
import { BiEdit } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { MdApartment } from 'react-icons/md';
import { RiWalkFill } from 'react-icons/ri';
import { Icons } from '../../../assets';
import axios from 'axios';

const ListTenant = () => {
    const [listData, setListData] = useState([])
    const items = [
        getItem('Visitor', '1', <RiWalkFill />),
        getItem('Tenant', '2', <FaWarehouse />,
            [getItem('Add Tenant', 'addtenant', <HiUserAdd />),
            getItem('List Tenant', 'tenantlist', <FaThList />)]),
        getItem('Building', '3', <FaBuilding />),
        getItem('Appartment', '4', <MdApartment />),
    ];

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'tenantName',
            key: 'tenantName',
        },
        {
            title: 'Building',
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
                // <Space size="middle">
                <div className='icon'>
                    <BiEdit />
                    <MdDeleteForever />
                </div>
                // </Space>
            ),
        }
    ]
    const data = [
        {
            Building: 'Al jedadh',
            name: 'Umer',
            mobNo: '57 765 7028',
            Person: 'Visitor',
            Date: '2023-03-12',
            email: 'umer30@gmail.com'
        },
        {
            Building: 'Al jedadh',
            name: 'Umer',
            mobNo: '57 765 7028',
            Person: 'Visitor',
            Date: '2023-03-12',
            email: 'umer30@gmail.com'
        },
        {
            Building: 'Al jedadh',
            name: 'Umer',
            mobNo: '57 765 7028',
            Person: 'Visitor',
            Date: '2023-03-12',
            email: 'umer30@gmail.com',
        },

    ];
    useEffect(() => {
        axios.get('https://dizzy-overcoat-moth.cyclic.app/data')
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
