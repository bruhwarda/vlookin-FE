import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Space, Button, Modal } from 'antd';
import { MdDeleteForever } from 'react-icons/md';

const { confirm } = Modal;

export const DeleteModal = () => {

    const handleOk = () => {
        console.log('ok');
    }

    const showDeleteConfirm = () => {
        confirm({
          title: 'Are you sure to delete this record?',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            handleOk();
          }
        });
      };
    return(
        <div>
            <Space wrap>
                <Button onClick={showDeleteConfirm} type="text">
                    <MdDeleteForever/>
                </Button>
              </Space>
        </div>
    )
}