import React from 'react'
import { Header } from '../Header'
import { Input, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './style.css'
import { Oval } from 'react-loader-spinner'

const CusTable = ({ columns, data, heading, subHeading, route, loading }) => {
  return (
    <div>
      <Header title={heading} subtitle={subHeading} route={route} />
      <div className='container'>
        <Input size="large" className='search_bar' placeholder="Search" prefix={<SearchOutlined />} />
        {loading ? 
        <div className='loader'>
        <Oval
          height={50}
          width={50}
          color="#4A0D37"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#6A164F"
          strokeWidth={5}
          strokeWidthSecondary={5}
        /></div> : 
          <Table className='table' columns={columns} dataSource={data} style={{ color: '#4A0D37' }} />
        }
      </div>
      <br />
    </div>
  )
}

export default CusTable
