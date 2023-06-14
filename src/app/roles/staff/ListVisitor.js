import React from 'react'
import { getItem } from '../../utils/functions';
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { RiWalkFill } from 'react-icons/ri';
import SideBar from '../../components/Layouts/SideBar';
import CusTable from '../../components/Table/Table';
import { Button, Space } from 'antd';
import { BiEdit } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import { Icons } from '../../../assets';

const ListVisitor = () => {
  const items = [
    getItem('Visitor', '1', <RiWalkFill />,
      [getItem('Add Visitor', 'add_visitor', <HiUserAdd />),
      getItem('List Visitor', 'list_visitor', <FaThList />)]),
  ];
  const columns = [
    {
      title: 'Building',
      dataIndex: 'Building',
      key: 'Building',
    },
    {
      title: 'Person',
      dataIndex: 'Person',
      key: 'Person',
    },
    {
      title: 'Date',
      dataIndex: 'Date',
      key: 'Date',
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
  return (
    <div>
      <SideBar children={<CusTable columns={columns} data={data} heading={'View Visitor'} subHeading={'Welcome to Admin panel'}/>} items={items} />
    </div>
  )
}

export default ListVisitor
