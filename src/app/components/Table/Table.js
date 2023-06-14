import React from 'react'
import { Header } from '../Header'
import { Input, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './style.css'

const CusTable = ({ columns, data, heading, subHeading }) => {
  console.log(heading, subHeading)
  return (
    <div>
      <Header title={heading} subtitle={subHeading} />
      <div className='container'>
        <Input size="large" className='search_bar' placeholder="Search" prefix={<SearchOutlined />} />
        <Table className='table' columns={columns} dataSource={data} />
      </div>
      <br />
    </div>
  )
}

export default CusTable
