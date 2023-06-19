import React, {useEffect, useState} from 'react'
import { getItem } from '../../utils/functions';
import { FaThList } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { RiWalkFill } from 'react-icons/ri';
import SideBar from '../../components/Layouts/SideBar';
import CusTable from '../../components/Table/Table';
import { BiEdit } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import { apiRoutes, routePaths } from '../../routes/config';
import axios from 'axios';
import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { DeleteModal } from '../../components/Modal';

const ListVisitor = () => {

  const [visitor, setVisitor] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  const items = [
    getItem('Visitor', '1', <RiWalkFill />,
      [getItem('Add Visitor', 'add_visitor', <HiUserAdd />),
      getItem('List Visitor', 'list_visitor', <FaThList />)]),
  ];

  const handleEdit = () => {
    navigate(routePaths.Visitor.editVisitor)
  }

  const columns = [
    {
      title: 'Building',
      dataIndex: 'buildingName',
      key: 'buildingName',
    },
    {
      title: 'Person',
      dataIndex: 'Person',
      key: 'Person',
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
      render: (_, record) => (
        <div className='icon'>
          <Button type='text' onClick={handleEdit}>
            <BiEdit />
          </Button>
          <DeleteModal/>
        </div>
      ),
    }
  ]

  useEffect(() => {
    axios.get(apiRoutes.getVisitor)
        .then((res) => { setVisitor(res.data.data) })
        .catch(e => console.log(e))
}, [])

  return (
    <div>
      <SideBar children={<CusTable columns={columns} data={visitor} heading={'View Visitor'} subHeading={'Welcome to Admin panel'} route={routePaths.Visitor.login}/>} items={items} />
    </div>
  )
}

export default ListVisitor
