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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const items = [
    getItem('Visitor', '1', <RiWalkFill />,
      [getItem('Add Visitor', 'add_visitor', <HiUserAdd />),
      getItem('List Visitor', 'list_visitor', <FaThList />)]),
  ];

  const handleEdit = (record) => {
    navigate(`/visitor/edit/${record._id}`);
    localStorage.setItem('visitorData', record);
  }

  const handleDelete = async (record) => {     
    try {
      const url = `https://dizzy-overcoat-moth.cyclic.app/visitor?id=${record._id}`
      const response = await fetch(url, {
        method: 'DELETE'
      });
    } catch (error) {      
    } 
  }

  const columns = [
    {
      title: 'Visitor Name',
      dataIndex: 'visitorName',
      key: 'visitorName',
    },
    {
      title: 'Building',
      dataIndex: 'buildingName',
      key: 'buildingName',
    },
    {
      title: 'Date',
      dataIndex: 'visitDate',
      key: 'visitDate',
    },
    {
      title: 'Flat No',
      dataIndex:'flatNo',
      key:'flatNo'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Update',
      key: 'Update',
      render: (_,record) => (
        <div className='icon'>
          <EditOutlined onClick={()=>handleEdit(record)}/>
          <DeleteModal handleDelete = {()=>handleDelete(record)}/>
        </div>
      )
    }
  ]

  useEffect(() => {
    setLoading(true)
    axios.get(apiRoutes.getVisitor)
        .then((res) => { 
          setVisitor(res.data.data)
          setLoading(false)
         })
        .catch(e => console.log(e))
}, [])

  return (
    <div>
      <SideBar children={<CusTable columns={columns} data={visitor} heading={'View Visitors'} route={routePaths.Visitor.login} loading={loading}/>} items={items}/>
    </div>
  )
}

export default ListVisitor
