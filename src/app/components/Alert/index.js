import React, {useEffect} from 'react';
import { Alert,Space, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {hideNotification} from '../../redux/notification/actions';


export const CustomAlert = () => {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.notification);

      useEffect(() => {
        if (notification.visible) {
          const timer = setTimeout(() => {
            dispatch(hideNotification());
          }, 3000);
    
          return () => clearTimeout(timer);
        }
      }, [dispatch, notification.visible]);

    return(
        <div>
            { 
                <Alert
                    type={notification.type.type}
                    message={notification.type.message}
                    placement='topRight'
                    closable
                    // onClose={()=>dispatch(hideNotification())}
                />
            }
        </div>
    )
}

