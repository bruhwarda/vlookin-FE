import React, {useEffect, useState} from 'react'
import { getItem } from '../../utils/functions';
import { FaThList } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { RiWalkFill } from 'react-icons/ri';
import SideBar from '../../components/Layouts/SideBar';
import CusTable from '../../components/Table/Table';
import { apiRoutes, routePaths } from '../../routes/config';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { DeleteModal } from '../../components/Modal';
import { EditOutlined} from "@ant-design/icons";

const ListVisitor = () => {

  const [visitor, setVisitor] = useState([]);
  const navigate = useNavigate();

  const items = [
    getItem('Visitor', '1', <RiWalkFill />,
      [getItem('Add Visitor', 'add_visitor', <HiUserAdd />),
      getItem('List Visitor', 'list_visitor', <FaThList />)]),
  ];

  const handleEdit = (record) => {

    navigate(routePaths.Visitor.editVisitor,{
      state:{
        visitorId: record
      }
    })
  }

  const handleDelete = async (record) => { 
    try {
      const url = `https://dizzy-overcoat-moth.cyclic.app/visitor/${record.visitorId}`
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
      };
      await axios.delete(url, config)
    } catch (error) {      
    } 
  }

  const columns = [
    {
      title: 'Building',
      dataIndex: 'buildingName',
      key: 'buildingName',
    },
    {
      title: 'Visitor Id',
      dataIndex: 'visitorId',
      key: 'visitorId',
    },
    {
      title: 'Date',
      dataIndex: 'visitDate',
      key: 'visitDate',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'MobileNo',
      dataIndex: 'mobNo',
      key: 'mobNo',
    },
    {
      title: 'Update',
      key: 'Update',
      render: (record) => (
        <div className='icon'>
          <EditOutlined onClick={()=>handleEdit(record)}/>
          <DeleteModal handleDelete = {()=>handleDelete(record)}/>
        </div>
      ),
    }
  ]

  useEffect(() => {
    axios.get(apiRoutes.getVisitor)
        .then((res) => { 
          setVisitor(res.data.data.visitorData)
         })
        .catch(e => console.log(e))
}, [])

  return (
    <div>
      <SideBar children={<CusTable columns={columns} data={visitor} heading={'View Visitors'} route={routePaths.Visitor.login}/>} items={items} />
    </div>
  )
}

export default ListVisitor
