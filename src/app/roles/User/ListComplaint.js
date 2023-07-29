import React, { useState, useEffect } from "react";
import { apiRoutes, routePaths } from "../../routes/config";
import CusTable from "../../components/Table/Table";
import axios from "axios";
import { CustomAlert } from "../../components/Alert";
import { useNavigate } from "react-router";
import SideBar from "../../components/Layouts/SideBar";
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { getItem } from "../../utils/functions";
import { FaEye } from 'react-icons/fa';
import FlatDropDown from "../../components/DropDown/flatDropDown";
import ViewCompliantModal from "../../components/Modal/ViewCompliantModal";

export const ListComplaint = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const [data, setData] = useState([{
        complaintTitle: 'complaint 1',
        fullName: 'reeba',
        description: 'there is something wired in pipelines hshdf jdjfs'
}]);

    const category = [
        {
            label: <a href="https://www.antgroup.com">1st menu item</a>,
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">2nd menu item</a>,
            key: '1',
        },
        {
            label: <a href="https://www.aliyun.com">3rd menu item</a>,
            key: '3',
        },
    ];
    // const columns = [
    //     {
    //         title: 'Complaint ID',
    //         dataIndex: 'complaintId',
    //         key: 'complaintId',
    //     },
    //     {
    //         title: 'User Name',
    //         dataIndex: 'username',
    //         key: 'username',
    //     },
    //     {
    //         title: 'Complaint category',
    //         dataIndex: 'category',
    //         key: 'category',
    //     },
    //     {
    //         title: 'Description',
    //         dataIndex: 'description',
    //         key: 'description',
    //     },
    //     {
    //         title: 'Status',
    //         key: 'status',
    //         render: (_, record) => (
    //             <FlatDropDown title={'Category'} items={category} />
    //         ),
    //     }
    // ]
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
        //         setData(res.data.data)
        //         setLoading(false)
        //     })
        //     .catch(e => console.log(e))
    }, [])

    const items = [
        getItem('Maintance', '2', <FaWarehouse />,
            [getItem('Add Complaint', 'addcomplaint', <HiUserAdd />),
            getItem('List Complaint', 'complaintlist', <FaThList />)]),
    ];

    return (
        <div>
            <SideBar children={<CusTable columns={columns} data={data} heading={'View Complaints'} subHeading={'admin panel'} loading={loading} route={routePaths.Admin.login} />} items={items} />
            <CustomAlert />
            <ViewCompliantModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} data={data}/>
     
        </div>
    )
}