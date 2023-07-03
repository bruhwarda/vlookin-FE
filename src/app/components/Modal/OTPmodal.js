import { Modal } from 'antd'
import React from 'react'
import './style.css'
import { CustomButton } from '../Button'

const OTPmodal = (props) => {
  return (
    <>
      <Modal
        centered
        open={props.open}
        // onOk={props.onOk}
        onCancel={props.onCancel}
        okButtonProps={{
          style: {
            display: "none",
          },
        }}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
        <div className='modal_container'>
          <h2>Please enter the OTP to verify your account</h2>
          <p>A OTP is send to your email</p>
          <div className='otp_input_grp'>
            <input type='text' minLength={1} maxLength={1} />
            <input type='text' minLength={1} maxLength={1} />
            <input type='text' minLength={1} maxLength={1} />
            <input type='text' minLength={1} maxLength={1} />
            <input type='text' minLength={1} maxLength={1} />
          </div>
          <p className='resend'>Didn't receive OTP?<a className='resend_link'>Resend OTP</a></p>
          <CustomButton buttonName={'Verify'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
        </div>
      </Modal>
    </>
  )
}

export default OTPmodal
