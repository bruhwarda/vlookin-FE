import React, {useState, useEffect} from "react";
import { apiRoutes, routePaths } from "../../routes/config";
import CusTable from "../../components/Table/Table";
import axios from "axios";
import { DeleteModal } from "../../components/Modal";
import { EditOutlined} from "@ant-design/icons";
import {toast} from 'react-toastify';
import { CustomAlert } from "../../components/Alert";
import { useNavigate } from "react-router";
import SideBar from "../../components/Layouts/SideBar";
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { MdApartment } from 'react-icons/md';
import { RiWalkFill } from 'react-icons/ri';
import { BsBuildingFillAdd } from 'react-icons/bs';
import { getItem } from "../../utils/functions";

export const ListAppartment = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); 
    const [data, setData] = useState([]);

    const handleEdit = (record) => {
        navigate(routePaths.Tenant.editTenant)
        localStorage.setItem('apartmentData', record);
    }
    
    const handleDelete = async (record) => {     
        try {
            const url = `http://devvlookin.vlookin.com/apartment?id=${record._id}`
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
            title: 'Owner Name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Building Name',
            dataIndex: 'buildingName',
            key: 'buildingName',
        },
        {
            title: 'Building Code',
            dataIndex: 'buildingCode',
            key: 'buildingCode',
        },
        {
            title: 'Landmark',
            dataIndex: 'landmark',
            key: 'landmark',
        },
        {
            title: 'Floors',
            dataIndex: 'floorCount',
            key: 'floorCount',
        },
        {
            title: 'Parkings',
            dataIndex: 'parkingCount',
            key: 'parkingCount',
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
        setLoading(true)
        axios.get(apiRoutes.getApartment)
            .then((res) => { 
                setData(res?.data.data) 
                setLoading(false)
            })
        .catch(e => console.log(e))
    }, [])

    const items = [
        getItem('Visitor', 'add_visitor', <RiWalkFill />),
        getItem('Tenant', '2', <FaWarehouse />,
            [getItem('Add Tenant', 'addtenant', <HiUserAdd />),
            getItem('List Tenant', 'tenantlist', <FaThList />)]),
        getItem('Building', '3', <FaBuilding />,
            [getItem('Add building', 'addbuilding', <BsBuildingFillAdd />),
            getItem('List building', 'listbuilding', <FaThList />),
            getItem('Add Appartment', 'addApartment', <BsBuildingFillAdd />)
        ]),
        getItem('Appartment', '4', <MdApartment />,
            [getItem('List Appartment', 'listApartment', <FaThList />)]),
    ];

    return(
        <div>
            <SideBar children={<CusTable columns={columns} data={data} heading={'View Apartments'} subHeading={'admin panel'} loading={loading} route={routePaths.Admin.login}/>} items={items} />            
            <CustomAlert/>
        </div>
    )
}